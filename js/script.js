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

 $(document).ready(function(){

   $(".items").isotope({
      filter: '*',
      animationOptions: {
         duration: 1500,
         easing: 'linear',
         queue: false
      }
   });

   $("#filters a").click(function(){
      $("#filters .current").removeClass("current");
      $(this).addClass("current");

      var selector = $(this).attr("data-filter");

      $(".items").isotope({
         filter: selector,
         animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
         }
      });
      return false;
   })

 });