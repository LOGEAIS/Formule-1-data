function block()
{
    document.getElementById("result").style.display = "none";
}

function ajouter()
{
    /*if (document.getElementById('name').value == "" || document.getElementById('description').value == "")
	{
		alert("Erreur");
    }*/

    var table = document.getElementById("first");
   
    var title_name = document.getElementById("title_name");
    var info = document.getElementById("new");
    var desc = document.getElementById("description1");
    var birth = document.getElementById("birth1");

    var name = document.createElement('h2');
    name.textContent = document.getElementById('name').value;

    var description = document.createElement('span');
    description.textContent = document.getElementById('description').value;

    var ecuries = document.createElement('span');
    ecuries.textContent = document.getElementById('ecuries').value;

    var birth1 = document.createElement('span');
    birth1.textContent = document.getElementById('birth').value;

    var push = title_name.appendChild(name);
    var push = desc.appendChild(description);
    var push = info.appendChild(ecuries);
    var push = birth.appendChild(birth1);

    document.getElementById("result").style.display = "block";
    document.getElementById("form").style.display = "none";
}

function nouveau()
{
    document.location.reload(true);
    document.getElementById("result").style.display = "none";
    document.getElementById("form").style.display = "block";
}