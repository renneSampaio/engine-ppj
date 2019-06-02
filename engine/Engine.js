textures = {};
numTextures = 0;
loadedTextures = 0;
preloaded = false;

class Engine {
    constructor() {
        this.onready = function (engine) { };

        this.canvas = Engine.canvas;
        this.ctx = Engine.ctx;

        this.delta = 0.0;
        this.lastFrameTimeMs = 0;
        this.timeStep = 1000 / 60;

        this.entities = [];

        this.canvas.addEventListener('mousemove', MouseInput.onMouseMove);
    }

    loadTexture(name, path) {
        let image = new Image();

        if (textures[name] == null)
            image.src = path;

        image.onload = (function () {
            var texture = new Texture(image);
            textures[name] = texture;
            loadedTextures += 1;
            console.log("loaded " + path);
            if (numTextures == loadedTextures) {
                preloaded = true;
            }
        });

    }

    loadTextures(texturesInputData) {
        numTextures = texturesInputData.length;
        for (let texData of texturesInputData) {
            let name = texData.name;
            let path = texData.path;

            this.loadTexture(name, path);
        }

        this.waitForAssets();
    }

    waitForAssets() {
        if (!preloaded) {
            window.setTimeout(this.waitForAssets.bind(this), 300);
            return;
        }

        this.onready(this);
    }

    mainloop(timeStamp) {
        if (timeStamp < this.lastFrameTimeMs + this.timeStep) {
            requestAnimationFrame(this.mainloop.bind(this));
            return;
        }

        this.delta += timeStamp - this.lastFrameTimeMs;
        this.lastFrameTimeMs = timeStamp;
        while (this.delta >= this.timeStep) {
            this.update(this.timeStep);
            this.delta -= this.timeStep;
        }

        this.render(this.ctx);
        requestAnimationFrame(this.mainloop.bind(this))
    }

    update(delta) {
        for (let obj of this.entities) {
            obj.update(delta);
        }
    }

    render(ctx) {
        Utils.clearScreen();
        for (let obj of this.entities) {
            obj.render(this.ctx);
        }
    }

    addObject(obj) {
        this.entities.push(obj);
    }
}

Engine.canvas = document.getElementById("gameCanvas");
Engine.ctx = Engine.canvas.getContext('2d');