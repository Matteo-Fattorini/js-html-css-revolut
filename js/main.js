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

  $("#help-span").mouseover(function () {
    removeFlex();
    $(this).children(".simple-box").addClass("flex");
  });
  $("#it-span").mouseover(function () {
    removeFlex();
    $(this).children(".simple-box").addClass("flex");
  });
  $("#azienda-span").mouseover(function () {
    removeFlex();
    $(this).children(".simple-box").addClass("flex");
  });
  $("#prodotti-span").mouseover(function () {
    removeFlex();
    $(this).children(".simple-box").addClass("flex");
  });
  $("#conti-span").mouseover(function () {
    removeFlex();
    $(this).children(".simple-box").addClass("flex");
  });
  $("#tariffazione-span").mouseover(function () {
    removeFlex();
    $(this).children(".big-box").addClass("flex");
  });
});
