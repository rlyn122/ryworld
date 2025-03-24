document.addEventListener('DOMContentLoaded', function() {
    const cat = document.getElementById('cat1');
    
    // Load the sound
    const meowSound = new Audio('./sounds/meow.mp3'); // Replace with your actual sound file
    const hitmarkerSound = new Audio('./sounds/hitmarker.mp3')

    let clickCount= 0
    // Play sound on click
    cat.addEventListener('click', function() {
        hitmarkerSound.play()
        clickCount++
        console.log(clickCount)
        if (clickCount % 3 === 0) {
            meowSound.play(); // Play meow sound only on every 3rd click
        }

        // Get the position of the cat element
        const catRect = cat.getBoundingClientRect();

        // Get the click position relative to the cat element
        const clickX = event.clientX - catRect.left;
        const clickY = event.clientY - catRect.top;

        // Create hitmarker image
        const hitmarker = document.createElement('img');
        hitmarker.src = './imgs/hitmarker.png'; // Set the source of the image
        hitmarker.style.position = 'absolute';
        
        // Position the hitmarker relative to the cat's position
        hitmarker.style.left = `${catRect.left + clickX - 10}px`; // Adjust for center
        hitmarker.style.top = `${catRect.top + clickY - 10}px`; // Adjust for center
        hitmarker.style.width = '30px'; // Set the size of the hitmarker (optional)
        hitmarker.style.height = '30px'; // Set the size of the hitmarker (optional)
        hitmarker.style.pointerEvents = 'none'; // Prevent it from interfering with clicks
        hitmarker.style.zIndex = '9999';
        // Append the hitmarker image to the body
        document.body.appendChild(hitmarker);

        // Remove the hitmarker after 500ms
        setTimeout(() => {
            hitmarker.remove();
        }, 250);
    });

    // Sprite configuration
    const frameWidth = 250; // Width of each frame in your sprite sheet
    const frameHeight = 184; // Height of each frame
    const totalFramesPerDirection = 2; // Two frames for left, two for right
    const animationSpeed = 200; // Milliseconds between frame changes
    
    let positionX = 0;
    let positionY = 0;
    let section = 0; // 0 = bottom, 1 = left, 2 = top, 3 = right
    let currentFrame = 0;
    let lastFrameTime = 0;
    
    let movingRight = true; // Cat always moves in one direction

    // Get viewport dimensions
    let viewportWidth = window.innerWidth - frameWidth;
    let viewportHeight = window.innerHeight - frameHeight;
    
    // Update viewport dimensions when window is resized
    window.addEventListener('resize', function() {
        viewportWidth = window.innerWidth - frameWidth;
        viewportHeight = window.innerHeight - frameHeight;
    });

    function updateSpriteFrame(timestamp) {
        if (timestamp - lastFrameTime > animationSpeed) {
            currentFrame = (currentFrame + 1) % totalFramesPerDirection;
            
            // Select the correct frame range
            let spriteRow = movingRight ? 2 : 0; // 2 for right-facing, 0 for left-facing
            let spriteX = (spriteRow + currentFrame) * frameWidth;
            
            cat.style.backgroundPosition = `-${spriteX}px 0px`;
            lastFrameTime = timestamp;
        }
    }
    
    function moveCat(timestamp) {
        updateSpriteFrame(timestamp);
        
        switch(section) {
            case 0: // Moving from bottom to right
                if (positionX < viewportWidth) {
                    positionX += 2;
                    cat.style.left = positionX + 'px';
                    cat.style.bottom = '0px';
                    cat.style.transform = 'rotate(0deg)'; // Facing right
                } else {
                    section = 1; // Move up on the right side
                    positionY = 0;
                }
                break;
                
            case 1: // Moving from right to top
                if (positionY < viewportHeight) {
                    positionY += 2;
                    cat.style.left = viewportWidth + 'px';
                    cat.style.bottom = positionY + 'px';
                    cat.style.transform = 'rotate(-90deg)'; // Facing up
                } else {
                    section = 2; // Move left on the top side
                    positionX = viewportWidth;
                }
                break;
                
            case 2: // Moving from top to left
                if (positionX > 0) {
                    positionX -= 2;
                    cat.style.left = positionX + 'px';
                    cat.style.bottom = viewportHeight + 'px';
                    cat.style.transform = 'rotate(180deg)'; // Facing left
                } else {
                    section = 3; // Move down on the left side
                    positionY = viewportHeight;
                }
                break;
                
            case 3: // Moving from left to bottom
                if (positionY > 0) {
                    positionY -= 2;
                    cat.style.left = '0px';
                    cat.style.bottom = positionY + 'px';
                    cat.style.transform = 'rotate(90deg)'; // Facing down
                } else {
                    section = 0; // Restart loop at bottom
                    positionX = 0;
                }
                break;
        }
        
        
        requestAnimationFrame(moveCat);
    }
    
    // Start the animation
    requestAnimationFrame(moveCat);
});
