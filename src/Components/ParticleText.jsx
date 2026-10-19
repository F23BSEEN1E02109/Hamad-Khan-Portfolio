import React, { useEffect, useRef } from "react";

class Particle {
  constructor(x, y, size, color, dispersion, returnSpd) {
    this.x = x + (Math.random() - 0.5) * 10;
    this.y = y + (Math.random() - 0.5) * 10;
    this.originX = x;
    this.originY = y;
    this.vx = (Math.random() - 0.5) * 5;
    this.vy = (Math.random() - 0.5) * 5;
    this.size = size;
    this.color = color;
    this.dispersion = dispersion;
    this.returnSpd = returnSpd;
  }

  update(mouseX, mouseY) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    const radius = 120;

    if (distance < radius && mouseX !== -1000 && mouseY !== -1000) {
      const force = (radius - distance) / radius;
      this.vx -= (dx / distance) * force * this.dispersion;
      this.vy -= (dy / distance) * force * this.dispersion;
    }

    this.vx += (this.originX - this.x) * this.returnSpd;
    this.vy += (this.originY - this.y) * this.returnSpd;
    this.vx *= 0.85;
    this.vy *= 0.85;

    const distToOrigin = Math.hypot(this.x - this.originX, this.y - this.originY);
    if (distToOrigin < 1 && Math.random() > 0.95) {
      this.vx += (Math.random() - 0.5) * 0.2;
      this.vy += (Math.random() - 0.5) * 0.2;
    }

    this.x += this.vx;
    this.y += this.vy;
  }

  draw(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

/**
 * lines = [
 *   { size, weight, lh, spacing?, segments: [{ text, color }] }
 * ]
 */
function ParticleText({
  lines,
  particleSize = 1.4,
  particleDensity = 3,
  dispersionStrength = 15,
  returnSpeed = 0.08,
  className = "",
}) {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    let rafId = 0;
    let cancelled = false;
    let particles = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let W = 0;
    let H = 0;

    const init = () => {
      const container = containerRef.current;
      if (!container) return;
      W = container.clientWidth;
      H = container.clientHeight;
      if (!W || !H) return;

      const dpr = window.devicePixelRatio || 1;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, W, H);

      const family = getComputedStyle(container).fontFamily || "sans-serif";
      const align = window.innerWidth >= 1024 ? "left" : "center";

      ctx.textAlign = "left";
      ctx.textBaseline = "middle";

      const setFont = (line, scale) => {
        ctx.font = `${line.weight} ${line.size * scale}px ${family}`;
        if ("letterSpacing" in ctx) ctx.letterSpacing = line.spacing || "0px";
      };
      const measureSeg = (line, seg, scale) => {
        setFont(line, scale);
        return ctx.measureText(seg.text).width;
      };
      const measureLine = (line, scale) =>
        line.segments.reduce((sum, s) => sum + measureSeg(line, s, scale), 0);

      // Screen choti ho to text ko scale down karo
      const maxWidth = Math.max(...lines.map((l) => measureLine(l, 1)));
      const scale = Math.min(1, (W - 8) / maxWidth);

      const totalH = lines.reduce((sum, l) => sum + l.size * l.lh * scale, 0);
      let top = (H - totalH) / 2;

      lines.forEach((line) => {
        const lineH = line.size * line.lh * scale;
        const y = top + lineH / 2;
        const w = measureLine(line, scale);
        let x = align === "left" ? 4 : (W - w) / 2;

        line.segments.forEach((seg) => {
          setFont(line, scale);
          ctx.fillStyle = seg.color;
          ctx.fillText(seg.text, x, y);
          x += measureSeg(line, seg, scale);
        });
        top += lineH;
      });

      const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
      particles = [];
      const step = Math.max(1, Math.floor(particleDensity * dpr));

      for (let py = 0; py < img.height; py += step) {
        for (let px = 0; px < img.width; px += step) {
          const i = (py * img.width + px) * 4;
          if (img.data[i + 3] > 128) {
            const color = `rgb(${img.data[i]},${img.data[i + 1]},${img.data[i + 2]})`;
            particles.push(
              new Particle(px / dpr, py / dpr, particleSize, color, dispersionStrength, returnSpeed)
            );
          }
        }
      }
      ctx.clearRect(0, 0, W, H);
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.update(mouseX, mouseY);
        p.draw(ctx);
      }
      rafId = requestAnimationFrame(animate);
    };

    const setPos = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = clientX - rect.left;
      mouseY = clientY - rect.top;
    };
    const onMouseMove = (e) => setPos(e.clientX, e.clientY);
    const onTouch = (e) => {
      if (e.touches[0]) setPos(e.touches[0].clientX, e.touches[0].clientY);
    };
    const onLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    const resizeObserver = new ResizeObserver(() => init());
    if (containerRef.current) resizeObserver.observe(containerRef.current);

    // Font load hone ke baad start karo
    const ready = document.fonts ? document.fonts.ready : Promise.resolve();
    ready.then(() => {
      if (cancelled) return;
      setTimeout(() => {
        if (cancelled) return;
        init();
        animate();
      }, 50);
    });

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onLeave);
    canvas.addEventListener("touchstart", onTouch, { passive: true });
    canvas.addEventListener("touchmove", onTouch, { passive: true });
    canvas.addEventListener("touchend", onLeave);

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onLeave);
      canvas.removeEventListener("touchstart", onTouch);
      canvas.removeEventListener("touchmove", onTouch);
      canvas.removeEventListener("touchend", onLeave);
    };
  }, [lines, particleSize, particleDensity, dispersionStrength, returnSpeed]);

  return (
    <div ref={containerRef} className={`w-full h-full relative ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}

export default ParticleText;