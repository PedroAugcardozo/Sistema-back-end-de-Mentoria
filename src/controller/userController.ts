import { Request, Response } from "express";
import {UserModel} from "../model/userModel"
import { dtoAvaliacao, dtoEndereco } from "../dtos/dtos";

const userModel = new UserModel

export class UserController{
    async createUser(req: Request, res: Response) {
        const {usuarioData, enderecoData} = req.body;
        try
        {
            const result = await userModel.create(usuarioData, enderecoData)
            return res.status(201).json(result)
        } 
        catch(error)
        {
            console.error("erro ao criar usuario:", error)
            return res.status(500).json({ error: "erro ao criar o usuario"});
        }
    }

    
}