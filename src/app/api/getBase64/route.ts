import { NextRequest, NextResponse } from 'next/server';
import { getPlaiceholder } from 'plaiceholder';

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get('url');

  if (!url) {
    return NextResponse.json({ error: 'URL is required' }, { status: 400 });
  }

  try {
    const buffer = await fetch(url).then(async (response) =>
      Buffer.from(await response.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    const svg = `
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'>
        <filter id='b' color-interpolation-filters='sRGB'>
          <feGaussianBlur stdDeviation='20'/>
          <feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/>
          <feFlood x='0' y='0' width='100%' height='100%'/>
          <feComposite operator='out' in='s'/>
          <feComposite in2='SourceGraphic'/>
          <feGaussianBlur stdDeviation='20'/>
        </filter>
        <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='none' style='filter: url(#b);' href='${base64}'/>
      </svg>
    `;

    const encodedSvg = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;

    return NextResponse.json({ svg: encodedSvg }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to fetch image' }, { status: 500 });
  }
};