class MessageController {
	async store(req, res) {
		const msg = req.body.message

		if (msg == 'Fazer reclamação') {

			return res.json({
				answer: "Muito bem. Por favor selecione o tipo da sua reclamação.",
				options: ["Problema na entrega", "Problema com o produto"]
			})
		}

		if (msg == "Problema com o produto") {

			return res.json({
				answer: "Escolha mais especificamente o problema que você teve com seu produto.",
				options: ['Recebi o produto errado', 'O produto veio com defeito']
			})
		}

		if (msg == 'Recebi o produto errado') {
			return res.json({
				answer: 'Sinto muito, iremos lhe conectar com o vendedor para solucionar seu problema. Caso não haja resposta, volte a entrar em contato comigo e buscarem uma solução juntinhos.'
			})
		}

		return res.json({error: "pergunta não encontrada"})

	}
}

module.exports = new MessageController()