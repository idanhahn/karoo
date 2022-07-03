/*
  Warnings:

  - Added the required column `trendingScore` to the `Analytics` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valuationScore` to the `Analytics` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analytics" ADD COLUMN     "trendingScore" INTEGER NOT NULL,
ADD COLUMN     "valuationScore" INTEGER NOT NULL;
