// -------------------------------------------------------------------------- \\
// EXAMPLE                                                                    \\
// -------------------------------------------------------------------------- \\



// APP CONTROLLER

appController = function() {
  vm = this;

  // ----------------------------- \\

  init = function() {

    vm.color = "#808080";
    vm.colorChanged = colorChanged;

    vm.colorHistory = []

  }



  colorChanged = function() {
    console.log("color changed:", vm.color );
    vm.colorHistory.push( vm.color );
  }



  // ----------------------------- \\
  init();
  return;
}





// -------------------------------------------------------------------------- \\
// ANGULAR MODULE

angular
  .module( 'ngColorwheelExample', [ 'directive.ngColorwheel' ] )
  .controller('AppController', appController)
