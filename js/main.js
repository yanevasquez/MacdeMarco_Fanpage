//Seletor para string de músicas
let response = document.querySelector('.response');

//Função "menu" com evento de click
function menu(){
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".links");
  menu.addEventListener("click",function(e){
    e.preventDefault();
    if(!(this.classList.contains('clicar_menu'))){
      this.classList.toggle("clicar_menu");
      links.classList.add("clicar_links");
    } else {
      this.classList.remove("clicar_menu");
      links.classList.remove("clicar_links");
    }
  });
}
menu()

//Função map obter as musicas
function trasMusicas(album){
	let resp = album.discs[0].map(x=> `<li> <span class="music">${x.desc}</span></li>`).join('')
	return resp
}

//Função que requisita da API : nome, imagem, e ano dos álbuns
function trasImg(album){
	let res = `<div class='imgAlbum'><h3>${album.desc}</h3><img src='https://s2.vagalume.com/${album.cover}'><h2>${album.published}</h2></div>`
	return res
}

//Função com fetch para exibir as infos do json principal 
//Função de click em música 
 function geraInfo() {
	let url = 'https://www.vagalume.com.br/mac-demarco/discografia/index.js'
	fetch(url)
	  .then(res => res.json())
	  .then( function(data){ 
			let str = data.discography.item.map(item=> `<div class='info'>${trasImg(item)}<ul>${trasMusicas(item)}</ul></div>`).join('')
			response.innerHTML = str
      	let musics = document.querySelectorAll('span.music')
      	musics.forEach(e=>{
        	e.addEventListener('click',()=>{
          	geraLetras(e.innerHTML)
        })
      })
      
	});
 }
 geraInfo();

//Fech que requisita as letras do json secundário
function geraLetras(music) {
  let url = `https://api.vagalume.com.br/search.php?apikey=660a4395f992ff67786584e238f501a&art=mac-demarco&mus=${music}`
  fetch(url)
    .then(res => res.json())
    .then( function(data){ 
      let lyricmusic = data.mus[0].text
      let namemusic=data.mus[0].name
     
//Regex para substituir quebra de linha por "<br>"
      let pattern= /\n/g
      let result = lyricmusic.split(pattern).join(`<br>`)
          $('.box').bPopup({
              easing: 'easeOutBack', 
              speed: 500,
              transition: 'slideDown',      
          })
      
      $('.box').css('left','33%')
      $('.box').html(`<img src='img/som.gif'><h2>${namemusic}</h2><div class='lyric'>${result}</div>`)
      
  });
  }
geraLetras();


