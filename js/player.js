let audio;

//Inicia o botão pause modo oculto, ".hide()" método jQuery que oculta
$('#pause').hide();

//Chamada da funçao "iniciaAudio" na playlist do primeiro filho da lista
iniciaAudio($('#playlist li:first-child'));
	
function iniciaAudio(x){
//Uso do "attr" para recuperar atributos dos seletores
    let song = x.attr('song');
    let cover = x.attr('cover');
    let artist = x.attr('artist');

	//Cria um objeto New Audio
	audio = new Audio('media/' + song);
	
	//Insere imagens a medida que a musica muda
	$('img.cover').attr('src','img/covers/' + cover);
	$('#playlist li').removeClass('active');
    x.addClass('active');
}

//função de click no botão play
$('#play').click(function(){
	audio.play();
	$('#play').hide();
	$('#pause').show();	
});

//funçao de click no botão pause
$('#pause').click(function(){
	audio.pause();
	$('#pause').hide();
	$('#play').show();
});
	
//função de click no botão stop
$('#stop').click(function(){
	audio.pause();		
	audio.currentTime = 0;
	$('#pause').hide();
	$('#play').show();
	
});

//função de click na playlist
$('#playlist li').click(function() {
    audio.pause();
    iniciaAudio($(this));
	$('#play').hide();
	$('#pause').show();
	audio.play();
});

//Controle de volume
$('#volume').change(function(){
	audio.volume = parseFloat(this.value / 1000);
});

