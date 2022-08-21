-- AlterTable
ALTER TABLE "ManuscriptAnalysis" ADD COLUMN     "dialogue_per" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "dialogues" INTEGER[],
ADD COLUMN     "narratives" INTEGER[];
