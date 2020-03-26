(function() {
  "use strict";

  document.addEventListener("DOMContentLoaded", function() {
    var god = document.getElementById("god");

    document
      .getElementById("cheese-cart")
      .addEventListener("submit", estimateTotal);

    var btnEstimate = document.getElementById("btn-estimate");

    // Extra credit - fix the behavior of the toggle estimate button
    toggleEstimate();

    god.addEventListener("change", toggleEstimate);

    function toggleEstimate() {
      if (god.value === "") {
        btnEstimate.disabled = true;
      } else {
        btnEstimate.disabled = false;
      }
    }

    function estimateTotal(event) {
      event.preventDefault();

      if (god.value === "") {
        alert("Didja pray or not?");

        god.focus();

        return;
      }

      var ratBash = parseInt(document.getElementById("rats").value, 10) || 0,
        godPray = god.value;


      var totalRatCheese = 1.5 * ratBash;

      if (godPray === "no") {
        var godFactor = " and a lashing";
      } else{
        var godFactor = " and a blessing";
      }
           
      if (ratBash > 20){
        var estimate = "I don't believe ya bashed that many rats!"
      } else {
        estimate = totalRatCheese + " wedges" + godFactor;
      }

      document.getElementById("txt-estimate").value = estimate;

    }
  });
})();
