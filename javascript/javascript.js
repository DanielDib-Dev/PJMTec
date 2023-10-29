document.addEventListener('DOMContentLoaded', function() {
    AOS.init();
});

//Dark-Mode
$(document).ready(function() {
    var darkMode = localStorage.getItem("darkMode");
  
    if (darkMode === "true") {
      enableDarkMode();
    }
  
    $(".checkbox-dark-mode").change(function() {
      if ($(this).is(":checked")) {
        enableDarkMode();
        localStorage.setItem("darkMode", "true");
      } else {
        disableDarkMode();
        localStorage.removeItem("darkMode");
      }
    });
  
    function enableDarkMode() {
      $("body").css("--cor-fundo", "#000000");
      $("body").css("--cor-letra", "#FFFFFF");
      $("body").css("--cor-nav", "#ff8300");
      $("body").css("--cor-nav2", "#fdf4ea");
      $("body").css("--cor-navhover", "#000000");
      $("body").css("--cor-navhover2", "#e77700");
      $("body").css("--cor-sombra", "rgba(46, 46, 46, 1)");
      $("body").css("--cor-fundolaranja", "#a85600");
      $("body").css("--cor-link", "#000000");
      $("body").css("--cor-data", "#999999");
      $(".beneficios-img").attr("src", "imagens/beneficios2.png");
      $("#banner-img").css("opacity", "0");
    }
  
    function disableDarkMode() {
      $("body").css("--cor-fundo", "#fdf4ea");
      $("body").css("--cor-letra", "#000000");
      $("body").css("--cor-nav", "#000000");
      $("body").css("--cor-nav2", "#000000");
      $("body").css("--cor-navhover", "#ff8300");
      $("body").css("--cor-navhover2", "#1f1f1f");
      $("body").css("--cor-sombra", "rgba(0, 0, 0, 0.5)");
      $("body").css("--cor-fundolaranja", "#ff8300");
      $("body").css("--cor-link", "#003392");
      $("body").css("--cor-data", "#4d4d4d");
      $(".beneficios-img").attr("src", "imagens/beneficios.png");
      $("#banner-img").css("opacity", "1");
    }
  });
  
  //Muda a posição do interruptor do dark mode
  $(document).ready(function() {
    var checkbox = $(".checkbox-dark-mode");
  
    var isChecked = localStorage.getItem("darkModeChecked");
  
    if (isChecked === "true") {
      checkbox.prop("checked", true);
    }
  
    checkbox.change(function() {
      if ($(this).is(":checked")) {
        localStorage.setItem("darkModeChecked", "true");
      } else {
        localStorage.setItem("darkModeChecked", "false");
      }
    });
  });

  var radios = document.querySelectorAll('input[name="avaliacao"]');
    
    for (var i = 0; i < radios.length; i++) {
        radios[i].addEventListener('change', function () {
            var selectedValue = this.value;
            
            if(selectedValue == 1){
              $("#star1-label").css("color", "#ff8300");
              $("#star2-label").css("color", "#bbbbbb");
              $("#star3-label").css("color", "#bbbbbb");
              $("#star4-label").css("color", "#bbbbbb");
              $("#star5-label").css("color", "#bbbbbb");
            }

            else if(selectedValue == 2){
              $("#star1-label").css("color", "#ff8300");
              $("#star2-label").css("color", "#ff8300");
              $("#star3-label").css("color", "#bbbbbb");
              $("#star4-label").css("color", "#bbbbbb");
              $("#star5-label").css("color", "#bbbbbb");
            }
            else if(selectedValue == 3){
              $("#star1-label").css("color", "#ff8300");
              $("#star2-label").css("color", "#ff8300");
              $("#star3-label").css("color", "#ff8300");
              $("#star4-label").css("color", "#bbbbbb");
              $("#star5-label").css("color", "#bbbbbb");
            }
            else if(selectedValue == 4){
              $("#star1-label").css("color", "#ff8300");
              $("#star2-label").css("color", "#ff8300");
              $("#star3-label").css("color", "#ff8300");
              $("#star4-label").css("color", "#ff8300");
              $("#star5-label").css("color", "#bbbbbb");
            }
            else if(selectedValue == 5){
              $("#star1-label").css("color", "#ff8300");
              $("#star2-label").css("color", "#ff8300");
              $("#star3-label").css("color", "#ff8300");
              $("#star4-label").css("color", "#ff8300");
              $("#star5-label").css("color", "#ff8300");
            }
        });
    }