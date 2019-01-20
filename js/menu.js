var cont_click_menu=0;
var opciones_m = document.getElementById("opciones_menu");
var texto_m = document.getElementsByClassName("texto_menu");
var i;
function aparecer_desaparecer_menu(){
   if(cont_click_menu==0){
       for (i = 0; i < texto_m.length; i++) {
           texto_m[i].style.visibility = 'hidden';
       }
       opciones_m.style.visibility = 'visible';
       opciones_m.classList.add('animacion_aparecer_izq');
       setTimeout(function(){
           for (i = 0; i < texto_m.length; i++) {
           texto_m[i].style.visibility = 'visible';
           }
       },300);
       cont_click_menu++;
   }
   else if(cont_click_menu==1){
       for (i = 0; i < texto_m.length; i++) {
           texto_m[i].style.visibility = 'hidden';
       }
       opciones_m.classList.remove('animacion_aparecer_izq');
       opciones_m.classList.add('animacion_desaparecer_izq');
       setTimeout(function(){opciones_m.style.visibility = 'hidden';},400);
       cont_click_menu++;
   }
   else{
       opciones_m.style.visibility = 'visible';
       opciones_m.classList.remove('animacion_desaparecer_izq');
       opciones_m.classList.add('animacion_aparecer_izq');
       setTimeout(function(){
           for (i = 0; i < texto_m.length; i++) {
           texto_m[i].style.visibility = 'visible';
           }
       },300);
       cont_click_menu=1;
   }
}