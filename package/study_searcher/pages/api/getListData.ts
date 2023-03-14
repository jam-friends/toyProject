import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = new Client({
    auth: "secret_IMzweN6kdK06j2lcr1Su5JJ1GP679adBwkanvUD30L5",
  });

  const myPosts = await client.databases.query({
    database_id: "010e4f2a34d94c7a98d8c5db6143fc4e",
  });

  console.log("#####", myPosts.results[0]);

  res.status(200).json({ data: myPosts });
}
