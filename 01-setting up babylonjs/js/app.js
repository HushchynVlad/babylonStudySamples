/// <reference path="babylon.2.1.d.ts" />

var BjsApp = BjsApp || {};

BjsApp.init = function(){
	console.log('hello Babylon!');
	
	//get the canvas
	var canvas_ = '<canvas id="renderCanvas"></canvas>';	
	var canvas = $('body')
				.append(canvas_);	
	//create a BabylonJS engine object
	var engine = new BABYLON.Engine(canvas, true);
	
	//create scene
	var scene = new BABYLON.Scene(engine);

	//let camera = new BABYLON.FreeCamera
};