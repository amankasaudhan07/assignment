const images = document.querySelectorAll('.hero-image');
const textLines = document.querySelectorAll('.text-line');

images.forEach(image => {
    image.addEventListener('mouseover', () => {
        images.forEach(img => {
            if (img !== image) {
                img.classList.add('hide-image');
            }
        });
        image.classList.remove('hide-image');

        // Change text color
        textLines.forEach(line => {
            line.style.color = '#212121'; // Change this color as needed
        });

        // Add mousemove effect
        const mouseMoveHandler = (event) => {
            const { clientX, clientY } = event;
            const { left, top, width, height } = image.getBoundingClientRect();
            const x = ((clientX - left) / width) * 10- 5; // Increased sensitivity
            const y = ((clientY - top) / height) * 10-5; // Increased sensitivity
            const scale = 1.4; // Increased scale for effect
            image.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        };

        // Attach the mousemove event listener
        image.addEventListener('mousemove', mouseMoveHandler);

        // Remove mousemove listener on mouseout
        image.addEventListener('mouseout', () => {
            images.forEach(img => {
                img.classList.remove('hide-image');
            });
            textLines.forEach(line => {
                line.style.color = 'white'; // Reset text color
            });
            image.style.transform = 'translate(0, 0) scale(1)'; // Reset transform
            image.removeEventListener('mousemove', mouseMoveHandler); // Clean up
        });
    });
});





