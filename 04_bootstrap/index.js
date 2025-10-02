// creamos la funcion login
function login(){

    // capturo la info del input email
    let email = document.getElementById("email").value;

    // capturamos la info del password
    let password = document.getElementById("password").value;


    // imprimir el dato
    console.log(email);
    console.log(password);
     
    // vereficamos si el email y password son correctos
    if (email == "tortuuho32@gmail.com"  && password == "4321"){
    alert("Te vas a loguear");

    // redireccionar a la pagina perfil.html
    window.location.href = "perfil.html";
    }else{
        alert("Email o Password incorrectos"); 
        Location.href = "error.html";
    }

}