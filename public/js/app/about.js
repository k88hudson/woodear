'use strict';

define([
  'jquery',
  'app/lib'
],

function ($, lib) {
  $(function() {
    lib.getBody().append("<div>about</div>");
  });
});
