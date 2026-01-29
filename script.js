document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('jake-btn');
    const container = document.getElementById('image-container');
    const body = document.body;

    const images = [
        'img1.jpg',
        'img2.jpg',
        'img3.jpg',
        'img4.jpg',
        'img5.jpg',
        'img6.jpg'
    ];

    btn.addEventListener('click', () => {
        if (!body.classList.contains('joyful')) {
            // 1. Transform Background
            body.classList.add('joyful');
            
            // 2. Change Text to "Jackie"
            btn.textContent = "Jiggu!!!";

            // 3. Create and Animate Images
            // We need to clear previous content just in case
            container.innerHTML = '';
            
            // Define positions relative to center - Spread out to avoid overlap
            const positions = [
                { top: '15%', left: '50%' }, // Top
                { top: '85%', left: '50%' }, // Bottom
                { top: '50%', left: '15%' }, // Left
                { top: '50%', left: '85%' }, // Right
                { top: '18%', left: '18%' }, // Top-Left Corner
                { top: '18%', left: '82%' }  // Top-Right Corner
            ];

            images.forEach((imgSrc, index) => {
                if (index >= positions.length) return;

                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = 'Joyful Image';
                img.classList.add('joy-img');
                
                container.appendChild(img);

                // Force reflow
                void img.offsetWidth;

                // Apply specific position destination
                img.style.top = positions[index].top;
                img.style.left = positions[index].left;
                
                img.classList.add('emerge');
            });

            // 4. Delayed Transition (15 seconds)
            setTimeout(() => {
                // Clear everything
                body.innerHTML = '';
                
                // Re-add background class if needed, or keep it on body
                // Create the text element
                const p = document.createElement('p');
                p.textContent = "I never thought of making plans for painting at H3, but I do know how to love and make cringe content.";
                p.classList.add('final-message');
                
                body.appendChild(p);
            }, 15000); // 15000 ms = 15 seconds
        }
    });
});
