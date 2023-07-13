import { registroNaoEncontrado } from "./erros";
import prisma from "./prisma";


export async function getClientes() {
    const listaClientes = await prisma.cliente.findMany({
        include: {
            usuario: true
        }
    })

    return listaClientes
}

export async function getCliente(cpf: string) {
    const cliente = await prisma.cliente.findFirst({
        where: {
            cpf: cpf
        },
        include: {
            endereco: true,
            usuario: true,
            compras: {
                include: {
                    ingressos: true
                }
            },
            cartao: true
        }
    })
    if (cliente === null) throw new registroNaoEncontrado('registo de cliente com o cpf [' + cpf + '] não foi encontrado')

    return cliente
}
