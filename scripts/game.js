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
  gameState.points += gameState.pointsPerClick;
  updateDisplay();
  
  // Create floating mango at button position
  const buttonRect = event.target.getBoundingClientRect();
  const x = buttonRect.left + buttonRect.width / 2;
  const y = buttonRect.top;
  createFloatingMango(x, y);
}

// Auto-clicker function that runs every second
function autoClick() {
    gameState.points += gameState.pointsPerSecond;
    updateDisplay();
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
