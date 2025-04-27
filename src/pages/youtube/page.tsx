'use client'
import React from 'react'

import YoutubeLite from '@components/youtube-lite'
// import YoutubeLite from 'react-youtube';



interface YoutubeProps {

}

const Youtube: React.FC<YoutubeProps> = () => {
    return (
        <YoutubeLite videoId='GyRq69v-NfA' posterImage="/img/nanify.webp"></YoutubeLite>
    );
}

export default Youtube;