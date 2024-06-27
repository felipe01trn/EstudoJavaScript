var t_fieldNome=document.querySelector("#nome");//Estou pegando pelo ID
var t_fieldData=document.querySelector("#data");//Estou pegando pelo ID
var t_fieldAltura=document.querySelector("#peso");//Estou pegando pelo ID
var t_fieldPeso=document.querySelector("#altura");//Estou pegando pelo ID

var btnCalcular=document.querySelector("#calcular")//Estou pegando pelo ID

//  console.log(t_fieldNome)
//  var t_fieldNome=document.querySelector("#nome");
// console.log(t_fieldData)
// var t_fieldData=document.querySelector("#data");
// console

// Funções

// function somar(n1,n2){

//     return n1+n2;
// }

// console.log(somar(23,45))

// Quando eu clicar no botão ele vai somar os valores e vai imprimir no console.

// Estou pedindo para add um evento de clique no botão
btnCalcular.addEventListener("click",function soma(e){
    // console.log(t_fieldNome.value)
    // console.log(t_fieldData.value)
    // console.log(t_fieldAltura.value)
    // console.log(t_fieldPeso.value)
    console.log(`Nome: ${t_fieldNome.value}peso: ${t_fieldPeso.value} Altura: ${t_fieldAltura.value} DataNascimento: ${t_fieldData.value}`)


})