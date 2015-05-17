'use strict'

(->
  ngColorwheelDirective = ()->

    # ------------------------------------------------------------------------ #
    #    #LINK

    link = ( scope, elem, attrs, ngModelCtrl ) ->
      return unless Raphael?.colorwheel?

      # ---------------------------------------------------------------------- #
      # OPTIONS

      options = null

      try
        options = scope.$eval( attrs.ngColorwheel )
      catch
        console.log 'ERROR ON PARSING JSON-string:', attrs.ngColorwheel

      # DEFAULT OPTIONS
      options ?= {}
      options.size ?= 150

      # ---------------------------------------------------------------------- #

      cw = null

      init = () ->
        cw = Raphael.colorwheel( elem[0], options.size, options.segments )
        cw.color('#ff0000')

        ngModelCtrl.$formatters.push( toView )

        cw.onchange( updateModel )

      # ---------------------------------------------------------------------- #
      # FUNCTIONS

      toView = ( modelValue ) ->
        # update jquery-colorwheel
        console.log 'toView: ', modelValue
        cw.color( modelValue ) if modelValue?
        modelValue

      updateModel = ( color ) ->
        console.log 'updateModel: ', color
        ngModelCtrl.$setViewValue( color )


      # ---------------------------------------------------------------------- #
      init()
      return

    # ------------------------------------------------------------------------ #
    #    #PROPERTIES

    directive =
      link: link
      restrict: 'EA'
      require: '?ngModel'

    return directive





  # -------------------------------------------------------------------------- #
  #    #ANGULAR
  # -------------------------------------------------------------------------- #

  angular
    .module 'directive.ngColorwheel', []
    .directive 'ngColorwheel', ngColorwheelDirective

)()
