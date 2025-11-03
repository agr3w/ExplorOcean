/*
  Warnings:

  - Added the required column `contentId` to the `ActivityHistory` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Favorite" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "contentId" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ActivityHistory" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contentId" TEXT NOT NULL,
    "score" TEXT,
    "completedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "ActivityHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_ActivityHistory" ("completedAt", "id", "name", "score", "type", "userId") SELECT "completedAt", "id", "name", "score", "type", "userId" FROM "ActivityHistory";
DROP TABLE "ActivityHistory";
ALTER TABLE "new_ActivityHistory" RENAME TO "ActivityHistory";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "Favorite_userId_contentId_contentType_key" ON "Favorite"("userId", "contentId", "contentType");
