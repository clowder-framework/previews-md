(function($, Configuration) {
  // Preserve these in our current scope
  var initialTab = Configuration.tab;
  var initialID = Configuration.id;
  var initialPreviewer = Configuration.previewer;

  console.log("markdown previewer for " + initialID);

  // add div for markdown
  $(initialTab).append("<div id=\"markdown\"></div>");

  // load the script
  $.getScript("https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js")
  .then(function () {
    // load the text
    $.get(Configuration.url, function(text) {
      var converter = new showdown.Converter(),
          html      = converter.makeHtml(text);
      $("#markdown").append(html);
    });
  })

}(jQuery, Configuration));

