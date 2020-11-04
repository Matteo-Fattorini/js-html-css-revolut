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

  $("#conti-span").mouseover(function () {
    removeFlex();
    $("#conti").addClass("flex");
  });
  $("#help-span").mouseover(function () {
    removeFlex();
    $("#help").addClass("flex");
  });
  $("#it-span").mouseover(function () {
    removeFlex();
    $("#it").addClass("flex");
  });
  $("#azienda-span").mouseover(function () {
    removeFlex();
    $("#azienda").addClass("flex");
  });
  $("#prodotti-span").mouseover(function () {
    removeFlex();
    $("#prodotti").addClass("flex");
  });
  $("#tariffazione-span").mouseover(function () {
    removeFlex();
    $("#tariffazione").addClass("flex");
  });
});
