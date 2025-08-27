
//class contato

class contato {
    constructor(nome, email, telefone, tipo, mensagem){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.mensagem = mensagem;
    };
};

function Post(form) {

  let data = new contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("tipo").value,
            form.elements.namedItem("mensagem").value);
    console.log(data);

    alert(`Obrigado sr(a)  ${data.nome}! Sua mensagem de ${data.tipo} foi encaminhada com sucesso`);

    form.reset();
}