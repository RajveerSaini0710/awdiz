function moveCrane() {
    const armElement = document.querySelector('.arm');
    const cabinElement = document.querySelector('.cabin');
  
    // Animation properties
    const armSpeed = 2; // Arm movement speed (pixels per frame)
    const cabinSpeed = 1; // Cabin movement speed (pixels per frame)
  
    let armPosition = 0; // Initial arm position
    let cabinPosition = 0; // Initial cabin position
  
    function animate() {
      armPosition += armSpeed;
      cabinPosition += cabinSpeed;
  
      // Apply new positions
      armElement.style.transform = `translateY(${armPosition}px)`;
      cabinElement.style.transform = `translateY(${cabinPosition}px)`;
  
      // Check if animation is complete
      if (armPosition < 200) {
        requestAnimationFrame(animate);
      }
    }
  
    // Start animation
    animate();
  }
  
  moveCrane();
  