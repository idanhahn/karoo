import { Prisma } from '@prisma/client';
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import prisma from '../../lib/prisma';

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const body: any = JSON.parse(req.body);
    const manuscriptTitle: any = body.files[0];
    const userEmail: any = body.userEmail;

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    const updatedManuscripts = await prisma.manuscript.updateMany({
      where: {
        userId: user?.id,
        title: manuscriptTitle,
      },
      data: {
        active: true,
      },
    });

    const modifiedManuscript = await prisma.manuscript.findMany({
      where: {
        userId: user?.id,
        title: manuscriptTitle,
      },
    });

    // make sure only one was updated
    if (modifiedManuscript.length > 1) {
      throw 'Only 1 manuscript allow';
    }

    //await delay(2000);

    res.status(200).json({ manuscriptId: modifiedManuscript[0].id });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Something went wrong' });
  }
};
