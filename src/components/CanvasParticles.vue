<template>
  <div class="relative">
    <canvas
      ref="canvas"
      class="fixed top-0 left-0 w-full h-full -z-10"
      style="z-index: -10"
    />

    <!-- Fade Top -->
    <div
      class="fixed top-0 left-0 w-full h-96 pointer-events-none z-0 bg-gradient-to-b from-black to-transparent"
    />

    <!-- Fade Bottom -->
    <div
      class="fixed bottom-0 left-0 w-full h-32 pointer-events-none z-10 bg-gradient-to-t from-black to-transparent"
    />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";

const canvas = ref(null);
let ctx, animationFrame;
let particles = [];
let mouse = { x: null, y: null };
let scrollY = 0;

const colors = ["#8b5cf6", "#3b82f6"]; // viola e blu

const handleScroll = () => {
  scrollY = window.scrollY * 0.3;
};

const resizeCanvas = () => {
  const c = canvas.value;
  const dpr = window.devicePixelRatio || 1;
  const width = window.innerWidth;
  const height = document.documentElement.scrollHeight;

  c.width = width * dpr;
  c.height = height * dpr;
  c.style.width = `${width}px`;
  c.style.height = `${height}px`;

  ctx.scale(dpr, dpr);
};

const createParticle = () => {
  const size = Math.random() * 2 + 1;
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size,
    color: colors[Math.floor(Math.random() * colors.length)],
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
  };
};

const initParticles = (count = 40) => {
  particles = [];
  for (let i = 0; i < count; i++) {
    particles.push(createParticle());
  }
};

const drawParticles = () => {
  const width = window.innerWidth;
  const height = document.documentElement.scrollHeight;

  ctx.clearRect(0, 0, width, height);

  particles.forEach((p, i) => {
    // repulsione
    const dx = mouse.x - p.x;
    const dy = mouse.y + scrollY - p.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < 100 && dist > 0) {
      const angle = Math.atan2(dy, dx);
      const force = (100 - dist) / 100;
      p.x -= Math.cos(angle) * force * 2;
      p.y -= Math.sin(angle) * force * 2;
    }

    // movimento
    p.x += p.speedX;
    p.y += p.speedY;

    // rimbalzo orizzontale
    if (p.x <= 0 || p.x >= width) {
      p.speedX *= -1;
      p.x = Math.max(0, Math.min(p.x, width));
    }

    // rimbalzo solo in alto
    if (p.y <= 0) {
      p.speedY *= -1;
      p.y = 0;
    }

    // disegna particella
    ctx.beginPath();
    ctx.arc(p.x, p.y - scrollY, p.size, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();

    // connessioni
    for (let j = i + 1; j < particles.length; j++) {
      const other = particles[j];
      const dx = p.x - other.x;
      const dy = p.y - other.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 100) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - scrollY);
        ctx.lineTo(other.x, other.y - scrollY);
        ctx.strokeStyle = `rgba(59, 120, 190, ${1 - distance / 100})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }
  });

  animationFrame = requestAnimationFrame(drawParticles);
};

const handleMouseMove = (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

onMounted(() => {
  const c = canvas.value;
  ctx = c.getContext("2d");

  resizeCanvas();
  initParticles();
  drawParticles();

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("mousemove", handleMouseMove);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(animationFrame);
  window.removeEventListener("resize", resizeCanvas);
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<style scoped>
canvas {
  pointer-events: none;
}
</style>
