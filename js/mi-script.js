$(document).on('ready', function(){

    var dominio = 'http://localhost:8888';

    var servidor = $.get(dominio +'/hora.php', function(data){
        horaServidor = data;
        iniciarTemporizador(horaServidor);
    });

});

function iniciarTemporizador(horaServidor) {

	var fechaFinal = new Date(2015, 01, 08, 00, 00, 00);
    //var fechaHoy = new Date();
    var fechaHoy = new Date(horaServidor);

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
            window.location.replace('https://twitter.com/danielromeroauk');
        }
    }

}