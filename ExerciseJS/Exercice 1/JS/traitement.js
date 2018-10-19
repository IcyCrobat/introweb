function btnCalculer_onclick()
{ 
 	var PoidsLivre, KG;

    PoidsLivre = parseFloat (document.getElementById("txtPoidsLivre").value);
    KG = PoidsLivre/2.2;

    console.log("vous avez " + KG + "Kilo");
}