import GameManager from "../GameManager";

/**
 * @namespace removeCreep
 * @memberof module:Systems
 */

/**
 * @function removeCreep
 * @memberof module:Systems.removeCreep
 * 
 * @description Destroys a creep entitiy from a manager
 * 
 * @param {GameManager} manager GameManager instance to mutate
 * @param {number} id Id of the creep to destroy
 * 
 * @returns {Void}
 */
function removeCreep(manager, id){
    delete manager.gameState.creepDirectory[id];

    // Check if wave is over
    if(manager.gameState.playerLives <= 0){
        clearInterval(manager.tickInterval = undefined);
        manager.runtimeState.waveTime = 0;
        manager.runtimeState.isGameOver = true;
    }
    else if(manager.runtimeState.waveTime > manager.runtimeState.totalWaveTime && Object.keys(manager.gameState.creepDirectory).length === 0){
        clearInterval(manager.tickInterval);
        manager.runtimeState.isWaveRunning = false;
        manager.runtimeState.waveTime = 0;
        manager.endWave();
    }
}

export default removeCreep;