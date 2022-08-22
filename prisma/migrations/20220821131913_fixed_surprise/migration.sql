/*
  Warnings:

  - You are about to drop the column `suprise` on the `ManuscriptAnalysis` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ManuscriptAnalysis" DROP COLUMN "suprise",
ADD COLUMN     "surprise" DOUBLE PRECISION[];
