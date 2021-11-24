//imposto i vari bottoni per la function Calculation
$("#btn1").click(() => calculation("+"));
$("#btn2").click(() => calculation("-"));
$("#btn3").click(() => calculation("*"));
$("#btn4").click(() => calculation("/"));

//creo la funzione calculation per svolgere i calcoli 
var calculation = function (segno) {

    //importo i numeri inseriti in html
var num1 = $("#1num");
var num2 = $("#2num");

    //stampo i numeri e il segno in console
    console.log("num1", num1.val());
  console.log("num2", num2.val());
  console.log("segno:", segno);

//verifico che i valori non siano null 
if(num1.val() && num2.val()){

    //forzo il passaggio delle variabili in int e creo due variabili di appoggio
    var n1 = parseInt(num1.val());
    var n2 = parseInt(num2.val());

    //svolgo il calcolo in base al segno 
    switch(segno){

            case "+":
            var risultato = n1 + n2;
            break;
            case "-":
            var risultato = n1 - n2;
            break;
            case "*":
            var risultato = n1 * n2;
            break;
            case "/":
            var risultato = n1 + n2;
            break;

    }

    //creo la stringa per l'inserimento nella tabella
    var string = 
    "<tr><td>" +
    n1 +
    "</td><td style='text-align:center'>" +
    segno +
    "</td><td>" +
    n2 +
    "</td><td>" +
    risultato +
    "</td></tr>";

    //aggiungo i risultati alla tabella con append
    $("#tab").append(string);
    n1.val("");
    n2.val("");
}
};