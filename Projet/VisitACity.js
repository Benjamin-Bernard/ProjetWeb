var slideIndex = 1;    
/*Appel des deux fonctions nécessaires au bouton back to top*/
function init(){
    addEventListener("scroll",hideBackToTop);
    document.getElementById("btn-backTop").addEventListener("click",backToTop);
    document.getElementById("IDburger").addEventListener("click",burger);
    showSlides(slideIndex);
}

/*Le bouton est caché si, nous nous trouvons en haut de la page*/
/*Le bouton est affiché si nous défilons sur la page */
function hideBackToTop(){
    var btn = document.getElementById("btn-backTop");
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btn.style.display = 'block';
    }
    else{
        btn.style.display = 'none';
    }
}   

/*Fonction permettant de revenir en haut de la page lors du click*/
function backToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/*Fonction permettant d'afficher le burger*/
function burger(){
    var x = document.querySelectorAll(".burger");
    for (let i = 0; i < x.length; i++) {
         if(x[i].style.display != "none"){
                 x[i].style.display = "none" ;
              
    
         }else{
                 x[i].style.display = "block" ;
         

         }
     

     } 

        

 }


function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


addEventListener("load", init);/*Appel de la fonction au chargement de la page web*/