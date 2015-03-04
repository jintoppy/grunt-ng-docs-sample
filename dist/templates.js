angular.module('templates-main', ['partials/directive.tpl.html']);

angular.module("partials/directive.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/directive.tpl.html",
    "<div style=\"margin:10px; padding: 10px; border: 2px border #000\" ng-show=\"param1\">\n" +
    "\n" +
    "This is a sample directive <br/>\n" +
    "This displays param1 <b>{{param1}}</b> <br/>\n" +
    "This displays param2 <b>{{param2}}</b><br/>\n" +
    "	\n" +
    "</div>\n" +
    "");
}]);
