export function startRipple(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  let ripples: {
    x: number;
    y: number;
    radius: number;
    alpha: number;
    hue: number;
  }[] = [];

window.addEventListener('mousemove', (e) => {
  ripples.push({
    x: e.clientX,
    y: e.clientY,
    radius: 0,
    alpha: 1.0,
    hue: Math.random() * 360,
  });
});

  function animate() {
  //   ripples.push({
  //   x: Math.random() * canvas.width,
  //   y: Math.random() * canvas.height,
  //   radius: 0,
  //   alpha: 1.0,
  //   hue: Math.random() * 360,
  // });
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ripples.forEach((ripple) => {
      ctx.beginPath();
      ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI);
      
      // ctx.strokeStyle = `rgba(238, 169, 169, ${ripple.alpha * 0.2})`; 
      // ctx.lineWidth = 2;
      // ctx.shadowColor = `rgba(238, 169, 169, ${ripple.alpha * 60})`; 
      // ctx.shadowBlur = 10;

      ctx.strokeStyle = `rgba(157, 116, 195, ${ripple.alpha * 0.2})`; 
      ctx.lineWidth = 2;
      ctx.shadowColor = `rgba(157, 116, 195, ${ripple.alpha * 60})`; 
      ctx.shadowBlur = 10;
        
      ctx.stroke();

      ripple.radius += 1.5;
      ripple.alpha -= 0.015;
    });

    ripples = ripples.filter((r) => r.alpha > 0);

    requestAnimationFrame(animate);
  }

  animate();
}
