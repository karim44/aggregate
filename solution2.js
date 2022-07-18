const calculateNewCount = (aggregateCount, count) => {
    let [round, newRound, newCount] = [
        Math.round(aggregateCount / count) - 1,
        Math.round(aggregateCount / 1),
        1,
    ];
    while (round !== newRound) {
        newRound = Math.round(aggregateCount / newCount);
        newCount++;
    }
    return newCount - 1;
};
console.log(calculateNewCount(17, 14));
