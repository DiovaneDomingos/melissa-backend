class MessageController {
  async client(req, res) {
    const msg = req.body.message;

    if (msg === "Fazer reclamação") {
      return res.json({
        answer: "Muito bem. Por favor selecione o tipo da sua reclamação.",
        options: ["Problema na entrega", "Problema com o produto"],
      });
    }

    if (msg === "Problema com o produto") {
      return res.json({
        answer:
          "Escolha mais especificamente o problema que você teve com seu produto.",
        options: ["Recebi o produto errado", "O produto veio com defeito"],
      });
    }

    if (msg === "Recebi o produto errado") {
      return res.json({
        answer:
          "Sinto muito, iremos lhe conectar com o vendedor para solucionar seu problema. Caso não haja resposta, volte a entrar em contato comigo e buscarem uma solução juntinhos.",
      });
    }

    if(msg === 'Começar conversar') {
      return res.json({
        answer: 'Olá, Mega Hack 3.0! Bem vindo ao Mercado Livre. Meu nome é Melissa e to aqui para te ajudar. Em que posso ser útil?',
        options: ['rastrear meu pedido', 'tirar duvidas', 'fazer compras']
      })
    }

    if(msg === 'rastrear meu pedido') {
      return res.json({
        answer: 'Opa! Vou te dizer exatamente onde o seu pedido está! Por favor, digite o código de rastreio do seu pedido. '
      })
    }

    if(msg == '171717') {
      return res.json({
        answer: 'Pronto! O seu pedido está na Av. Mega Hack, nº 3.0 no bairro Dezessete.',
        map: '[foto do mapa]',
        answer2: 'Você poderia dar uma nota para o meu atendimento? Estou trabalhando para te atender cada vez melhor.',
        notas: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      })
    }

    if(msg === 'nota 10') {
      return res.json({
        answer: 'Obrigado pelo feedback, estou sempre a disposição'
      })
    }

    return res.status(404).json({ error: "pergunta não encontrada" });
  }

  async store(req, res) {
    const msg = req.body.message;

    if (msg === "Começar conversar") {
      return res.json({
        answer:
          "Melissa: Oi! Bem vindo ao Mercado Livre. Meu nome é Melissa, e tô aqui pra te ajudar. Em que posso ser útil?",
        options: ["Consultar rastreio de uma venda", "Desistir da venda"],
      });
    }

    if (msg === "Desistir da venda") {
      return res.json({
        answer:
          "Beleza! Por favor, me diga o motivo pelo qual você está cancelando a venda",
        options: ["Problema com o produto", "Problema com o comprador"],
      });
    }

    if (msg === "Problema com o produto") {
      return res.json({
        answer:
          "Escolha mais especificamente o problema que você teve com seu produto",
        options: ["O produto foi roubado", "O produto foi danificado"],
      });
    }

    if (msg === "O produto foi roubado ") {
      return res.json({
        answer:
          "Sinto muito, iremos remover seu anúncio e colocar uma nota para o cliente. Você ainda poderá ser avaliado pelo anúncio. Muito obrigado!",
      });
    }

    return res.status(404).json({ error: "pergunta não encontrada" });
  }
}

module.exports = new MessageController();
