// Upgrade costs
const CLICK_UPGRADE_BASE_COST = 10;
const AUTO_CLICKER_BASE_COST = 50;

// Calculate cost based on level (exponential growth)
function calculateClickUpgradeCost() {
    return Math.floor(CLICK_UPGRADE_BASE_COST * Math.pow(1.5, gameState.clickUpgradeLevel));
}

function calculateAutoClickerCost() {
    return Math.floor(AUTO_CLICKER_BASE_COST * Math.pow(1.2, gameState.autoClickerCount));
}

// Buy click upgrade
function buyClickUpgrade() {
    const cost = calculateClickUpgradeCost();

    if (gameState.points >= cost) {
        // Deduct points
        gameState.points -= cost;

        // Increase upgrade level
        gameState.clickUpgradeLevel++;

        // Increase points per click
        gameState.pointsPerClick++;

        // Update costs display
        document.getElementById('upgradeClickCost').textContent = calculateClickUpgradeCost();

        // Update game display
        updateDisplay();
    } else {
        alert("Not enough points!");
    }
}

// Buy auto clicker
function buyAutoClicker() {
    const cost = calculateAutoClickerCost();

    if (gameState.points >= cost) {
        // Deduct points
        gameState.points -= cost;

        // Increase auto clicker count
        gameState.autoClickerCount++;

        // Increase points per second
        gameState.pointsPerSecond++;

        // Update costs display
        document.getElementById('upgradeAutoCost').textContent = calculateAutoClickerCost();

        // Update game display
        updateDisplay();
    } else {
        alert("Not enough points!");
    }
}
