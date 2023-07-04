import { PrismaClient } from '@prisma/client'; 
const prisma = new PrismaClient()

async function main() {

  /**await prisma.compra.deleteMany()
  await prisma.ingresso.deleteMany()
  await prisma.lotacao.deleteMany()
  await prisma.evento.deleteMany()
  await prisma.promoter.deleteMany()
  await prisma.cliente.deleteMany()
  await prisma.administrador.deleteMany()
  await prisma.usuario.deleteMany()
  await prisma.endereco.deleteMany()
  await prisma.cartao_Credito.deleteMany()
  await prisma.setor.deleteMany()
  await prisma.perfil.deleteMany()
  **/

  const usuarioTeste1 = await prisma.usuario.create({
    data: {
      nome: "Nalbert Santos",
      email: 'nalbert@email.com',
      senha: '12345678'
    }
  })

  const usuarioTeste2 = await prisma.usuario.create({
    data: {
      nome: "Pedro Henrique",
      email: 'pedro@email.com',
      senha: '12345678'
    }
  })

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })