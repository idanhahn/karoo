/*
  Warnings:

  - You are about to drop the column `authorId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `backCover` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `blurb` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `cover` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `published` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `uploaded` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the `Agency` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Analytics` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amazonProductUrl` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn10` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isbn13` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Added the required column `publicationDate` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Analytics" DROP CONSTRAINT "Analytics_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Author" DROP CONSTRAINT "Author_agencyId_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_authorId_fkey";

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "authorId",
DROP COLUMN "backCover",
DROP COLUMN "blurb",
DROP COLUMN "cover",
DROP COLUMN "createdAt",
DROP COLUMN "deletedAt",
DROP COLUMN "published",
DROP COLUMN "updatedAt",
DROP COLUMN "uploaded",
DROP COLUMN "userId",
ADD COLUMN     "amazonProductUrl" TEXT NOT NULL,
ADD COLUMN     "author" TEXT NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "isbn10" TEXT NOT NULL,
ADD COLUMN     "isbn13" TEXT NOT NULL,
ADD COLUMN     "keyWords" TEXT[],
ADD COLUMN     "publicationDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "subjects" TEXT[];

-- DropTable
DROP TABLE "Agency";

-- DropTable
DROP TABLE "Analytics";

-- DropTable
DROP TABLE "Author";

-- CreateTable
CREATE TABLE "Manuscript" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "logline" TEXT NOT NULL,
    "keyWords" TEXT[],
    "subjects" TEXT[],
    "active" BOOLEAN,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Manuscript_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ManuscriptAnalysis" (
    "id" SERIAL NOT NULL,
    "plotStructure" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "manuscriptId" INTEGER NOT NULL,

    CONSTRAINT "ManuscriptAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookAnalysis" (
    "id" SERIAL NOT NULL,
    "plotStructure" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "BookAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BestSellerListAnalysis" (
    "id" SERIAL NOT NULL,
    "class" TEXT NOT NULL,
    "plotStructure" INTEGER[],

    CONSTRAINT "BestSellerListAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ArchTypeAnalysis" (
    "id" SERIAL NOT NULL,
    "class" TEXT NOT NULL,
    "plotStructure" INTEGER[],

    CONSTRAINT "ArchTypeAnalysis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_BookToManuscript" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ManuscriptAnalysis_manuscriptId_key" ON "ManuscriptAnalysis"("manuscriptId");

-- CreateIndex
CREATE UNIQUE INDEX "BookAnalysis_bookId_key" ON "BookAnalysis"("bookId");

-- CreateIndex
CREATE UNIQUE INDEX "_BookToManuscript_AB_unique" ON "_BookToManuscript"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToManuscript_B_index" ON "_BookToManuscript"("B");

-- AddForeignKey
ALTER TABLE "Manuscript" ADD CONSTRAINT "Manuscript_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ManuscriptAnalysis" ADD CONSTRAINT "ManuscriptAnalysis_manuscriptId_fkey" FOREIGN KEY ("manuscriptId") REFERENCES "Manuscript"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookAnalysis" ADD CONSTRAINT "BookAnalysis_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToManuscript" ADD CONSTRAINT "_BookToManuscript_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToManuscript" ADD CONSTRAINT "_BookToManuscript_B_fkey" FOREIGN KEY ("B") REFERENCES "Manuscript"("id") ON DELETE CASCADE ON UPDATE CASCADE;
