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
