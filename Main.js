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

	var setup = function (engine) {
		var obj = new GameObject();
		obj.addComponent(new Sprite(obj, "icon"))
		obj.addComponent(new MouseFollow(obj));

		var ctx = document.getElementById("gameCanvas").getContext("2d");

		engine.addObject(obj);
		window.requestAnimationFrame(engine.mainloop.bind(engine));
	};

	engine.onready = setup;



	//window.setInterval(setup, 2000);
}
