var nbjour, vete, chat, chien, choice, total, animal, toilet;
total = 0;
chat = 16.95;
chien = 18.5;
toilet = "sans toilettage";
function btnCalculer_onclick()
{
    nbjour = parseFloat(document.getElementById("txtNbreJours").value);
    vete = document.getElementById("lstVeterinaire").value;


    if(document.getElementById("chkServ").checked == true)
    {
        total = total + 5;
        toilet = "avec toilettage";
    }

    if(document.getElementById("radChien").checked == true)
    {
        total = chien * nbjour;
        animal = "chien";
    }

    else if(document.getElementById("radChat").checked == true)
    {
        total = chat * nbjour;
        animal = "chat";
    }


    console.log(vete + "sera responssable de votre " + animal + " pour " + nbjour + " jours " + toilet + " et sa vous couteras pour un total de " + total + "$!");

}