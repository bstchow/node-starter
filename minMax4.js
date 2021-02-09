export const minMax4 = (arrayOf5) => {
    arrayOf5.sort((a, b) => a - b)
    const sum = arrayOf5.reduce((sum, next) => sum + next);
    const minSum4 = sum - arrayOf5[4];
    const maxSum4 = sum - arrayOf5[0];
    return [minSum4, maxSum4];
}
