document.addEventListener("DOMContentLoaded", function () {
  const pupils = document.querySelectorAll(".eye-pupil");

  // Function to handle fade-out and page transition
  function fadeOutAndRedirect() {
    document.body.classList.add("fade-out");
    setTimeout(function () {
      window.location.href = "/main";
    }, 2500);
  }
  document.addEventListener("click", fadeOutAndRedirect);

  document.addEventListener("mousemove", (event) => {
    const { clientX: mouseX, clientY: mouseY } = event;

    pupils.forEach((pupil) => {
      const { left, top, width, height } = pupil.getBoundingClientRect();
      const eyeCenterX = left + width / 2;
      const eyeCenterY = top + height / 2;

      const deltaX = mouseX - eyeCenterX;
      const deltaY = mouseY - eyeCenterY;
      const angle = Math.atan2(deltaY, deltaX);

      // Set the distance for tracking the mouse
      const trackDistance = Math.min(width / 2, height / 2);

      // Set the distance for the larger movable radius
      const moveDistance = Math.min(width / 2, height / 2) * 1.5;

      // Calculate pupil position for tracking the mouse
      const trackX = Math.cos(angle) * trackDistance;
      const trackY = Math.sin(angle) * trackDistance;

      // Calculate pupil position for the larger movable radius
      const moveX = Math.cos(angle) * moveDistance;
      const moveY = Math.sin(angle) * moveDistance;

      const finalX = (trackX + moveX) / 2;
      const finalY = (trackY + moveY) / 2;

      pupil.style.transform = `translate(${finalX}px, ${finalY}px)`;
    });
  });
});

/*
document.addEventListener("DOMContentLoaded", function () {
  const cursorLight = document.getElementById("cursor-light");

  document.addEventListener("mousemove", function (e) {
    // Set the position of the cursor light to the cursor position
    const x = e.clientX;
    const y = e.clientY;

    // Apply the new position directly
    cursorLight.style.left = x + "px";
    cursorLight.style.top = y + "px";
  });
});
*/
