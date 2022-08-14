import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body: any = JSON.parse(req.body);
    const manuscriptId: number = body.manuscriptId;
    const filterParams: any = body.filterParams;
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Something went wrong' });
  }
};
