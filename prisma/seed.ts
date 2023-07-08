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

    // Criando cartão de credito dos clientes
    const cartao1 = await prisma.cartao_Credito.create({
      data: {
        num_cartao: '1111222233334444',
        dono_cartao: 'Pedro Henrique Almeida',
        data_vencimento: '12/24',
        cvv: '123'
      }
    });

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
      },
      cartao: {
        create: {
          num_cartao: '3333222211110000',
          dono_cartao: 'Ana Souza',
          data_vencimento: '03/27',
          cvv: '321'
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
      },
      cartao: {
        create: {
          num_cartao: '9999888877776666',
          dono_cartao: 'Ana Oliveira',
          data_vencimento: '08/25',
          cvv: '789'
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
      email: 'lauracosta@example.com',
      senha: '567890'
    }
  })

  const cliente4 = await prisma.cliente.create({
    data: {
      cpf: '44455566677',
      telefone: '11987654324',
      data_nasc: new Date(),
      id_endereco: enderecoCliente4e5.id,
      id_usuario: usuarioDoCliente4.id,
      id_cartao: cartao1.id
    }
  });

  const cliente5 = await prisma.cliente.create({
    data: {
      cpf: '55566677788',
      telefone: '11987654325',
      data_nasc: new Date(),
      id_endereco: enderecoCliente4e5.id,
      id_usuario: usuarioDoCliente5.id,
      id_cartao: cartao1.id
    }
  })

  const cliente6 = await prisma.cliente.create({
    data: {
      cpf: '66677788899',
      telefone: '11987654326',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'Rafaela Souza',
          email: 'rafaelasouza@example.com',
          senha: '678901'
        }
      },
      endereco: {
        create: {
          rua: 'Avenida Beira-Mar',
          numero: '600',
          bairro: 'Praia de Iracema',
          cidade: 'Fortaleza',
          estado: 'Ceará',
          cep: '54321-098',
          complemento: 'Apartamento 601'
        }
      }
    }
  });
  
  const cliente7 = await prisma.cliente.create({
    data: {
      cpf: '77788899900',
      telefone: '11987654327',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'Carolina Mendes',
          email: 'carolinamendes@example.com',
          senha: '789012'
        }
      },
      endereco: {
        create: {
          rua: 'Rua das Amoreiras',
          numero: '700',
          bairro: 'Jardim Primavera',
          cidade: 'Campinas',
          estado: 'São Paulo',
          cep: '43210-987',
          complemento: 'Casa 701'
        }
      }
    }
  });
  
  const cliente8 = await prisma.cliente.create({
    data: {
      cpf: '88899900011',
      telefone: '11987654328',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'Mariana Oliveira',
          email: 'marianaoliveira@example.com',
          senha: '890123'
        }
      },
      endereco: {
        create: {
          rua: 'Avenida das Flores',
          numero: '800',
          bairro: 'Centro',
          cidade: 'Porto Alegre',
          estado: 'Rio Grande do Sul',
          cep: '32109-876',
          complemento: 'Sala 801'
        }
      }
    }
  });
  
  const cliente9 = await prisma.cliente.create({
    data: {
      cpf: '99900011122',
      telefone: '11987654329',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'Rodrigo Santos',
          email: 'rodrigosantos@example.com',
          senha: '901234'
        }
      },
      endereco: {
        create: {
          rua: 'Rua do Comércio',
          numero: '900',
          bairro: 'Centro',
          cidade: 'Salvador',
          estado: 'Bahia',
          cep: '21098-765',
          complemento: 'Loja 901'
        }
      }
    }
  });

  const cliente10 = await prisma.cliente.create({
    data: {
      cpf: '00011122233',
      telefone: '11987654330',
      data_nasc: new Date(),
      usuario: {
        create: {
          nome: 'Juliana Lima',
          email: 'julianalima@example.com',
          senha: '012345'
        }
      },
      endereco: {
        create: {
          rua: 'Rua das Palmas',
          numero: '1000',
          bairro: 'Jardim das Flores',
          cidade: 'Belo Horizonte',
          estado: 'Minas Gerais',
          cep: '87654-321',
          complemento: 'Apartamento 1001'
        }
      }
    }
  });

  /* Criando Promoters */
  const promoter1 = await prisma.promoter.create({
    data: {
      cpf: '00088899977',
      telefone: '75994674967',
      status: 'ATIVO',
      usuario: {
        create: {
          nome: 'Juliano Costa',
          email: 'julianoCosta@example.com',
          senha: '012345'
        }
      },
      endereco: {
        create: {
          rua: 'Rua das Palmas',
          numero: '1001',
          bairro: 'Jardim das Flores',
          cidade: 'Belo Horizonte',
          estado: 'Minas Gerais',
          cep: '87654-321'
        }
      }
    }
  });
  
  const promoter2 = await prisma.promoter.create({
    data: {
      cpf: '11199988877',
      telefone: '75994674968',
      status: 'ATIVO',
      usuario: {
        create: {
          nome: 'Fernanda Silva',
          email: 'fernandaSilva@example.com',
          senha: '123456'
        }
      },
      endereco: {
        create: {
          rua: 'Avenida Central',
          numero: '2002',
          bairro: 'Centro',
          cidade: 'São Paulo',
          estado: 'São Paulo',
          cep: '65432-109'
        }
      }
    }
  });
  
  const promoter3 = await prisma.promoter.create({
    data: {
      cpf: '22288899977',
      telefone: '75994674969',
      status: 'ATIVO',
      usuario: {
        create: {
          nome: 'Camila Santos',
          email: 'camilaSantos@example.com',
          senha: '987654'
        }
      },
      endereco: {
        create: {
          rua: 'Rua das Flores',
          numero: '3003',
          bairro: 'Jardins',
          cidade: 'Rio de Janeiro',
          estado: 'Rio de Janeiro',
          cep: '54321-098'
        }
      }
    }
  });

  const promoter4 = await prisma.promoter.create({
    data: {
      cnpj: '12345678901234',
      telefone: '75994674970',
      usuario: {
        create: {
          nome: 'Empresa XYZ',
          email: 'empresaXYZ@example.com',
          senha: '456789'
        }
      },
      endereco: {
        create: {
          rua: 'Avenida das Indústrias',
          numero: '4004',
          bairro: 'Industrial',
          cidade: 'Curitiba',
          estado: 'Paraná',
          cep: '87654-321'
        }
      }
    }
  });
  
  const promoter5 = await prisma.promoter.create({
    data: {
      cnpj: '98765432109876',
      telefone: '75994674971',
      status: 'INATIVO',
      usuario: {
        create: {
          nome: 'Empresa ABC',
          email: 'empresaABC@example.com',
          senha: '567890'
        }
      },
      endereco: {
        create: {
          rua: 'Rua Comercial',
          numero: '5005',
          bairro: 'Centro',
          cidade: 'Porto Alegre',
          estado: 'Rio Grande do Sul',
          cep: '54321-098'
        }
      }
    }
  });

  /* Criando Eventos */

  // Criando endereços pra eventos
  const enderecoDeEvento1 = await prisma.endereco.create({
    data: {
      rua: 'Avenida Paulista',
      numero: '400',
      bairro: 'Bela Vista',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: '76543-210',
      complemento: 'Andar 401'
    }
  });  

  const enderecoDeEvento2 = await prisma.endereco.create({
    data: {
      rua: 'Rua dos Eventos',
      numero: '123',
      bairro: 'Centro',
      cidade: 'Rio de Janeiro',
      estado: 'Rio de Janeiro',
      cep: '54321-098',
      complemento: 'Sala 1'
    }
  });
  
  const enderecoDeEvento3 = await prisma.endereco.create({
    data: {
      rua: 'Avenida das Conferências',
      numero: '567',
      bairro: 'Jardim das Flores',
      cidade: 'São Paulo',
      estado: 'São Paulo',
      cep: '87654-321',
      complemento: 'Sala VIP'
    }
  });
  
  const enderecoDeEvento4 = await prisma.endereco.create({
    data: {
      rua: 'Praça dos Congressos',
      numero: '890',
      bairro: 'Centro',
      cidade: 'Belo Horizonte',
      estado: 'Minas Gerais',
      cep: '23456-789',
      complemento: 'Auditório Principal'
    }
  });
  
  const enderecoDeEvento5 = await prisma.endereco.create({
    data: {
      rua: 'Avenida dos Seminários',
      numero: '456',
      bairro: 'Jardins',
      cidade: 'Curitiba',
      estado: 'Paraná',
      cep: '67890-123',
      complemento: 'Sala de Treinamentos'
    }
  });

  const evento1 = await prisma.evento.create({
    data: {
      nome: "Festinha de Tosta",
      horaInicio: new Date("2023-06-01 18:00"),
      horaFim: new Date("2023-01-06 22:00"),
      descricao: "Uma festa que irá ver Tosta",
      banner: "/img/event-banner/festinha-tosta.jpg",
      status: 'suspenso',
      id_promoter: promoter1.id,
      id_endereco: enderecoDeEvento1.id
    }
  });
  
  const evento2 = await prisma.evento.create({
    data: {
      nome: "Palestra de Tecnologia",
      horaInicio: new Date("2023-07-15 14:00"),
      horaFim: new Date("2023-07-15 16:00"),
      descricao: "Uma palestra sobre as últimas tendências em tecnologia",
      banner: "/img/event-banner/palestra-tecnologia.jpg",
      status: 'ativo',
      id_promoter: promoter2.id,
      id_endereco: enderecoDeEvento2.id
    }
  });
  
  const evento3 = await prisma.evento.create({
    data: {
      nome: "Workshop de Marketing Digital",
      horaInicio: new Date("2023-08-20 10:00"),
      horaFim: new Date("2023-08-20 18:00"),
      descricao: "Um workshop prático sobre estratégias de marketing digital",
      banner: "/img/event-banner/workshop-marketing-digital.jpg",
      status: 'ativo',
      id_promoter: promoter3.id,
      id_endereco: enderecoDeEvento3.id
    }
  });
  
  const evento4 = await prisma.evento.create({
    data: {
      nome: "Exposição de Arte Contemporânea",
      horaInicio: new Date("2023-09-10 10:00"),
      horaFim: new Date("2023-09-20 18:00"),
      descricao: "Uma exposição com obras de artistas contemporâneos",
      banner: "/img/event-banner/exposicao-arte-contemporanea.jpg",
      status: 'ativo',
      id_promoter: promoter1.id,
      id_endereco: enderecoDeEvento2.id
    }
  });
  
  const evento5 = await prisma.evento.create({
    data: {
      nome: "Feira Gastronômica",
      horaInicio: new Date("2023-10-05 16:00"),
      horaFim: new Date("2023-10-05 22:00"),
      descricao: "Uma feira com diversas opções gastronômicas",
      banner: "/img/event-banner/feira-gastronomica.jpg",
      status: 'ativo',
      id_promoter: promoter2.id,
      id_endereco: enderecoDeEvento3.id
    }
  });

  const evento6 = await prisma.evento.create({
    data: {
      nome: "Concerto de Música Clássica",
      horaInicio: new Date("2023-11-15 19:30"),
      horaFim: new Date("2023-11-15 22:00"),
      descricao: "Um concerto com obras clássicas de compositores renomados",
      banner: "/img/event-banner/concerto-musica-classica.jpg",
      status: 'ativo',
      id_promoter: promoter3.id,
      id_endereco: enderecoDeEvento4.id
    }
  });
  
  const evento7 = await prisma.evento.create({
    data: {
      nome: "Feira de Tecnologia e Inovação",
      horaInicio: new Date("2023-12-10 10:00"),
      horaFim: new Date("2023-12-12 18:00"),
      descricao: "Uma feira para apresentação de tecnologias e soluções inovadoras",
      banner: "/img/event-banner/feira-tecnologia-inovacao.jpg",
      status: 'ativo',
      id_promoter: promoter1.id,
      id_endereco: enderecoDeEvento5.id
    }
  });
  
  const evento8 = await prisma.evento.create({
    data: {
      nome: "Competição de Robótica",
      horaInicio: new Date("2024-01-20 09:00"),
      horaFim: new Date("2024-01-22 17:00"),
      descricao: "Uma competição entre robôs desenvolvidos por equipes de estudantes",
      banner: "/img/event-banner/competicao-robotica.jpg",
      status: 'ativo',
      id_promoter: promoter2.id,
      id_endereco: enderecoDeEvento1.id
    }
  });
  
  const evento9 = await prisma.evento.create({
    data: {
      nome: "Festival de Cinema Independente",
      horaInicio: new Date("2024-02-05 15:00"),
      horaFim: new Date("2024-02-10 22:00"),
      descricao: "Um festival de cinema com exibição de filmes independentes",
      banner: "/img/event-banner/festival-cinema-independente.jpg",
      status: 'ativo',
      id_promoter: promoter3.id,
      id_endereco: enderecoDeEvento2.id
    }
  });
  
  const evento10 = await prisma.evento.create({
    data: {
      nome: "Aula de Dança de Salão",
      horaInicio: new Date("2024-03-08 20:00"),
      horaFim: new Date("2024-03-08 22:00"),
      descricao: "Uma aula para aprender danças de salão com instrutores especializados",
      banner: "/img/event-banner/aula-danca-salao.jpg",
      status: 'ativo',
      id_promoter: promoter1.id,
      id_endereco: enderecoDeEvento3.id
    }
  });

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