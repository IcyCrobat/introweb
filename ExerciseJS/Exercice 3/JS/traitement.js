function btnCalculer_onclick()
{
    var ArgentCAN, TauxChangeEuro, Euro;

    ArgentCAN = parseFloat (document.getElementById("txtargentcan").value);
    TauxChangeEuro = parseFloat (document.getElementById("txttauxchange").value);
    Euro = ArgentCAN*TauxChangeEuro;

    console.log("vous avez " + Euro + "euro");

}