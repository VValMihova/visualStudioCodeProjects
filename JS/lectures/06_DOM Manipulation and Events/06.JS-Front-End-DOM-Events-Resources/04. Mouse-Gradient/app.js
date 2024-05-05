function attachGradientEvents() {
  const gradient = document.querySelector("#gradient");
  const result = document.querySelector("#result");

  gradient.addEventListener("mousemove", gradientMove);
  gradient.addEventListener("mouseout", gradientOut);

  function gradientMove(event) {
    // Calculate the relative position of the mouse cursor within the 'gradient' element
    // by dividing the horizontal offset of the cursor by the total width
    let power = event.offsetX / (event.target.clientWidth - 1);
    // Convert the relative position to a percentage by multiplying it with 100
    power = Math.trunc(power * 100);
    result.textContent = power + "%";
  }

  function gradientOut(event) {
    result.textContent = "";
  }
}
