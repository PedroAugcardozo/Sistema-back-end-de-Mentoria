import { Request, Response } from "express";
import {UserModel} from "../model/userModel"
import { dtoAvaliacao, dtoEndereco } from "../dtos/dtos";

const userModel = new UserModel

export class UserController{
    async createUser(req: Request, res: Response) {
        const {usuarioData, enderecoData} = req.body;
        try
        {
            const resultado = await userModel.create(usuarioData, enderecoData)
            return res.status(201).json(resultado)
        } 
        catch(error)
        {
            console.error("erro ao criar usuario:", error)
            return res.status(500).json({ error: "erro ao criar o usuario"});
        }
    }

    async getUser(req: Request, res: Response) {
        const {id} = req.params;
        try
        {
            const user = await userModel.getUser(id)
            if(user){
                return res.status(200).json(user)
            } else{
                return res.status(404).json({erro: "usuario nao identificado"})
            }
        } 
        catch(error)
        {
            console.log(error)
            return res.status(500).json({erro: "erro ao buscar usuario"})
        }
    }
    async getEndereco(req: Request, res: Response){
        const {id} = req.params;
        try{
            const endereco = await userModel.getEndereco(id)
            if(endereco){
                return res.status(200).json(endereco)
            }
            else{
                return res.status(404).json({erro: "usuario nao identificado"})
            }
        } catch(e){
            console.log("erro ao procurar endereco: "+e)
            res.status(500).json({erro: "erro ao buscar endereco"})
        }
    }

    async UpdateUser(req: Request, res: Response){
        const {id} = req.params
        const {usuarioData, enderecoData} = req.body

        try{
            const resultado = await userModel.updateUser(id, usuarioData, enderecoData)
            if(resultado){
                return res.status(200).json(resultado)
            } else{
                return res.status(404).json({erro: "usuario nao encontrado"})
            }
        } catch(e){
            console.log("erro: "+e);
            return res.status(500).json({erro: "erro ao atualizar usuario"})
        }
    }
}