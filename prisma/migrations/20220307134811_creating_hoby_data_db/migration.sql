-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "full_name" TEXT NOT NULL,
    "photo" TEXT,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Hobby" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "image" TEXT,
    "active" BOOLEAN NOT NULL
);

-- CreateTable
CREATE TABLE "Hobbies" (
    "userId" INTEGER NOT NULL,
    "hobbyId" INTEGER NOT NULL,

    PRIMARY KEY ("userId", "hobbyId"),
    CONSTRAINT "Hobbies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Hobbies_hobbyId_fkey" FOREIGN KEY ("hobbyId") REFERENCES "Hobby" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
