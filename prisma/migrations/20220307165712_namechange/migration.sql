/*
  Warnings:

  - You are about to drop the `Hobbyist` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Hobbyist";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "UserHobby" (
    "userId" INTEGER NOT NULL,
    "hobbyId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "hobbyId"),
    CONSTRAINT "UserHobby_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "UserHobby_hobbyId_fkey" FOREIGN KEY ("hobbyId") REFERENCES "Hobby" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
