function ajouter()
{
    /*if (document.getElementById('name').value == "" || document.getElementById('description').value == "")
	{
		alert("Erreur");
    }*/
    

    var table = document.getElementById("first");

    var title_name = document.getElementById("title_name");
    var info = document.getElementById("new");

    var name = document.createElement('h2');
    name.textContent = document.getElementById('name').value;

    var description = document.createElement('p');
    description.textContent = document.getElementById('description').value;

    var ecuries = document.createElement('span');
    ecuries.textContent = document.getElementById('ecuries').value;

    var cars = document.createElement('p');
    cars.textContent = document.getElementById('cars').value;

    var push = title_name.appendChild(name);
    var push = table.appendChild(description);
    var push = info.appendChild(ecuries);
    var push = table.appendChild(cars);
    
}