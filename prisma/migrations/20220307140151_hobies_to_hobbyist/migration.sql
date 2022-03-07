/*
  Warnings:

  - You are about to drop the `Hobbies` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hobbies";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Hobbyist" (
    "userId" INTEGER NOT NULL,
    "hobbyId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "hobbyId"),
    CONSTRAINT "Hobbyist_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Hobbyist_hobbyId_fkey" FOREIGN KEY ("hobbyId") REFERENCES "Hobby" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
