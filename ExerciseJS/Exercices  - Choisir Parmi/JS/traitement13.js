function btnCalculer_onclick()
{ 
 	var jour, choix;

    choix = parseFloat(document.getElementById("txtNumSem").value);

    switch (choix)
    {
        case 1:
            jour = "lundi";
            break;
        case 2:
            jour = "mardi";
            break;
        case 3:
            jour = "mercredi";
            break;
        case 4:
            jour = "jeudi";
            break;
        case 5:
            jour = "vendredi";
            break;
        case 6:
            jour = "samedi";
            break;
        case 7:
            jour = "dimanche";
            break;

    }
    alert(jour);
}