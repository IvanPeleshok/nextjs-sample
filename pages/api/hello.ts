// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../lib/dbConnect';

type Data = {
  name: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // res.status(200).json({ name: 'John Doe' });
  return new Response(JSON.stringify({name: "John Doe"}), { status: 200 });
}
