module.exports = function(){
  return {
    page: function( view ) {
      return function( req, res ) {
        res.render( "page.html", { view: view });
      }
    }
  };
};
