let slide = document.querySelectorAll('.next') 
 
let next = document.querySelector('.next') 
 
let prev = document.querySelector('.prev') 
 
 
let i = 0 
let x = 1 
 
for (let i = 0; i < slide.length; i++) { 
    slide[i].style.display = 'none' 
} 
slide[0].style.display = 'block' 
 
 
next.addEventListener('click',()=>{ 
    if(i<2){ 
        slide[i].style.display = 'none' 
        i++;x++ 
        slide[i].style.display = 'block' 
        current.innerHTML = `0${x}` 
    }else{ 
        slide[i].style.display = 'none' 
        i = 0; x=1; 
        slide[i].style.display = 'block' 
        current.innerHTML = `0${X} `
    } 
}) 
 
prev.addEventListener('click',()=>{ 
    if(i<0){ 
        slide[i].style.display = 'none' 
        i--;x-- 
        slide[i].style.display = 'block' 
        current.innerHTML = `0${x}`
    }else{ 
        slide[i].style.display = 'none' 
        i = 2; x=0; 
        slide[i].style.display = 'block' 
        current.innerHTML = `0${x} `
    } 
})