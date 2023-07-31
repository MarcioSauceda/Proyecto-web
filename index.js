var usuario = [
    {
        email: "1",
        contrasena: "asd.456"
    }
]

var restaurantes = [
    {
        nombreRestaurante: "McDonal's",
        categoria: "hamburguesas",
        img: "img1.png",
        calificacion: "4"
    },
    {
        nombreRestaurante: "BurgerKind",
        categoria: "hamburguesas",
        img: "img2.png",
        calificacion: "3"
    },
    {
        nombreRestaurante: "Espresso Americano",
        categoria: "reposteria",
        img: "img3.png",
        calificacion: "3"
    }

]

function validateUser() {
    var inputUsername = document.getElementById('email').value;
    var inputPassword = document.getElementById('contrasena').value;

    usuario.forEach((objetos)=>{
        if (objetos.email === inputUsername && objetos.contrasena === inputPassword) {
            // Redirigir al usuario a la página deseada si las credenciales son correctas
            window.location.href = 'menuProducto.html';
          }
    });
    
  }

function mostrarRestaurante(){

    restaurantes.forEach(function(resta){
            let estrella = '';

            for (let i = 0; i < resta.calificacion; i++) {
                estrella += '<i class="fa-solid fa-star"></i>';  
            }
            for (let i = 0; i < (5-resta.calificacion); i++) {
                estrella += '<i class="fa-regular fa-star"></i>';
                
            }

            document.getElementById('contedor-principal').innerHTML += `
            <div class="col-md-4 col-sm-6 col-12">
            <div class="card">
            <img src="${resta.img}" class="card-img-top" >
            <div class="card-body">
              <h5 class="card-title">${resta.nombreRestaurante}</h5>
              <div>
              ${estrella}
              
              </div>
            </div>
    
        </div></dic> `


    });
} 

function cargarCategorias() {

     window.location.href = 'elegirCadena.html'
    
}
mostrarRestaurante();