const myButton = document.getElementById('myButton');
    
myButton.addEventListener('click', () => {
    alert('Button was clicked!');
});
  const hoverBox = document.getElementById('hoverBox');
  const coordinatesDisplay = document.getElementById('coordinates');

  hoverBox.addEventListener('mousemove', (event) => {
      const x = event.offsetX;
      const y = event.offsetY;

      coordinatesDisplay.textContent = `Mouse Coordinates: X=${x}, Y=${y}`;
  });
    const eventBox = document.getElementById('eventBox');

    eventBox.addEventListener('mouseover', () => {
        eventBox.textContent = "Mouse Entered!";
        eventBox.style.backgroundColor = "#87cefa";
    });

    eventBox.addEventListener('mouseout', () => {
        eventBox.textContent = "Mouse Out!";
        eventBox.style.backgroundColor = "#add8e6";
    });

    eventBox.addEventListener('mouseleave', () => {
        eventBox.textContent = "Mouse Left the Element!";
        eventBox.style.backgroundColor = "#add8e6";
    });

    eventBox.addEventListener('dblclick', () => {
        eventBox.textContent = "Double-clicked!";
        eventBox.style.backgroundColor = "#ffa07a";
    });
  
      const textInput = document.getElementById('textInput');
      const displayKey = document.getElementById('displayKey');
  
      textInput.addEventListener('keyup', (event) => {
          displayKey.textContent = `Key released: ${event.key}`;
      });
      