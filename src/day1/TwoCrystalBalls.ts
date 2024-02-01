export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;
    for (; i < breaks.length; i += jumpAmount) {
        if (breaks[i] == true) {
            break;
        }
    }
    let j = i - jumpAmount;
    // for (let j = 0; j <= jumpAmount && j < breaks.length; ++j, ++i) {
    //     if (breaks[i] == true) {
    //         return i;
    //     }
    // }

    for (j; j <= jumpAmount && j < breaks.length; j++) {
        if (breaks[j] == true) {
            return i;
        }
    }

    return -1;
}
