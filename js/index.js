(function() {

  var screenresolution = window.screen.availWidth;
  var allf = document.getElementById("allf")

if( screenresolution<700){
  var con = confirm("BUKANYA LEWAT LAPTOP YAHHHH :D ANGGUN")
  con
  allf.classList.add('alloff');
  
  
  // document.getElementById("MyElement").classList.remove('MyClass');
 }else{

  function $(id) {
    return document.getElementById(id);
  }
  console.log(screenresolution)
  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  openB.addEventListener('click', function () {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null;
    }, 1000);
  });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });
}
}());
