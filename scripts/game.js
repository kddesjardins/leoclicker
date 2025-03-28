// Game state
let gameState = {
    points: 0,
    pointsPerClick: 1,
    pointsPerSecond: 0,
    clickUpgradeLevel: 0,
    autoClickerCount: 0
};

// Main click function
function handleClick(event) {
  // Add points
  gameState.points += gameState.pointsPerClick;
  updateDisplay();
  
  // Get the button's position
  const buttonRect = event.currentTarget.getBoundingClientRect();
  
  // Use the center of the button as the starting point for the mango
  const centerX = buttonRect.left + buttonRect.width / 2;
  const centerY = buttonRect.top + buttonRect.height / 2;
  
  // Create a floating mango at the button's center position
  createFloatingMango(centerX, centerY);
}

// Auto-clicker function that runs every second
function autoClick() {
    // Only proceed if we have auto clickers
    if (gameState.pointsPerSecond > 0) {
        // Add points
        gameState.points += gameState.pointsPerSecond;
        updateDisplay();
        
        // Get the click button to create mangoes from its position
        const clickButton = document.getElementById('clickBtn');
        const buttonRect = clickButton.getBoundingClientRect();
        
        // Use the center of the button as the starting point for the mango
        const centerX = buttonRect.left + buttonRect.width / 2;
        const centerY = buttonRect.top + buttonRect.height / 2;
        
        // Create a floating mango for each point per second
        // But limit to showing max 5 mangoes at once to prevent visual overload
        const mangosToShow = Math.min(gameState.pointsPerSecond, 5);
        
        for (let i = 0; i < mangosToShow; i++) {
            // Slight delay for each mango to create a cascading effect
            setTimeout(() => {
                createFloatingMango(centerX, centerY);
            }, i * 100);
        }
    }
}

// Initialize the game
function initGame() {
    document.getElementById('clickBtn').addEventListener('click', handleClick);
    document.getElementById('buyUpgradeClick').addEventListener('click', buyClickUpgrade);
    document.getElementById('buyUpgradeAuto').addEventListener('click', buyAutoClicker);

    // Set up the auto-clicker interval
    setInterval(autoClick, 1000);

    // Initial display update
    updateDisplay();
}

// Start the game when page loads
window.onload = initGame;
