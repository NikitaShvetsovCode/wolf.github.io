let title = document.querySelector('.title');
let subtitle = document.querySelector('.subtitle');
let isAnimate = document.querySelector('.isAnimate');

setTimeout((e)=>{
    title.classList.remove('isAnimate');
    subtitle.classList.remove('isAnimate');
},1500);