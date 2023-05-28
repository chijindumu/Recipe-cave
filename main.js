const menu = document.querySelector('#menu');
const button = document.querySelector('#button');
const more = document.querySelector('#more');
const loadMore = document.querySelector('#loadMore');

menu.style.display = 'none';
more.style.display = 'none';

button.onclick = function(){
  if(menu.style.display == 'none'){
    menu.style.display = 'block'
  }else{
    menu.style.display = 'none'
  };
};
loadMore.onclick = function(){
  if(more.style.display == 'none'){
    more.style.display = 'block'
    loadMore.innerHTML = "View Less"
  }else{
    more.style.display = 'none'
    loadMore.innerHTML = "load more"
  };
};