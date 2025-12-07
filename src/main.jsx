// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Floating dot: smooth motion, button highlighting, no scroll scaling
let dotX = window.innerWidth * 0.1;
let dotY = window.innerHeight * 0.2;
let targetX = dotX;
let targetY = dotY;
let isHighlighting = false;
let nearestButton = null;
let prevButton = null;

// keep a modest movement center when idle
targetX = dotX;
targetY = dotY;

window.addEventListener("resize", () => {
  // keep dot inside viewport
  dotX = Math.min(dotX, window.innerWidth);
  dotY = Math.min(dotY, window.innerHeight);
  targetX = Math.min(targetX, window.innerWidth);
  targetY = Math.min(targetY, window.innerHeight);
});

// Animation loop: pick nearest visible button relative to dot, move smoothly
function animateDot() {
  // find visible candidate buttons
  const btnNodes = Array.from(
    document.querySelectorAll("button, a.project-button, a.cta-button")
  );
  let closest = null;
  let closestDist = Infinity;

  // Use current dot position (dotX/dotY) as reference
  btnNodes.forEach((btn) => {
    const rect = btn.getBoundingClientRect();
    // ignore fully off-screen buttons
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    const dx = btnCenterX - dotX;
    const dy = btnCenterY - dotY;
    const dist = Math.hypot(dx, dy);
    if (dist < closestDist) {
      closestDist = dist;
      closest = btn;
    }
  });

  // If a nearby button was found and within reasonable reach, target it
  const MAX_TARGET_DISTANCE =
    Math.max(window.innerWidth, window.innerHeight) * 0.75;
  if (closest && closestDist < MAX_TARGET_DISTANCE) {
    const rect = closest.getBoundingClientRect();
    targetX = rect.left + rect.width / 2;
    targetY = rect.top + rect.height / 2;
    isHighlighting = true;
    nearestButton = closest;
    document.documentElement.style.setProperty("--dot-highlight", "1");
  } else {
    isHighlighting = false;
    nearestButton = null;
    document.documentElement.style.setProperty("--dot-highlight", "0");
  }

  // Movement smoothing (gentle interpolation)
  if (isHighlighting && nearestButton) {
    // faster interpolation when heading to a button, but still smooth
    dotX += (targetX - dotX) * 0.16;
    dotY += (targetY - dotY) * 0.16;
  } else {
    // gentle random wander with small amplitude for smooth motion
    targetX += (Math.random() - 0.5) * 40;
    targetY += (Math.random() - 0.5) * 30;
    targetX = Math.max(8, Math.min(window.innerWidth - 8, targetX));
    targetY = Math.max(8, Math.min(window.innerHeight - 8, targetY));
    dotX += (targetX - dotX) * 0.06;
    dotY += (targetY - dotY) * 0.06;
  }

  // update CSS vars used by body::after
  document.documentElement.style.setProperty("--dot-x", `${dotX}px`);
  document.documentElement.style.setProperty("--dot-y", `${dotY}px`);

  // Hover triggering: toggle .dot-hover when dot is close to the button center
  if (nearestButton) {
    const rect = nearestButton.getBoundingClientRect();
    const btnCenterX = rect.left + rect.width / 2;
    const btnCenterY = rect.top + rect.height / 2;
    const distToCenter = Math.hypot(dotX - btnCenterX, dotY - btnCenterY);

    // threshold scaled with button size; tuned for reliable triggering
    const threshold = Math.max(
      14,
      Math.min(60, Math.min(rect.width, rect.height) * 0.45)
    );

    if (distToCenter < threshold) {
      if (prevButton && prevButton !== nearestButton) {
        prevButton.classList.remove("dot-hover");
      }
      if (!nearestButton.classList.contains("dot-hover")) {
        nearestButton.classList.add("dot-hover");
      }
      prevButton = nearestButton;
    } else {
      if (prevButton) {
        prevButton.classList.remove("dot-hover");
        prevButton = null;
      }
    }
  } else {
    if (prevButton) {
      prevButton.classList.remove("dot-hover");
      prevButton = null;
    }
  }

  requestAnimationFrame(animateDot);
}

animateDot();
