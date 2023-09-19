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
      $("body").css("--cor-fundo", "#141414");
      $("body").css("--cor-letra", "#FFFFFF");
      $("body").css("--cor-nav", "#ff8300");
      $("body").css("--cor-nav2", "#fdf4ea");
      $("body").css("--cor-navhover", "#000000");
      $("body").css("--cor-navhover2", "#e77700");
      $(".navbar-brand img").attr("src", "imagens/logo3.png");
      $(".navbar-toggler-icon").css("filter", "brightness(0)");
    }
  
    function disableDarkMode() {
      $("body").css("--cor-fundo", "#fdf4ea");
      $("body").css("--cor-letra", "#000000");
      $("body").css("--cor-nav", "#000000");
      $("body").css("--cor-nav2", "#000000");
      $("body").css("--cor-navhover", "#ff8300");
      $("body").css("--cor-navhover2", "#1f1f1f");
      $(".navbar-brand img").attr("src", "imagens/logo.png");
      $(".navbar-toggler-icon").css("filter", "brightness(10)");
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