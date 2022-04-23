// Cadastro eventos

let dataAtual = new Date ()
let dataEvento = new Date (2022, 04, 20)
let idadeParticipante = 28
let listaParticipantes = ["Beatriz", " Vinicius", " Leci", " Beto"]
let listaPalestrantes = ["John", "Mary", "Joel"]
let listaEventos = ["E-commerce", "Games", "Segurança WEB"]
let quantidadeParticipantes = 77;

// Verificar data do evento

if (dataEvento > dataAtual) {
    console.log("Evento permitido")
    
} else {
    console.log("O cadastro não será permitido por data inválida")
     
}

// Verificar idade do participante

if (idadeParticipante >= 18) {
    console.log("Cadastro permitido")
    
} else {
    console.log("O cadastro não será permitido. MENOR DE 18 ANOS")
    
}

// Listar participantes e palestrantes por evento

for (let contador = 0; contador < listaEventos.length; contador++) {
    console.log(`Evento ${listaEventos[contador]} disponível para inscrição. Palestrante: ${listaPalestrantes[contador]}.`)

// Verificar quantidade de participantes"

    if (quantidadeParticipantes < 100) {
        console.log("Ainda há vagas!")
        
    } else {
        console.log("Cadastro não permitido. Número de vagas excedido!")
        
    }
}
