const calculateNewCount = (aggregateCount, count, newCount = 1) => {
    let [round, newRound] = [
        Math.round(aggregateCount / count) - 1,
        Math.round(aggregateCount / newCount),
    ];
    return round == newRound
        ? newCount
        : calculateNewCount(aggregateCount, count, newCount + 1);
};
console.log(calculateNewCount(17, 14));
