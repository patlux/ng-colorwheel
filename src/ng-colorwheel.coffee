(->
  null
  ### @ngInject ###
  ngColorwheelDirective = ()->

    # ------------------------------------------------------------------------ #
    #    #LINK

    link = ( scope, elem, attrs, ngModelCtrl )->
      console.log 'init'





    # ------------------------------------------------------------------------ #
    #    #PROPERTIES

    directive =
      link: link
      restrict: 'EA'

    return directive





  # -------------------------------------------------------------------------- #
  #    #ANGULAR
  # -------------------------------------------------------------------------- #

  angular
    .module 'directive.ngColorwheel', []
    .directive 'ngColorwheel', ngColorwheelDirective

)()
