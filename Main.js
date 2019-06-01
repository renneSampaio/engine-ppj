window.onload = function () {
	// var gameWorld = new World();
	// gameWorld.init();

	engine = new Engine();
	engine.loadTextures(
		[
			{
				name: "icon",
				path: "images/icon.png"
			}
		]
	);

	var setup = function () {
		var obj = new GameObject();
		obj
			.addComponent(new Sprite(obj, "icon"))
			.addComponent(new MouseFollow(obj));

		var ctx = document.getElementById("gameCanvas").getContext("2d");

		engine.addObject(obj);
		engine.mainloop();

	};

	engine.onready = setup;



	//window.setInterval(setup, 2000);
}
