// capturar datos de inicio de sesion
function MostrarInputs(){
    let user=document.getElementById("user").value;
    let passw=document.getElementById("passw").value;
    console.log(user);
    console.log(passw);
}

  var restaurantes = [
    {
        nombreRestaurante: "McDonal's",
        categoria: "hamburguesas",
        urlImagen: 'assents/img/McDonals2.jpg',
        horaAtencion: "8:00am-8:00pm",
        
    },
    {
        nombreRestaurante: "BurgerKing",
        categoria: "hamburguesas",
        urlImagen: 'assents/img/BK.png',
        horaAtencion: "9:00am-8:00pm",
    },
    {
        nombreRestaurante: "PizzaHut",
        categoria: "pizza",
        urlImagen: 'assents/img/pizzahut.png',
        horaAtencion: "8:00am-8:00pm",
    },
    {
        nombreRestaurante: "Churchs Chicken",
        categoria: "pollo",
        urlImagen: 'assents/img/Churchs.png',
        horaAtencion: "7:00am-8:00pm",
    },
    {
        nombreRestaurante: "Dominos Pizza",
        categoria: "pizza",
        urlImagen: 'assents/img/dominos pizza.jpeg',
        horaAtencion: "9:00am-8:00pm",
        
    },
    {
        nombreRestaurante: "Wendys",
        categoria: "hamburguesas",
        urlImagen: 'assents/img/wendys.png',
        horaAtencion: "9:00am-8:00pm",
    },
    {
        nombreRestaurante: "Papa Johns",
        categoria: "pizza",
        urlImagen: 'assents/img/Papa-Johns.png',
        horaAtencion: "8:00am-8:00pm",
    },
    {
        nombreRestaurante: "Churchs Texas",
        categoria: "pollo",
        urlImagen: 'assents/img/ChursChi.png',
        horaAtencion: "7:00am-8:00pm",
    }
]

function generarRestaurantes() {
    restaurantes.forEach(function(rest){
        document.getElementById('restaurantes').innerHTML += 
    `<div class="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
        <div class="card">
            <img src="${rest.urlImagen}" class="card-img-top" >
                <div class="card-body">
                    <h5 class="card-title">${rest.nombreRestaurante}</h5>
                    <p class="card-text">hora de atencion: ${rest.horaAtencion}</p>
                    <a href="#" class="btn btn-primary">Gestionar Combos</a>
                </div>
        </div>
    </div>`;
    });   
}

generarRestaurantes();

