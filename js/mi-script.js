$(document).on('ready', function(){

// Iniciar tomando la hora del cliente
iniciarTemporizador();

// Iniciar tomando la hora del servidor
/*
    var dominio = 'http://localhost:8888';

    var servidor = $.get(dominio +'/hora.php', function(data){
        horaServidor = data;
        iniciarTemporizador(horaServidor);
    });
*/

});

function iniciarTemporizador(horaServidor) {

	var fechaFinal = new Date(2016, 11, 31, 23, 59, 59);
    var fechaHoy = new Date();

    // Para obtener la hora del servidor
    /*
    var fechaHoy = new Date(horaServidor);
    */

	var diferenciaMilisegundos = fechaFinal.getTime() - fechaHoy.getTime();
	var diferenciaSegundos = (diferenciaMilisegundos/1000);

	var clock = $("#mi-reloj").FlipClock({
    	clockFace: 'DailyCounter',
        callbacks: {
            interval: redireccionar
        },
	});

	clock.setTime(diferenciaSegundos);
	clock.setCountdown(true);

    function redireccionar()
    {
        if (clock.getTime() <= 0) {
            window.location.replace('http://adsiar.com');
        }
    }

}