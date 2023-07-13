import { registroNaoEncontrado } from "./erros";
import prisma from "./prisma";


export async function getPromoters() {
    const listaPromoters = await prisma.promoter.findMany({
        include: {
            usuario: true
        }
    })

    return listaPromoters
}

export async function getPromoter(cpfOrCnpj: string) {
    const promoter = await prisma.promoter.findMany({
        where: {
            OR: [
                { cpf: cpfOrCnpj },
                { cnpj: cpfOrCnpj }
            ]
        },
        include: {
            eventos: true,
            endereco: true,
            usuario: true
        }
    })
    if (promoter === null) throw new registroNaoEncontrado('registo de promoter com o cpf ou cpnj [' + cpfOrCnpj + '] não foi encontrado')

    return promoter
}
