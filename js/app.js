const container = document.querySelector('.container');
const animations = ['spin','shake', 'talk', 'wave'];

const idBtns = animations.map(btn => {
   btns = document.getElementById(btn);
   return btns;
});

idBtns.forEach((idBtn) => {
   idBtn.addEventListener('click',() => {
      container.classList.toggle('container--'+ idBtn.id.toLowerCase());
   })
});




