-- DropForeignKey
ALTER TABLE "Author" DROP CONSTRAINT "Author_agencyId_fkey";

-- AlterTable
ALTER TABLE "Author" ADD COLUMN     "email" TEXT,
ADD COLUMN     "phone" TEXT,
ALTER COLUMN "agencyId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "published" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Author" ADD CONSTRAINT "Author_agencyId_fkey" FOREIGN KEY ("agencyId") REFERENCES "Agency"("id") ON DELETE SET NULL ON UPDATE CASCADE;
