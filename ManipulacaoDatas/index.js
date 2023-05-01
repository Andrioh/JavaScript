let Ano = new Date().getFullYear(); // Pegar ano
let Mes = new Date().getMonth(); // Pegar Mês
let Dia = new Date().getDate(); // Pegar dia do mês 1 - 30/31
let DiaSemana = new Date().getDay(); // Pegar dia da semana 1 - 7
let Hora = new Date().getHours(); // Pegar hora
let Minuto = new Date().getMinutes(); // Pegar minuto
let Segundo = new Date().setSeconds(); // Pegar segundo
let Milisegundos = new Date().setMilliseconds(); // Pegar milisegundos 0 - 999

// Mês escrito
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
let MesEscrito = mesesDoAno[new Date().getMonth()];

// Dia da semana escrito
const DiaSemanaEsc = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
let DiaSemanaEscrito = DiaSemanaEsc[new Date().getDay()];

// Pegar a data no padrão Brasileiro - Dia / Mês / Ano
let DataBR = new Date().toLocaleString('pt-br');

// Comparar datas - maior ou menor / ex: vencimentos
var hoje = new Date();
var vencimento = new Date(2023, 4, 15);
if (hoje > vencimento) {
    console.log("Sua conta está vencida")
} else {
    console.log("Ainda não venceu")
}

// Diferença entre datas em dias
var DataInicial = new Date();
var DataFinal = new Date(2023, 11, 31)
var DiferenciaTempo = DataFinal.getTime() - DataInicial.getTime();
var DiferenciaDias = Math.ceil(DiferenciaTempo / (24 * 60 * 60 * 1000));
console.log(DiferenciaDias)