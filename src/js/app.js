console.log("Powering up...")

window.TrelloPowerUp.initialize({
  "card-badges": function (t, opts) {
    return t
      .card("name")
      .get("name")
      .then(function (cardName) {
        console.log("We just loaded the card name for fun: " + cardName);
      });
  },
});
