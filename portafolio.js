// PRIMERO CREAMOS UNA VARIABLE QUE CONTIENE TODOS LOS DATOS DE TUS TRABAJOS
var trabajos = [
{
    figure: "media/foto-01.jpg",
    title: "Bestia inflable",
    about: "Estructura neumática construída en mangas plásticas.",
}, {
    figure: "media/foto-02.jpg",
    title: "Calugas Bianchini",
    about: "Perfeccionamiento de marca.",
}, {
    figure: "media/foto-03.jpg",
    title: "DORSO",
    about: "Botella para choferes del transantiago.",
}, {
    figure: "media/foto-04.jpg",
    title: "TEMPO",
    about: "Lámpara de sal fundida.",
}, {
    figure: "media/foto-05.jpg",
    title: "Receta infográfica",
    about: "Fufú de plátano, preparación cubana.",
}, {
    figure: "media/foto-06.jpg",
    title: "Sal fundida",
    about: "Muestrario experimental.",
}, {
    figure: "media/foto-07.jpg",
    title: "Infografía Bilora Boy",
    about: "Historia de una cámara antigua.",
  }, {
      figure: "media/foto-08.jpg",
      title: "Faba",
      about: "Comida al paso, cocina fusión chileno-árabe.",
    }, {
        figure: "media/foto-09.jpg",
        title: "Pulsera Ophic ",
        about: "Diseño de experiencia.",
      }, {
          figure: "media/foto-10.jpg",
          title: "Infografía Slackline",
          about: "Conceptos básicos para principiantes.",
        }, {
            figure: "media/foto-11.jpg",
            title: "Infografía sal",
            about: "Procesos de extracción y usos.",
}
]
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    $('#portafolio').append('<div class="item">' + uno + dos + tres + '</div>')
});
