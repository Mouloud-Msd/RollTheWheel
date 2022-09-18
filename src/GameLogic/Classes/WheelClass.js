class Wheel {
  constructor(x, y, radius, border, rotate = 0) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.border = border;
    this.rotate = rotate;
  }
  draw(ctx, playersColors) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius + this.border, 0, Math.PI * 2, false);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius / 10, 0, Math.PI * 2, false);
    ctx.fillStyle = "red";
    ctx.fill();
    ctx.closePath();

    playersColors.forEach((player, index) => {
      //DRAW_2 : DRAW EACH PARTITION
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.arc(
        this.x,
        this.y,
        this.radius,
        ((2 * Math.PI) / playersColors.length) * index, //first start from 0*2PI/5 and stop at 1*2PI/5
        ((2 * Math.PI) / playersColors.length) * (index + 1)
      );

      ctx.fillStyle = `${player.color}`; //fill each style with its color
      ctx.fill();
      ctx.closePath();
    });
  }
  update(ctx, WIDTH, HEIGHT, playersColors) {
    console.log("hope wheel update");
    ctx.save();
    ctx.translate(WIDTH / 2, HEIGHT / 2); //to center the context
    ctx.rotate(this.rotate);
    this.draw(ctx, playersColors);
    ctx.restore(); //to save and restore the arrow since we only instantiate it once
  }
}

export default Wheel;
