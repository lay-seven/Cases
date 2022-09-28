/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let myGas = 0, flag = 0, maxGas = 0;
    let gasMap = new Map();
    for (let i = 0; i < gas.length; i++) {
        myGas = myGas + gas[i] - cost[i];
        if (myGas >= 0) {
            if (myGas > maxGas) {
                maxGas = myGas;
            }
            gasMap.set(myGas, flag);
        } else {
            flag = i + 1;
        }
    }
    if (myGas < 0) return -1;
    return gasMap.get(maxGas);
};

let result = canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
console.log(result);