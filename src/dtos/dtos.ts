export interface dtoUsuarios{
    nome: string,
    area: string,
    senha: string,
    email: string,
    tipo: string,
    id: number
}

export interface endereco{
    rua: string,
    estado: string,
    cidade: string,
    cep: string,
    id: number
}

export interface avaliacao{
    comportamento: string,
    qualidade: string,
    nota: string
    usuario_id: number
    id: number
}
