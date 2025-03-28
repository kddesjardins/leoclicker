// Update all display elements
function updateDisplay() {
    // Update counters
    document.getElementById('counter').textContent = Math.floor(gameState.points);
    document.getElementById('pointsPerClick').textContent = gameState.pointsPerClick;
    document.getElementById('pointsPerSecond').textContent = gameState.pointsPerSecond;

    // Update upgrade costs
    document.getElementById('upgradeClickCost').textContent = calculateClickUpgradeCost();
    document.getElementById('upgradeAutoCost').textContent = calculateAutoClickerCost();

    // Disable buttons if not enough points
    document.getElementById('buyUpgradeClick').disabled = gameState.points < calculateClickUpgradeCost();
    document.getElementById('buyUpgradeAuto').disabled = gameState.points < calculateAutoClickerCost();
}

// Create floating mango effect
function createFloatingMango(x, y) {
  const mango = document.createElement('div');
  mango.className = 'floating-mango';
  mango.textContent = '🥭';
  
  // Randomize position slightly for visual variety
  const offsetX = (Math.random() - 0.5) * 40;
  
  // Set the absolute position
  // Note: Fixed positioning is relative to the viewport
  mango.style.position = 'fixed'; // Changed from 'absolute' to 'fixed'
  mango.style.left = `${x + offsetX}px`;
  mango.style.top = `${y}px`;
  
  // Add to the document
  document.body.appendChild(mango);
  
  // Remove after animation completes
  setTimeout(() => {
    document.body.removeChild(mango);
  }, 1000);
}
