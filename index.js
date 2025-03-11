class EntidadeComContato {
  constructor(endereco) {
    this.endereco = endereco
    this.telefones = new Set()
  }

  adicionarTelefone(telefone) {
    if (!(telefone instanceof Telefone)) {
      throw new Error('O objeto precisa ser uma instância da classe Telefone.')
    }
    this.telefones.add(telefone)
  }
}

class Cliente extends EntidadeComContato {
  #cpf

  constructor(cpf, nome, endereco) {
    super(endereco)
    this.#cpf = cpf
    this.nome = nome
  }

  get cpf() {
    return this.#cpf
  }

  getNomeMaiusculo() {
    return this.nome.toUpperCase()
  }

  getNomeMinusculo() {
    return this.nome.toLowerCase()
  }
}

class Telefone {
  constructor(ddd, numero) {
    this.ddd = ddd
    this.numero = numero
  }

  getNumeroCompleto() {
    return `(${this.ddd}) ${this.numero}`
  }
}

class Endereco {
  constructor(rua, numero, cidade, estado) {
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado
  }

  getEnderecoMaiusculo() {
    return `${this.rua}, ${this.numero}, ${this.cidade} - ${this.estado}`.toUpperCase()
  }

  getEnderecoMinusculo() {
    return `${this.rua}, ${this.numero}, ${this.cidade} - ${this.estado}`.toLowerCase()
  }
}

class Empresa extends EntidadeComContato {
  #cnpj

  constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
    super(endereco)
    this.razaoSocial = razaoSocial
    this.nomeFantasia = nomeFantasia
    this.#cnpj = cnpj
    this.clientes = new Set()
  }

  get cnpj() {
    return this.#cnpj
  }

  getRazaoSocialMaiuscula() {
    return this.razaoSocial.toUpperCase()
  }

  getRazaoSocialMinuscula() {
    return this.razaoSocial.toLowerCase()
  }

  getNomeFantasiaMaiusculo() {
    return this.nomeFantasia.toUpperCase()
  }

  getNomeFantasiaMinusculo() {
    return this.nomeFantasia.toLowerCase()
  }

  adicionarCliente(cliente) {
    if (!(cliente instanceof Cliente)) {
      throw new Error('O objeto precisa ser uma instância da classe Cliente.')
    }
    this.clientes.add(cliente)
  }

  detalhe() {
    let detalhesClientes = ''
    this.clientes.forEach((cliente) => {
      detalhesClientes += `Cliente: ${cliente.nome}\nCPF: ${
        cliente.cpf
      }\nEndereço: ${cliente.endereco.getEnderecoMaiusculo()}\nTelefones: ${Array.from(
        cliente.telefones
      )
        .map((telefone) => telefone.getNumeroCompleto())
        .join(', ')}\n\n`
    })

    return `Empresa: ${this.razaoSocial}\nCNPJ: ${this.cnpj}\nNome Fantasia: ${
      this.nomeFantasia
    }\nEndereço: ${this.endereco.getEnderecoMaiusculo()}\n\nClientes:\n${detalhesClientes}`
  }
}

export { EntidadeComContato, Cliente, Telefone, Endereco, Empresa }
