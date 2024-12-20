import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (url: string) => {
  try {
    const src = url;

    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);

    const svgTemplate = `
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'>
      <filter id='b' color-interpolation-filters='sRGB'>
        <feGaussianBlur stdDeviation='20'/>
        <feColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/>
        <feFlood x='0' y='0' width='100%' height='100%'/>
        <feComposite operator='out' in='s'/>
        <feComposite in2='SourceGraphic'/>
        <feGaussianBlur stdDeviation='20'/>
      </filter>
      <image width='100%' height='100%' x='0' y='0' preserveAspectRatio='none' style='filter: url(#b);' href='${base64}'/>
    </svg>`;

    const encodedSvg = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgTemplate)}`;

    console.log("hola:", encodedSvg);
    return encodedSvg;

  } catch (err) {
    console.error(err);
  }
}

export default getBase64;