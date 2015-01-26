/*
 * App.js
 */

var App = (function () {
  
  // Properties
  ///////////////////////////
  
  
  // Private Methods
  ///////////////////////////
  
  /*
   * An example private method.
   */
  var privateMethod = function () {};
  
  /*
   * 
   */
  var hideViews = function () {
    $('.view').hide();
  };
  
  /*
   * 
   */
  var showView = function (view) {
    hideViews();
    $('#'+view).show();
    window.location.hash = view;
    window.scrollTo(0, 0);
  };
  
  
  // Public Methods
  ///////////////////////////
  
  /*
   * An example public method.
   */
  var publicMethod = function () {};
  
  // Init
  ///////////////////////////
  
  // Set button bindings
  
  $('#btn-login').on('click', function () {
    showView('home');
  });
  
  $('#btn-request-orders-submit').on('click', function () {
    swal({
      title: "Orders submitted!",
      type: 'success',
      confirmButtonColor: '#084D8A'
    }, function () {
      showView('home');
    });
  });
  
  $('#btn-request-orders-cancel').on('click', function () {
    swal({
      title: "Cancel these orders?",
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes'
    }, function () {
      showView('home');
    });
  });
  
  $('#btn-modify-orders-submit').on('click', function () {
    swal({
      title: "Orders modified!",
      type: 'success',
      confirmButtonColor: '#084D8A'
    }, function () {
      showView('view-orders');
    });
  });
  
  $('#btn-modify-orders-cancel').on('click', function () {
    swal({
      title: "Cancel modifying these orders?",
      type: 'warning',
      showCancelButton: true,
      cancelButtonText: 'No',
      confirmButtonColor: '#DD6B55',
      confirmButtonText: 'Yes'
    }, function () {
      showView('view-orders');
    });
  });
  
  // Read hash from URL, show current view
  var hash = window.location.hash.replace('#', '');
  if (hash == '') {
    $('#login').show();
  } else {
    showView(hash);
  }
  
  // Reveal public methods
  return {
    publicMethod: publicMethod,
    showView: showView
  };
  
})();
