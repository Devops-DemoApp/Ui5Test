sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.dev.DemoProjectFiori.controller.View1", {
		onInit: function () {
  var foo= "Test Eslint";
		},
		function addOne(i) {
    |          ^
  2 |     if (i != NaN) {
  3 |         return i ++
  4 |     } else {   
	});
});