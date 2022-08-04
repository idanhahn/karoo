/*
  Warnings:

  - You are about to drop the column `class` on the `BestSellerListAnalysis` table. All the data in the column will be lost.
  - You are about to drop the `ArchTypeAnalysis` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genre` to the `BestSellerListAnalysis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `BestSellerListAnalysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BestSellerListAnalysis" DROP COLUMN "class",
ADD COLUMN     "from" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "genre" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "to" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- DropTable
DROP TABLE "ArchTypeAnalysis";

-- CreateTable
CREATE TABLE "ArchtypeAnalysis" (
    "id" SERIAL NOT NULL,
    "class" TEXT NOT NULL,
    "plotStructure" INTEGER[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ArchtypeAnalysis_pkey" PRIMARY KEY ("id")
);
