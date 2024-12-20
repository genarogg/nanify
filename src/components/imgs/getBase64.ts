import { getPlaiceholder } from "plaiceholder";

const getBase64 = async (url: string) => {

  try {
    const src = url

    const buffer = await fetch(src).then(async (res) =>
      Buffer.from(await res.arrayBuffer())
    );

    const { base64 } = await getPlaiceholder(buffer);
    
    return base64;

  } catch (err) {
    err;
  }

}

export default getBase64;