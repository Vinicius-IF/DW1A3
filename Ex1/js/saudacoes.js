function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);

    var mostra = "Boa noite";
    if ((h >= 6) && (h < 12)) {
    mostra = "Bom dia";
    } else if ((h >= 12) && (h < 19)) {
    mostra = "Boa tarde";
    }

    document.getElementById('Horario').innerHTML = "A hora é: " + h + ":" + m + ":" + s;
    document.getElementById('Ho').innerHTML = mostra;
    
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

function sizeOfThings(){
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    document.querySelector('.window-size').innerHTML = windowWidth + 'x' + windowHeight;
  };
  sizeOfThings();
  
  window.addEventListener('resize', function(){
      sizeOfThings();
  });