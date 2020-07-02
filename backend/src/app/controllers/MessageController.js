class MessageController {
  async client(req, res) {
    const msg = req.body.message;

    if (msg == "Fazer reclamação") {
      return res.json({
        answer: "Muito bem. Por favor selecione o tipo da sua reclamação.",
        options: ["Problema na entrega", "Problema com o produto"],
      });
    }

    if (msg == "Problema com o produto") {
      return res.json({
        answer:
          "Escolha mais especificamente o problema que você teve com seu produto.",
        options: ["Recebi o produto errado", "O produto veio com defeito"],
      });
    }

    if (msg == "Recebi o produto errado") {
      return res.json({
        answer:
          "Sinto muito, iremos lhe conectar com o vendedor para solucionar seu problema. Caso não haja resposta, volte a entrar em contato comigo e buscarem uma solução juntinhos.",
      });
    }

    return res.json({ error: "pergunta não encontrada" });
  }

  async store(req, res) {
    const msg = req.body.message;

    if (msg == "Começar conversar") {
      return res.json({
        answer:
          "Melissa: Oi! Bem vindo ao Mercado Livre. Meu nome é Melissa, e tô aqui pra te ajudar. Em que posso ser útil?",
        options: ["Consultar rastreio de uma venda", "Desistir da venda"],
      });
    }

    if (msg == "Desistir da venda") {
      return res.json({
        answer:
          "Beleza! Por favor, me diga o motivo pelo qual você está cancelando a venda",
        options: ["Problema com o produto", "Problema com o comprador"],
      });
    }

    if (msg == "Problema com o produto") {
      return res.json({
        answer:
          "Escolha mais especificamente o problema que você teve com seu produto",
        options: ["O produto foi roubado", "O produto foi danificado"],
      });
    }
    if (msg == "O produto foi roubado ") {
      return res.json({
        answer:
          "Sinto muito, iremos remover seu anúncio e colocar uma nota para o cliente. Você ainda poderá ser avaliado pelo anúncio. Muito obrigado!",
      });
    }

    r;
  }
}

module.exports = new MessageController();
