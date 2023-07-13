import { registroNaoEncontrado } from "./erros";
import prisma from "./prisma";


export async function getAdministradores() {
    const listaAdministradores = await prisma.administrador.findMany({
        include: {
            usuario: true
        }
    })

    return listaAdministradores
}

export async function getAdministrador(cpf: string) {
    const administrador = await prisma.administrador.findFirst({
        where: {
            cpf: cpf
        },
        include: {
            usuario: true
        }
    })
    if (administrador === null) throw new registroNaoEncontrado('registo de administrador com o cpf [' + cpf + '] não foi encontrado')

    return administrador
}
