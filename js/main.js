$(document).ready(function () {
  //! funzione che rimuove flex ai contenitori che non devono essere visualizzati
  function removeFlex() {
    $(".flex").each(function () {
      $(this).removeClass("flex");
    });
  }

  //! ogni volta che clicco fuori dal documento mi toglie i flex
  $(document).click(removeFlex);
  //! aggiungo i mouseover per ogni elemento

  $("li").mouseover(function () {
    removeFlex();
    $(this).children(".simple-box").addClass("flex");
    $(this).children(".big-box").addClass("flex");
  });
});
