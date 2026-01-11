-- CreateTable
CREATE TABLE "pets" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "species" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "pets_name_key" ON "pets"("name");
