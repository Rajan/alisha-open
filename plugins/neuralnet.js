var request = require("request");
exports.neuralResponse = function(cb) {
  
  if (this.message.names) {
    var location = this.message.names[0]

    request.get("http://api.openweathermap.org/data/2.5/find?q="+"Bengaluru, India"+"&type=like&units=metric&mode=json", function(err, res, body) {
      var results = JSON.parse(body);
      if (results.list.length != 0) {
        console.log(JSON.stringify(results.list, null, 2))
        cb(null, "It is " + results.list[0]['weather'][0]['description']);  
      } else {
        cb(null, "I'm not near a window.");
      }
    });
  } else {
    cb(null, "I'm not near a window.");
  }
}