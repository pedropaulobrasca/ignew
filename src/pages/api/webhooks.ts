import { NextApiRequest, NextApiResponse } from 'next';

export default function (req: NextApiRequest, res: NextApiResponse) {
  console.log('Recived event');
  return res.status(200).json({ ok: true });
}
