function cambiarImagenRampla() {

    console.log("hodih")
    if (document.getElementById("img_rampla").src === "img/icon_rampla_gris.png") 
    {
        document.getElementById("img_rampla").src = "img/icon_rampla.png";
        console.log("si")
    }
    else 
    {
        document.getElementById("img_rampla").src = "./img/icon_rampla_gris.png";
    }
}