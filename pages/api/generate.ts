import type { NextApiRequest, NextApiResponse } from "next";

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
  let startResponse = await fetch(
    "https://ar2427--controlnet-cli-get-data-dev.modal.run",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        img_url: imageUrl,
        choices: stringChoice,
      }),
    }
  );
  console.log({ startResponse });
  let restoredImage = await startResponse.json();
  console.log({ restoredImage });

  res
    .status(200)
    .json(restoredImage ? restoredImage : "Failed to restore image");
}
