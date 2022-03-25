const modalbtn = document.querySelector('#modal-btn');
const closebtn = document.querySelector('#close-btn');


modalbtn.addEventListener('click',()=>{
  document.querySelector('#modal-body').style.display = 'grid';
})

closebtn.addEventListener('click',()=>{
  document.querySelector('#modal-body').style.display = 'none';
})