module.exports = function(){
  return {
    page: function( view ) {
      return function( req, res ) {
        res.render( "page.html", { view: view });
      }
    },
    page2: function(view){
      return function(req,res){
        res.render("page2.html", {view:view});
      };
    }
  };
};
