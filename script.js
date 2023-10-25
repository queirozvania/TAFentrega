/* Conforme explicado no enunciado adicione as palavras reservadas let ou const nas variaveis */

const distance = 25000;
const time = 710;
const gender = "male";
const pushUps = 40;
const abs = 35;

/* 

    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar: 

    if(gender === 'male)
    ...

*/

function testTAF(distance, time, gender, pushUps, abs) {
  passed = false;

  //Sua logica deve ser inserida aqui:
 
   //-------------------//Gêneros: Masculino e feminino----------////////
   
   ////----------------//Primeira hipótese para masculino-------////////
  //Para passar o candidato deve ser masculino e ter os requisitos citados.
  //Percorrer uma distância maior ou igual a 24000 metros em menos de 720 segundos
  //Fazer mais de 30 flexões ou 30 flexões e será aprovado
  //Fazer 35 abdominais ou mais de 35 abs.. que também será aprovado
  
  if( gender === 'male' && distance >=24000 && time <=720 && pushUps >=30 && abs >=35){
    passed = true;
  }else ( gender === 'male' && distance <=24000 && time >=720 && pushUps >=30 && abs <=35)
  //---------Ou então para o gênero masculino ----//
  //---------Segunda hipótese--------------------//
  //Ter feito percorrido uma distância menor que 24000 m em mais de 720 segundos.
  //Ter feito mais de 30 flexões ou igual a 30 flexões.
  //E menos de 35 abdominais ou exatamente 35 abs.

///////-----------------------------------------------------------------------------------------////
//////-----------------------Primeira hipótese----------------------------------------------///////
//Para passar o candidato deve ser feminino e ter os requisitos citados abaixo.
//Percorrer 24000 metros em menos de 840 segundos ou exatamente 840 segundos.
//Ter feito 20 flexões ou mais que isso.
//Ter feito 30 abdominais ou mais que isso..
  if( gender === 'female' && distance >=24000 && time <=840 && pushUps >=20 && abs >=30){
    passed = true;
  }else ( gender === 'female' && distance <=24000 && time >=840 && pushUps <=20 && abs <=30)
  //-----------Ou então para o gênero feminino--------// 
  //ter percorrido uma distância menor ou exatamente 24000 m em mais de 840 segundos
  //Até mesmo ter feito menos de ou igual a 20 flexões.
  //Ter feito menos ou igual a 30 flexões.
  
    


  // Retorno da variavel passed onde para o candidato passar ele deve ter o valor de: true
  return passed;
}

//para executar o script no terminal digite: node ./script.js
//para executar os testes no terminal digite: node --test ./test_cases.js

console.log(
  "Candidato passou no teste?: \nresposta: ",

  testTAF(distance, time, gender, pushUps, abs)
);

module.exports = testTAF;
