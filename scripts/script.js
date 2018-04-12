$(document).ready(function() {

  // Fetch data from API
  function getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(data) {

      // Insert qoute text
      $("#quote").text('"' + data.quoteText + '"');

      if ((data.quoteAuthor).length > 1) {
        // If an author is provided, prepend with a dash
        $("#author").text(" - " + data.quoteAuthor);
      } else {
        // Else attribte quote to "Unkown"
        $("#author").text(" - Unknown");
      }
    });
  }

  // Generate a new quote by calling getQuote()
  $("#new").on("click", function() {
    getQuote();
  });

  // Send current quote to Twitter account
  $("#tweet").on("click", function() {
    var tweetQuote = $("#quote").text() + $("#author").text();
    window.open("https://twitter.com/intent/tweet?text=" + tweetQuote);
  });

  // Initial API call when page loads
  getQuote();

});
