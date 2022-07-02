-- AlterTable
ALTER TABLE "Analytics" ALTER COLUMN "valuation" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "uploaded" BOOLEAN;
