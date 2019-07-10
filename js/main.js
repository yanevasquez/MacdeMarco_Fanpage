const descAlbums = document.querySelector('.DescAlbums');
let response2 = document.querySelector('.response2');
const lastfmBase = "https://ws.audioscrobbler.com/2.0/?method=album.getinfo";
const vglmeJsonBase = "https://www.vagalume.com.br/";
const vglmeSinger = "mac-demarco/index.js";


function menu() {
    const menu = document.querySelector(".menu");
    const links = document.querySelector(".links");
    menu.addEventListener("click", function(e) {
        e.preventDefault();
        if (!(this.classList.contains('clicar_menu'))) {
            this.classList.toggle("clicar_menu");
            links.classList.add("clicar_links");
        } else {
            this.classList.remove("clicar_menu");
            links.classList.remove("clicar_links");
        }
    });
}
menu()

function hidePiano() {
    let y = document.querySelector('.response2');
    if (y.style.display === 'contents') {
        y.style.display = 'flex';
    } else {
        y.style.display = 'flex';
    }
}

function info01() {
    let nomes = ["Here+Comes+the+Cowboy", "This+old+Dog", "Another+One"];
    fetch(`${lastfmBase}&api_key=0261334e8697a511e85d2c383d54b254&artist=Mac+DeMarco&album=${nomes[0]}&format=json`)
        .then(resposta => resposta.json())
        .then(function(data) {
            let str2 = data.album.tracks.track
                .map(x => `<div class="preta">
                            <div class="names-musics">	
                                <ul><li> ${x.name}</li></ul>
                            </div>
                          </div>`)
                .join('')
            response2.innerHTML = str2
        })
    hidePiano()
}

function getDesc(album) {
    let res = `<div class='imgAlbum'>
                <h3>${album.desc}</h3>
                <h2>${album.year}</h2>
             </div>`
    return res
}

function getInfos() {
    let url = `${vglmeJsonBase}${vglmeSinger}`
    fetch(url)
        .then(res => res.json())
        .then(function(data) {
            let str = data.artist.albums.item
                .map(item => `<div class='info'>${getDesc(item)}</div>
                                 <a id="pian" onclick="info01()"
                                   <i class="material-icons">queue_music </i>
                                 </a>`)
                .join('')
            descAlbums.innerHTML = str
        });
}
getInfos();