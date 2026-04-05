export function startFluid(canvas: HTMLCanvasElement) {
  const gl = canvas.getContext('webgl');
  if (!gl) {
    console.error('WebGL not supported');
    return;
  }

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  gl.viewport(0, 0, canvas.width, canvas.height);

  // 初始化清屏为透明
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  const trails: { x: number; y: number; life: number }[] = [];

  window.addEventListener('mousemove', (e) => {
    trails.push({
      x: e.clientX / window.innerWidth,
      y: 1 - e.clientY / window.innerHeight,
      life: 1.0,
    });
  });

  function drawCircle(x: number, y: number, size: number, r: number, g: number, b: number, a: number) {
    const px = x * 2 - 1;
    const py = y * 2 - 1;

    gl.enable(gl.SCISSOR_TEST);
    gl.scissor(
      x * gl.canvas.width - size / 2,
      y * gl.canvas.height - size / 2,
      size,
      size
    );
    gl.clearColor(r, g, b, a);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.disable(gl.SCISSOR_TEST);
  }

  function animate() {
    trails.forEach((trail) => {
      const r = 0.5 + 0.5 * Math.sin(Date.now() * 0.002 + trail.x * 10);
      const g = 0.5 + 0.5 * Math.cos(Date.now() * 0.003 + trail.y * 10);
      const b = 1.0;
      drawCircle(trail.x, trail.y, 20, r, g, b, trail.life);
      trail.life -= 0.02;
    });

    for (let i = trails.length - 1; i >= 0; i--) {
      if (trails[i].life <= 0) {
        trails.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}
