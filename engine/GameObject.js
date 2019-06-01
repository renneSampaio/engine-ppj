class GameObject {
    constructor() {
        this.transform = new Transform(this, 0, 0);
        this.components = [this.transform];
    }

    addComponent(component) {
        this.components.push(component);
        return this;
    }

    start() {
    }

    update(delta) {
        for (let comp of this.components) {
            comp.update(delta);
        }
    }

    render(ctx) {
        for (let comp of this.components) {
            comp.render(ctx);
        }
    }
}