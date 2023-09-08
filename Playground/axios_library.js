const axios = require("axios");

// Make a request for a user with a given ID
axios
  .get("https://sozluk.gov.tr/gts?ara=kelime")
  .then(function (response) {
    // handle success
    console.log(response.data[0]["anlamlarListe"][0]["anlam"]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
