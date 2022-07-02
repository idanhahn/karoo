import { PrismaClient, Prisma } from '@prisma/client';
const prisma = new PrismaClient();

const author = {
  name: 'Andy Weir',
  trending: 'High',
};

const agency = {
  name: 'Crown Publishing Group',
};

const analytics = {
  totalScore: 95,
  valuation: 60000,
  recommendation: 'Accept at market standard',
  readability: 'Good',
  readabilityScore: 9,
  paceScore: 5,
  complexityScore: 8,
  structure: 'An Event',
  synopsis:
    'Mark Watney became one of the first people to walk on Mars six days ago. After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth.',
};

const book = {
  title: 'The Martian',
  genre: 'Sci-fi',
  cover: '/res/the-martian.jpg',
};

async function main() {
  console.log('seeding database');
  // const bookData: Prisma.BookCreateInput[] = [
  //   {
  //     ...book,
  //     author: {
  //       create: [
  //         {
  //           ...author,
  //           agency: {
  //             ...agency,
  //             create: [{ ...agency }],
  //           },
  //         },
  //       ],
  //     },
  //     analytics: {
  //       create: [
  //         {
  //           ...analytics,
  //         },
  //       ],
  //     },
  //   },
  // ];

  // for (const book of bookData) {
  //   const book = await prisma.book.create({
  //     data: book,
  //   });
  //   console.log(`created book ${book.title}`);
  // }
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
