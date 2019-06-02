class Utils {

    static colorRect(topLeftX, topLeftY, boxWidth, boxHeight, fillColor) {
        Engine.ctx.fillStyle = fillColor;
        Engine.ctx.fillRect(topLeftX, topLeftY, boxWidth, boxHeight);
    }

    static colorCircle(centerX, centerY, radius, fillColor) {
        Engine.ctx.fillStyle = fillColor;
        Engine.ctx.beginPath();
        Engine.ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, true);
        Engine.ctx.fill();
    }

    static colorText(showWords, textX, textY, fillColor) {
        Engine.ctx.fillStyle = fillColor;
        Engine.ctx.font = "30px serif";
        Engine.ctx.fillText(showWords, textX, textY);
    }

    static clearScreen() {
        Utils.colorRect(0, 0, Engine.canvas.width, Engine.canvas.height, 'black');
    }
}