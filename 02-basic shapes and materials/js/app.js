
import babb from 'babylonjs';

var BjsApp = BjsApp || {};

BjsApp.init = function(){
	//get the canvas
	var canvas = document.getElementById('renderCanvas');
	
	var engine = new BABYLON.Engine(canvas, true);
	
	var scene = new BABYLON.Scene(engine);
	
	var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);
	camera.attachControl(canvas);
	
	var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(-1, 1, 0), scene);
	
	var mat_grass = new BABYLON.StandardMaterial('grass',scene);
	mat_grass.diffuseColor = new BABYLON.Color4(0.6,0.8,0.7,1);
	mat_grass.diffuseTexture = new BABYLON.Texture('assets/images/grass.png');

	var ground = BABYLON.Mesh.CreateGround('ground',20,20,1, scene);
	ground.material = mat_grass;

	//create a sphere
	var spheres =[
		BABYLON.Mesh.CreateSphere('sphereA', 6, 1, scene),
		BABYLON.Mesh.CreateSphere('sphereA', 8, 2, scene),
		BABYLON.Mesh.CreateSphere('sphereA', 12, 3, scene)
	];
	for(let i in spheres){
		let num = i-1;
		spheres[i].position = new BABYLON.Vector3(num*3,i*2+1,0);
		
		//sball.position.x = ball.
	}

	var cylinder = BABYLON.Mesh.CreateCylinder('testCy',3,2,0.1,16,3,scene);
	cylinder.position=new BABYLON.Vector3(3,2,0);	
	engine.runRenderLoop(function(){
		scene.render();
	});
	
};