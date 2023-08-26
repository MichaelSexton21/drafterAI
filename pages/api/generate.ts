import type { NextApiRequest, NextApiResponse } from "next";

import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN!,
});

type Data = string;
interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    imageUrl: string;
    stringChoice: string;
  };
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  const imageUrl = req.body.imageUrl;
  const stringChoice = req.body.stringChoice;
  console.log({ imageUrl, stringChoice });
  // POST request to Replicate to start the image restoration generation process
  const output = await replicate.run(
    "jagilley/controlnet-canny:aff48af9c68d162388d230a2ab003f68d2638d88307bdaf1c2f1ac95079c9613",
    {
      input: {
        image: imageUrl,
        prompt: stringChoice,
      },
    }
  );
  console.log({ output });
  // Modal code
  // let startResponse = await fetch(
  //   "https://ar2427--controlnet-cli-get-data-dev.modal.run",
  //   {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       img_url: imageUrl,
  //       choices: stringChoice,
  //     }),
  //   }
  // );
  // console.log({ startResponse });
  // let restoredImage = await startResponse.json();
  // console.log({ restoredImage });
  // @ts-ignore
  res.status(200).json(output[1] ? output[1] : "Failed to get image");
  //.json(restoredImage ? restoredImage : "Failed to restore image");
}
