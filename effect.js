document.querySelectorAll(".btn, .ripple-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    circle.style.width = circle.style.height = size + "px";
    circle.style.left = e.clientX - rect.left - size / 2 + "px";
    circle.style.top = e.clientY - rect.top - size / 2 + "px";
    circle.classList.add("ripple-effect");

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600);
  });
});
