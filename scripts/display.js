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
  
  // Position the mango near the click
  // We need to account for scroll position
  const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
  const scrollY = window.pageYOffset || document.documentElement.scrollTop;
  
  // Set the absolute position relative to the document, not just the viewport
  mango.style.left = `${x + offsetX + scrollX}px`;
  mango.style.top = `${y + scrollY}px`;
  
  // Add to the document
  document.body.appendChild(mango);
  
  // Remove after animation completes
  setTimeout(() => {
    document.body.removeChild(mango);
  }, 1000);
}
