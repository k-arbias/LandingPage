let element = document.querySelectorAll('.dot');

element.forEach(function(){
   
   element[0].addEventListener('click', function(){
      let container = document.querySelector('.slideshow-container');
   container.classList.toggle('dot1');
   })
   element[1].addEventListener('click', function(){
      let container = document.querySelector('.slideshow-container');
   container.classList.toggle('dot2');
   })
   element[2].addEventListener('click', function(){
      let container = document.querySelector('.slideshow-container');
   container.classList.toggle('dot3');
   })
});

