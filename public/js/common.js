requirejs.config({
  baseUrl: '/js',
  paths: {
    'jquery': 'lib/jquery'
  }
});

require(['jquery'], function ($) {
  $('body').append("<div>HELLO</div>");
});
