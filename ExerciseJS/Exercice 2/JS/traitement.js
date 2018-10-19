function btnCalculer_onclick()
{
    var MoyKmMois, TotKM;

    MoyKmMois = parseFloat (document.getElementById("txtMoyKm").value);
    TotKM = MoyKmMois*60;

    console.log("vous allez parcourir " + TotKM + "kilometre en 5 ans");
}