var table;
/*Vérification du bon remplissage des champs*/
function check() {
    debugger;

    if (Nom == "" || Nom == null) {
        document.getElementById("span1").innerHTML = "Please enter the Name";
        document.myForm.Nom.focus();
        document.getElementById("Nom").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span1").innerHTML = "";
        document.getElementById("Nom").style.border = "2px solid green";
    }



    var Prenom = document.myForm.Prenom.value;
    if (Prenom == "" || Prenom == null) {
        document.getElementById("span4").innerHTML = "Prenom";
        document.myForm.Prenom.focus();
        document.getElementById("Prenom").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span4").innerHTML = "";
        document.getElementById("Prenom").style.border = "2px solid green";
    }


    var Email = document.myForm.Email.value;
    if (Email == "" || Email == null) {
        document.getElementById("span5").innerHTML = "Email";
        document.myForm.Email.focus();
        document.getElementById("Email").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span5").innerHTML = "";
        document.getElementById("Email").style.border = "2px solid green";
    }



    var Sexe = document.myForm.Sexe.value;
    if (Sexe == "" || Sexe == null) {
        document.getElementById("span6").innerHTML = "Sexe";
        document.myForm.Sexe.focus();
        document.getElementById("Sexe").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span6").innerHTML = "";
        document.getElementById("Sexe").style.border = "2px solid green";
    }


    var dn = document.myForm.dn.value;
    if (dn == "" || dn == null) {
        document.getElementById("span7").innerHTML = "dn";
        document.myForm.dn.focus();
        document.getElementById("dn").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span7").innerHTML = "";
        document.getElementById("dn").style.border = "2px solid green";
    }


    var Portable = document.myForm.Portable.value;
    if (Portable == "" || Portable == null) {
        document.getElementById("span8").innerHTML = "Portable";
        document.myForm.Portable.focus();
        document.getElementById("Portable").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span8").innerHTML = "";
        document.getElementById("Portable").style.border = "2px solid green";
    }


    var dd = document.myForm.dd.value;
    if (dd == "" || dd == null) {
        document.getElementById("span9").innerHTML = "dd";
        document.myForm.dd.focus();
        document.getElementById("dd").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span9").innerHTML = "";
        document.getElementById("dd").style.border = "2px solid green";
    }


    var Ville = document.myForm.Ville.value;
    if (Ville == "" || Ville == null) {
        document.getElementById("span10").innerHTML = "Ville";
        document.myForm.Ville.focus();
        document.getElementById("Ville").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span10").innerHTML = "";
        document.getElementById("Ville").style.border = "2px solid green";
    }


    var NbJ = document.myForm.NbJ.value;
    if (NbJ == "" || NbJ == null) {
        document.getElementById("span11").innerHTML = "NbJ";
        document.myForm.NbJ.focus();
        document.getElementById("NbJ").style.border = "2px solid red";
        return false;
    }
    else {
        document.getElementById("span11").innerHTML = "";
        document.getElementById("NbJ").style.border = "2px solid green";
    }




    if (document.getElementById("data") == null)
        createTable();
    else {
        appendRow();
    }
    return true;
}

/*Création du tableau remplit dynamiquement avec les données du formulaire*/
function createTable() {

    var myTableDiv = document.getElementById("myTable");  //indiv
    table = document.createElement("TABLE");   //TABLE??
    table.setAttribute("id", "data");
    table.border = '1';
    myTableDiv.appendChild(table);  //appendChild() insert it in the document (table --> myTableDiv)
    debugger;

    var header = table.createTHead();

    var th0 = table.tHead.appendChild(document.createElement("th"));
    th0.innerHTML = "Nom";
    var th1 = table.tHead.appendChild(document.createElement("th"));
    th1.innerHTML = "Prenom";
    var th2 = table.tHead.appendChild(document.createElement("th"));
    th2.innerHTML = "Sexe";
    var th3 = table.tHead.appendChild(document.createElement("th"));
    th3.innerHTML = "Date de naissance";
    var th4 = table.tHead.appendChild(document.createElement("th"));
    th4.innerHTML = "Email";
    var th5 = table.tHead.appendChild(document.createElement("th"));
    th5.innerHTML = "Portable";
    var th6 = table.tHead.appendChild(document.createElement("th"));
    th6.innerHTML = "Date souhaitée de visite";
    var th7 = table.tHead.appendChild(document.createElement("th"));
    th7.innerHTML = "Ville";
    var th8 = table.tHead.appendChild(document.createElement("th"));
    th8.innerHTML = "Nombre de jours";



    appendRow();

}
/*Ajout des nouvelles lignes du tableau de façon dynamique*/
function appendRow() {
    var Nom = document.myForm.Nom.value;
    var Prenom = document.myForm.Prenom.value;
    var Sexe = document.myForm.Sexe.value;
    var dn = document.myForm.dn.value;
    var Email = document.myForm.Email.value;
    var Portable = document.myForm.Portable.value;
    var dd = document.myForm.dd.value;
    var Ville = document.myForm.Ville.value;
    var NbJ = document.myForm.NbJ.value;


    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = Nom;
    row.insertCell(1).innerHTML = Prenom;
    row.insertCell(2).innerHTML = Sexe;
    row.insertCell(3).innerHTML = dn;
    row.insertCell(4).innerHTML = Email;
    row.insertCell(5).innerHTML = Portable;
    row.insertCell(6).innerHTML = dd;
    row.insertCell(7).innerHTML = Ville;
    row.insertCell(8).innerHTML = NbJ;



    clearForm();


}

/*Efface le contenu des champs pré-remplis*/
function clearForm() {
    debugger;

    document.myForm.Nom.value = "";
    document.myForm.Prenom.value = "";
    document.myForm.Sexe.value = "";
    document.myForm.dn.value = "";
    document.myForm.Email.value = "";
    document.myForm.Portable.value = "";
    document.myForm.dd.value = "";
    document.myForm.Ville.value = "";
    document.myForm.NbJ.value = "";



}
function restrictCharacters(evt) {

    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (((charCode >= '65') && (charCode <= '90')) || ((charCode >= '97') && (charCode <= '122')) || (charCode == '32')) {
        return true;
    }
    else {
        return false;
    }
}
