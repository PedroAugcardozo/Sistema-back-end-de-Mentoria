import { PrismaClient } from "@prisma/client";
import { dtoUsuarios, dtoEndereco } from "../dtos/dtos";

const prisma = new PrismaClient

class UserModel {
    // Criar um novo usuário com endereço
    async create(
        usuarioData: Omit<dtoUsuarios, "id" | "id_Endereco">,
        enderecoData: Omit<dtoEndereco, "id">
    ): Promise<{ usuario: dtoUsuarios; endereco: dtoEndereco }> {
        const createdUser = await prisma.usuarios.create({
            data: {
                ...usuarioData,
                endereco: {
                    create: enderecoData, // Criando o endereço junto com o usuário
                },
            },
            include: { endereco: true }, // Retorna os dados do endereço também
        });

        return { 
            usuario: { ...createdUser, id_Endereco: createdUser.endereco.id }, 
            endereco: createdUser.endereco 
        };
    }

    async getUser(id: string): Promise<dtoUsuarios | null> {
        return await prisma.usuarios.findUnique({
            where: {id},
        });
    }

    async getEndereco(id: string): Promise<dtoEndereco | null> {
        return await prisma.endereco.findUnique({
            where: {id}
        })
    }

    async updateUser(
        id: string,
        updatedData: Partial<Omit<dtoUsuarios, "id" | "id_Endereco">>,
        enderecoData?: Partial<Omit<dtoEndereco, "id">>
      ): Promise<{ usuario: dtoUsuarios; endereco?: dtoEndereco } | null> {
        const updatedUser = await prisma.usuarios.update({
          where: { id },
          data: updatedData,
          include: { endereco: true },
        });
    
        let updatedEndereco;
        if (enderecoData) {
          updatedEndereco = await prisma.endereco.update({
            where: { id: updatedUser.id_Endereco },
            data: enderecoData,
          });
        }
    
        return { usuario: updatedUser, endereco: updatedEndereco };
      } 
}