export interface dtoUsuarios{
    nome: string,
    area: string,
    senha: string,
    email: string,
    tipo: string,
    id: string,
    id_Endereco: string
}

export interface dtoEndereco{
    rua: string,
    estado: string,
    cidade: string,
    cep: string,
    id: string
}

export interface dtoAvaliacao{
    comportamento: string,
    qualidade: string,
    nota: string
    usuario_id: number,
    id: number,
}
