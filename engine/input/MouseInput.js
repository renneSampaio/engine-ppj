class MouseInput {
    constructor() {
        MouseInput.mouseEvent = null;
        MouseInput.x = 0;
        MouseInput.y = 0;
    }

    static getX() {
        return MouseInput.x;
    }

    static getY() {
        return MouseInput.y;
    }

    static onMouseMove(event) {
        var rect = Engine.canvas.getBoundingClientRect();
        var root = document.documentElement;

        MouseInput.x = event.clientX - rect.left - root.scrollLeft;
        MouseInput.y = event.clientY - rect.top - root.scrollTop;
    }
}