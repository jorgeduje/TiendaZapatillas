var modelosZapatillas = [
    {
        modelo: "Revolution 5",
        descripcion: "Consultar Talles",
        precio: 6700,
        imagenes: "./src/img/revolution.jpg"
    },

    {
        modelo: "Legend",
        descripcion: "Consultar Talles",
        precio: 8760,
        imagenes: "./src/img/legend.jpg"
    },

    {
        modelo: "Air max excee",
        descripcion: "Consultar Talles",
        precio: 7650,
        imagenes: "./src/img/airmaxexcee.jpg"
    },

    {
        modelo: "Nike Blazer Vintage",
        descripcion: "Consultar Talles",
        precio: 5567,
        imagenes: "./src/img/vintage.jpg"
    },

    {
        modelo: "Nike AF 1/1",
        descripcion: "Consultar Talles",
        precio: 5890,
        imagenes: "./src/img/nike-AF.jpg"
    },
     
    {
        modelo: "Air Max Plus",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/maxPlus.jpg"
    },

    {
        modelo: "SB Nyjah Free 2",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/NyjahFree.jpg"
    },

    {
        modelo: "Renew Elevate 2",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/RenewElevate.jpg"
    },

    {
        modelo: "Low Pro GT",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/lowprogt.jpg"
    },

    {
        modelo: "Free Run Trail",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/FreeRunTrail.jpg"
    },

    {
        modelo: "Revolution 5",
        descripcion: "Consultar Talles",
        precio: 6700,
        imagenes: "./src/img/revolution.jpg"
    },

    {
        modelo: "Legend",
        descripcion: "Consultar Talles",
        precio: 8760,
        imagenes: "./src/img/legend.jpg"
    },

    {
        modelo: "Air max excee",
        descripcion: "Consultar Talles",
        precio: 7650,
        imagenes: "./src/img/airmaxexcee.jpg"
    },

    {
        modelo: "Nike Blazer Vintage",
        descripcion: "Consultar Talles",
        precio: 5567,
        imagenes: "./src/img/vintage.jpg"
    },

    {
        modelo: "Nike AF 1/1",
        descripcion: "Consultar Talles",
        precio: 5890,
        imagenes: "./src/img/nike-AF.jpg"
    },
     
    {
        modelo: "Air Max Plus",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/maxPlus.jpg"
    },

    {
        modelo: "SB Nyjah Free 2",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/NyjahFree.jpg"
    },

    {
        modelo: "Renew Elevate 2",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/RenewElevate.jpg"
    },

    {
        modelo: "Low Pro GT",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/lowprogt.jpg"
    },

    {
        modelo: "Free Run Trail",
        descripcion: "Consultar Talles",
        precio: 8550,
        imagenes: "./src/img/FreeRunTrail.jpg"
    }

];

for (var i = 0; i < modelosZapatillas.length; i++) {

    var tarjetaIndiv = modelosZapatillas[i];
    
    var tarjetas = document.getElementById("productos");
    
    tarjetas.innerHTML += '<div class="card"><img src="'+tarjetaIndiv.imagenes+'" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">'+ tarjetaIndiv.modelo +'</h5><p class="card-text talle">'+ tarjetaIndiv.descripcion +'</p><h2>$'+ tarjetaIndiv.precio +'</h2></p><a href="#" class="boton">Agregar</a><a href="#" class="botonRojo">Quitar</a></div></div>'

}




