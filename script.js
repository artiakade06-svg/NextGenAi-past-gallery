// ---------- Modal ----------

function openModal(src) {
    document.getElementById("modal-img").src = src;
    document.getElementById("modal").classList.add("active");
}

function closeModal() {
    document.getElementById("modal").classList.remove("active");
}

document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") closeModal();
});


// ---------- Stars Animation ----------

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let W, H, stars;

function resize() {

    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;

    const count = Math.floor(Math.min(170, Math.max(90, W / 12)));

    stars = Array.from({ length: count }).map(() => ({
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 1.6 + 0.2,
        a: Math.random() * 0.5 + 0.12,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25
    }));

}

window.addEventListener("resize", resize);
resize();

function loop() {

    ctx.clearRect(0, 0, W, H);

    for (const s of stars) {

        s.x += s.vx;
        s.y += s.vy;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.a})`;
        ctx.fill();

    }

    requestAnimationFrame(loop);

}

loop();