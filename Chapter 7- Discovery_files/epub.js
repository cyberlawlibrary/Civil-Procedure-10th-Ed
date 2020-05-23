/*
 * Casebook Connect ePub Javascript Components
 * Version 1.0
 * 
 * epub.js (EPub)
 * module for top level page functions
 * functions eveloped as namespaced object
 * 
 * Dependencies: 
 *    jquery JS
 *
 * All Rights Reserved  
 */


//set up namespaces so we can use these without collison
var EPub = EPub || {};

EPub = function() {

  //private properties

  //private methods
  var openDMLink = function(link) {
    method = "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
      var body = document.getElementsByTagName('body')[0];
      form.setAttribute("method", method);
      form.setAttribute("action", "https://www.dukeminier-property.com/loginCC.asp");
      form.setAttribute("target", "dukWindow");
      //username for dukeminier
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "u");
      hiddenField.setAttribute("value", "dukeminier");
      form.appendChild(hiddenField);

      //password for dukeminier
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "p");
      hiddenField.setAttribute("value", "book2k9");
      form.appendChild(hiddenField);

      //redirect URL
      var hiddenField = document.createElement("input");
      hiddenField.setAttribute("type", "hidden");
      hiddenField.setAttribute("name", "url");
      hiddenField.setAttribute("value", link);
      form.appendChild(hiddenField);
      body.appendChild(form);
     //document.body.appendChild(form);
    form.submit();
  }

  var showBCVideo = function (id) {
      ShowVideo(id);
  }

  //make private methods public
  var oPublic = {
    openDMLink: openDMLink,
    showBCVideo: showBCVideo
  };

  return oPublic;
}();

