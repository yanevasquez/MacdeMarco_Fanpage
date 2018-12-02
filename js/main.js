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
                                      // EM ATUALIZAÇÃO //