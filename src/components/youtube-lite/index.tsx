import React, { useEffect, useRef, forwardRef } from 'react';
import './_style.scss';

// Definición de los tipos para props
interface YoutubeLiteProps {
  videoId: string;
  title?: string;
  playLabel?: string;
  params?: string;
  jsApi?: boolean;
  posterImage?: string;
  className?: string;
}

// Definición de los tipos para la ref expuesta
interface YoutubeLiteRef {
  getYTPlayer: () => Promise<Window | null>;
}

// Extendemos HTMLElement para nuestro elemento personalizado
interface LiteYoutubeElement extends HTMLElement {
  getYTPlayer: () => Promise<Window>;
  videoId?: string;
  playLabel?: string;
  iframe?: HTMLIFrameElement;
  playerPromise?: Promise<Window>;
}

const YoutubeLite = forwardRef<YoutubeLiteRef, YoutubeLiteProps>(
  ({ videoId, title, playLabel, params = '', jsApi = false, posterImage, className = '' }, ref) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<LiteYoutubeElement | null>(null);

    useEffect(() => {
      // Load the lite-youtube-embed custom element if it's not already loaded
      if (!window.customElements.get('lite-youtube')) {
        // Definición de tipos para el elemento custom
        interface CustomLiteYTEmbedConstructor {
          new (): LiteYoutubeElement;
          readonly prototype: LiteYoutubeElement;
          preconnected?: boolean;
          warmConnections(): void;
          preconnect(domain: string): void;
        }

        class LiteYTEmbed extends HTMLElement implements LiteYoutubeElement {
          videoId: string = '';
          playLabel: string = '';
          iframe?: HTMLIFrameElement;
          playerPromise?: Promise<Window>;
          
          connectedCallback() {
            this.videoId = this.getAttribute('videoid') || '';
            this.playLabel = this.getAttribute('playlabel') || 'Play';
            
            let playBtnEl = this.querySelector('.lty-playbtn');
            if (!playBtnEl) {
              playBtnEl = document.createElement('button');
              playBtnEl.className = 'lty-playbtn';
              playBtnEl.setAttribute('title', this.playLabel); // Corrección: usar setAttribute en lugar de .title
              playBtnEl.innerHTML = `<span class="lyt-visually-hidden">${this.playLabel}</span>`;
              this.append(playBtnEl);
            }
            
            // On hover (or tap), warm up the TCP connections we're (likely) about to use.
            this.addEventListener('pointerover', (LiteYTEmbed as unknown as CustomLiteYTEmbedConstructor).warmConnections, {once: true});
            
            // Set up click handler for the video
            this.addEventListener('click', () => this.addIframe());
            
            // Add title if available
            if (this.hasAttribute('title')) {
              const titleEl = document.createElement('div');
              titleEl.className = 'lty-title';
              titleEl.textContent = this.getAttribute('title') || '';
              this.append(titleEl);
            }
            
            // Load thumbnail if no custom background is set
            if (!this.style.backgroundImage) {
              const posterUrl = this.getPosterUrl();
              this.style.backgroundImage = `url('${posterUrl}')`;
            }
          }
          
          getPosterUrl() {
            const posterQuality = this.getAttribute('posterquality') || 'hqdefault';
            return `https://i.ytimg.com/vi/${this.videoId}/${posterQuality}.jpg`;
          }
          
          static warmConnections() {
            if ((LiteYTEmbed as unknown as CustomLiteYTEmbedConstructor).preconnected) return;
            
            // The iframe document and most of its subresources come right off youtube.com
            LiteYTEmbed.preconnect('https://www.youtube-nocookie.com');
            // The botguard script is fetched off from google.com
            LiteYTEmbed.preconnect('https://www.google.com');
            
            // Not certain if these ad related domains are in the critical path. Could verify with domain-specific throttling.
            LiteYTEmbed.preconnect('https://googleads.g.doubleclick.net');
            LiteYTEmbed.preconnect('https://static.doubleclick.net');
            
            (LiteYTEmbed as unknown as CustomLiteYTEmbedConstructor).preconnected = true;
          }
          
          static preconnect(domain: string) {
            const linkEl = document.createElement('link');
            linkEl.rel = 'preconnect';
            linkEl.href = domain;
            document.head.append(linkEl);
          }
          
          async getYTPlayer(): Promise<Window> {
            if (this.playerPromise) return this.playerPromise;
            
            this.playerPromise = new Promise<Window>(resolve => {
              if (this.iframe && this.iframe.contentWindow) {
                resolve(this.iframe.contentWindow);
              } else {
                this.addEventListener('liteYoutubeIframeLoaded', () => {
                  if (this.iframe && this.iframe.contentWindow) {
                    resolve(this.iframe.contentWindow);
                  }
                }, {once: true});
                
                if (!this.querySelector('iframe')) {
                  this.addIframe(true);
                }
              }
            });
            
            return this.playerPromise;
          }
          
          addIframe(isApiOnly?: boolean) {
            if (this.classList.contains('lyt-activated')) return;
            if (!isApiOnly) this.classList.add('lyt-activated');
            
            const params = new URLSearchParams(this.getAttribute('params') || '');
            if (!params.get('autoplay') && !isApiOnly) params.set('autoplay', '1');
            
            const jsApi = (this.getAttribute('js-api') !== null) || isApiOnly;
            if (jsApi) params.set('enablejsapi', '1');
            
            const muted = (this.getAttribute('muted') !== null) || isApiOnly;
            if (muted) params.set('mute', '1');
            
            const iframeSrc = `https://www.youtube-nocookie.com/embed/${this.videoId}?${params.toString()}`;
            
            const iframe = document.createElement('iframe');
            iframe.width = '560';
            iframe.height = '315';
            iframe.setAttribute('title', this.playLabel); // Corrección: usar setAttribute en lugar de .title
            iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            iframe.src = iframeSrc;
            
            this.iframe = iframe;
            this.append(iframe);
            
            if (jsApi) {
              iframe.onload = () => {
                this.dispatchEvent(new CustomEvent('liteYoutubeIframeLoaded'));
              };
            }
          }
        }
        
        customElements.define('lite-youtube', LiteYTEmbed);
      }
    }, []);

    // Set up the custom element after component mount
    useEffect(() => {
      if (elementRef.current) {
        const element = elementRef.current;
        
        // Create a lite-youtube custom element
        const liteYt = document.createElement('lite-youtube') as LiteYoutubeElement;
        liteYt.setAttribute('videoid', videoId);
        
        if (title) {
          liteYt.setAttribute('title', title);
        }
        
        if (playLabel) {
          liteYt.setAttribute('playlabel', playLabel);
        }
        
        if (params) {
          liteYt.setAttribute('params', params);
        }
        
        if (jsApi) {
          liteYt.setAttribute('js-api', '');
        }
        
        if (posterImage) {
          liteYt.style.backgroundImage = `url('${posterImage}')`;
        }
        
        if (className) {
          liteYt.className = className;
        }
        
        // Store reference to access the YouTube player API if needed
        playerRef.current = liteYt;
        
        // Clear and append
        while (element.firstChild) {
          element.removeChild(element.firstChild);
        }
        element.appendChild(liteYt);
      }
      
      return () => {
        // Cleanup if needed
      };
    }, [videoId, title, playLabel, params, jsApi, posterImage, className]);

    // Method to expose the YouTube Iframe Player API functionality
    const getYTPlayer = async (): Promise<Window | null> => {
      if (playerRef.current) {
        return await playerRef.current.getYTPlayer();
      }
      return null;
    };

    // Expose the getYTPlayer method through the ref
    React.useImperativeHandle(
      ref,
      () => ({
        getYTPlayer
      }),
      []
    );

    return <div ref={elementRef} className={`youtube-lite-container ${className}`}></div>;
  }
);

// Nombre para mostrar en DevTools
YoutubeLite.displayName = 'YoutubeLite';

export default YoutubeLite;