$(document).ready(function() {

  function getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {
      $("#quote").text('"' + data.quoteText + '"');
      if ((data.quoteAuthor).length > 1) {
        $("#author").text(" - " + data.quoteAuthor);
      } else {
        $("#author").text(" - Unknown");
      }
    });
  }

  $("#new").on("click", function() {
    getQuote();
  });

  $("#tweet").on("click", function() {
    var tweetQuote = $("#quote").text() + $("#author").text();
    window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
  });
  
  getQuote();
});
