/*
  Warnings:

  - You are about to drop the column `keyWords` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "keyWords",
ADD COLUMN     "keywords" TEXT[];
