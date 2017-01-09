window.onload = function()

{

    var canvas = document.getElementById('mon_canvas');

        if(!canvas)

        {

            alert("Impossible de récupérer le canvas");
             return;

        }


    var context = canvas.getContext('2d');

        if(!context)

        {

            alert("Impossible de récupérer le context du canvas");
             return;
   
        }

context.beginPath();//On démarre un nouveau tracé
context.moveTo(0, 300);//On se déplace au coin inférieur gauche
context.lineTo(0, 120);
context.lineTo(300, 0);
context.lineTo(440, 140);
context.stroke();//On trace seulement les lignes.context.closePath();


context.font = "90px Helvetica";//On passe à l'attribut "font" de l'objet context une simple chaîne de caractères composé de la taille de la police, puis de son nom.
context.fillText("SIMPLON", 10, 220);//strokeText(); fonctionne aussi, vous vous en doutez.

context.font = "40px Helvetica red";//On passe à l'attribut "font" de l'objet context une simple chaîne de caractères composé de la taille de la police, puis de son nom.
context.fillStyle = "#ff0000"
context.fillText("Occitanie", 140, 260);//strokeText(); fonctionne aussi, vous vous en doutez.


context.beginPath();//On démarre un nouveau tracé
context.moveTo(800, 0);//On se déplace au coin inférieur gauche
//context.lineTo(0, 400);
context.lineTo(380, 500);
context.lineTo(-800,100);
context.stroke();//On trace seulement les lignes.context.closePath();


    //C'est ici que l'on placera tout le code servant à nos dessins.

}
