/*
  Warnings:

  - A unique constraint covering the columns `[id_Endereco]` on the table `Usuarios` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Usuarios_id_Endereco_key" ON "Usuarios"("id_Endereco");
