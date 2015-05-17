// -------------------------------------------------------------------------- \\
// EXAMPLE                                                                    \\
// -------------------------------------------------------------------------- \\



// APP CONTROLLER

appController = function() {
  vm = this;

  // ----------------------------- \\

  init = function() {

    vm.color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    vm.colorChanged = colorChanged;

    vm.colorHistory = []

  }



  colorChanged = function() {
    console.log("color changed:", vm.color );
    vm.colorHistory.push( vm.color );

    if (vm.colorHistory.length > 50) {
      vm.colorHistory.shift()
    }
  }



  // ----------------------------- \\
  init();
  return;
}



// REVERSE LIST FILTER

reverseFilter = function() {
  return function(items) {
    console.log(items);
    return items.slice().reverse()
  }
}

// -------------------------------------------------------------------------- \\
// ANGULAR MODULE

angular
  .module( 'ngColorwheelExample', [ 'directive.ngColorwheel' ] )
  .controller('AppController', appController)
  .filter('reverse', reverseFilter);
