import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient()

async function main() {
  await prisma.usuario.deleteMany()
  await prisma.endereco.deleteMany()
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

  /* Criando Administradores */
  const adm1 = await prisma.administrador.create({
    data: {
      cpf: '12312312311',
      super_adm: true,
      usuario: {
        create: {
          nome: 'Josevaldo Costa Silva',
          email: 'josevaldo@email.com',
          senha: '12345678'
        }
      }
    }
  })

  const adm2 = await prisma.administrador.create({
    data: {
      cpf: '98798798787',
      usuario: {
        create: {
          nome: 'Fernanda Souza',
          email: 'fernanda@email.com',
          senha: 'abcdefgh'
        }
      }
    }
  })

  const adm3 = await prisma.administrador.create({
    data: {
      cpf: '55555555555',
      usuario: {
        create: {
          nome: 'Ricardo Oliveira',
          email: 'ricardo@example.com',
          senha: 'qwertyui'
        }
      }
    }
  })

  const adm4 = await prisma.administrador.create({
    data: {
      cpf: '44444444444',
      usuario: {
        create: {
          nome: 'Amanda Oliveira',
          email: 'amanda@example.com',
          senha: 'p@ssw0rd'
        }
      }
    }
  })

  const adm5 = await prisma.administrador.create({
    data: {
      cpf: '99999999999',
      usuario: {
        create: {
          nome: 'Lucas Santos',
          email: 'lucas@example.com',
          senha: '987654321'
        }
      }
    }
  })

  /* Criando clientes */
  const cliente1 = await prisma.cliente.create({
    data: {
      cpf: '11122233344',
      telefone: '11987654321',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'Maria Silva',
          email: 'maria@example.com',
          senha: '123456'
        }
      },
      endereco: {
        create: {
          rua: 'Rua das Flores',
          numero: '100',
          bairro: 'Jardins',
          cidade: 'São Paulo',
          estado: 'São Paulo',
          cep: '01234-567',
          complemento: 'Apartamento 101'
        }
      }
    }
  });

  const cliente2 = await prisma.cliente.create({
    data: {
      cpf: '22233344455',
      telefone: '11987654322',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'João Santos',
          email: 'joao@example.com',
          senha: '234567'
        }
      },
      endereco: {
        create: {
          rua: 'Avenida Brasil',
          numero: '200',
          bairro: 'Centro',
          cidade: 'Rio de Janeiro',
          estado: 'Rio de Janeiro',
          cep: '98765-432',
          complemento: 'Sala 201'
        }
      }
    }
  });

  // Crie mais 3 registros de clientes separadamente

  const cliente3 = await prisma.cliente.create({
    data: {
      cpf: '33344455566',
      telefone: '11987654323',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'Ana Oliveira',
          email: 'ana@example.com',
          senha: '345678'
        }
      },
      endereco: {
        create: {
          rua: 'Rua das Palmeiras',
          numero: '300',
          bairro: 'Jardim Botânico',
          cidade: 'Brasília',
          estado: 'Distrito Federal',
          cep: '87654-321',
          complemento: 'Casa 301'
        }
      }
    }
  });

  const enderecoCliente4e5 = await prisma.endereco.create({
    data: {
      rua: 'Avenida Paulista',
      numero: '400',
      bairro: 'Bela Vista',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: '76543-210',
      complemento: 'Andar 401'
    }
  })

  const usuarioDoCliente4 = await prisma.usuario.create({
    data: {
      nome: 'Fernando Oliveira',
      email: 'fernando@example.com',
      senha: '456789'
    }
  })

  const usuarioDoCliente5 = await prisma.usuario.create({
    data: {
      nome: 'Laura Costa',
      email: 'laura@example.com',
      senha: '567890'
    }
  })

  const cliente4 = await prisma.cliente.create({
    data: {
      cpf: '44455566677',
      telefone: '11987654324',
      data_nasc: new Date(),
      id_endereco: enderecoCliente4e5.id,
      id_usuario: usuarioDoCliente4.id
    }
  });

  const cliente5 = await prisma.cliente.create({
    data: {
      cpf: '55566677788',
      telefone: '11987654325',
      data_nasc: new Date(),
      id_endereco: enderecoCliente4e5.id,
      id_usuario: usuarioDoCliente5.id
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