const container = document.querySelector('.container');
const ids = ['spin','shake', 'talk', 'wave'];

const idBtns = ids.map(btn => {
   btns = document.getElementById(btn);
   return btns;
});

idBtns.forEach((idBtn) => {
   idBtn.addEventListener('click',() => {
      container.classList.toggle('container--'+ idBtn.computedName.toLowerCase());
   })
});




