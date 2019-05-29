function defaut() 
{
    document.body.style.backgroundImage = "url('../img/circuits/belgique.JPG')";
    document.getElementById("belgique").style.display = "block";
    document.getElementById("monza").style.display = "block";
    document.getElementById("monaco").style.display = "block";
    document.getElementById("singapour").style.display = "block";
    document.getElementById("abudhabi").style.display = "block";
}

function belgique_circ() 
{
    setTimeout(function()
   {document.body.style.backgroundImage = "url('../img/circuits/belgique.JPG')"; }, 3);
}

function monza_circ() 
{
    setTimeout(function()
    { document.body.style.backgroundImage = "url('../img/circuits/monza.jpg')"; }, 3);
}
function monaco_circ() 
{
    setTimeout(function()
    { document.body.style.backgroundImage = "url('../img/circuits/monaco.jpg')"; }, 3);
}

function singapour_circ() 
{
    setTimeout(function()
    { document.body.style.backgroundImage = "url('../img/circuits/singapour.jpeg')"; }, 3);
}

function abudhabi_circ() 
{
    setTimeout(function()
    { document.body.style.backgroundImage = "url('../img/circuits/abudhabi.jpg')"; }, 3);
}