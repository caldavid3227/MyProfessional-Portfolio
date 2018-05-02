var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../home.html"));
  });

  // If no matching route is found default to home
  app.get("/contact", function(req, res) {
    res.sendFile(path.join(__dirname, "../contact.html"));
  });


  app.get("/portfoilo", function(req, res) {
    res.sendFile(path.join(__dirname, "../portfolio.html"));
  });

};
