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
    const bookTitles: any = JSON.parse(req.body);
    bookTitles.forEach(async (bookTitle: any) => {
      const updatedBook = await prisma.book.updateMany({
        where: {
          title: bookTitle,
        },
        data: {
          uploaded: true,
        },
      });
    });

    await delay(2000);

    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Something went wrong' });
  }
};
