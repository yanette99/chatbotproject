function returnTime(){
  var now = new Date(Date.now());
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var timeString = hours + ":" + minutes;
  return timeString;

}

var responce = {
  "hello": "Hello there :) ",
  "hows your day" : "My day is great",
  "have you ever seen vampire diaries" : "Yess its lit",
  "how old are you" : "I am 15 years old",
  "whats your favorite color" : "My favorite color is maroon",
  "whats your name" : "My name is Stefan",
  "whats your favorite movie" : "Twilight",
  "whos your favorite singer" : "My favorite singer is ",
  "whats your favorite tv show" : "My favorite tv show is PLL",
  "whats your favorite song" : "Trust Issue - Drake",
  "what time is it" : returnTime()
}

function askQuestion() {
  var question = $("#input").val()
  $("#chat-area").prepend(question + "<br>");
  var answers = responce[question];
  $("#chat-area").prepend(answers + "<br>");

  if(answers == undefined) {

var fallback = ["I don't know what you are asking", "you are crazy", "why are you asking me this weirdo", "i don't know the answer to your question"];
var rand = Math.floor((Math.random() * fallback.length));
$("#chat-area").prepend(fallback[rand] + "<br>");


}


}
  $(document).keyup(function(event) {
    if (event.keyCode == 13) {
         askQuestion();
    }
});
