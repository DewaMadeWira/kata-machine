export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let hi = haystack.length;

    do {
        let m = Math.floor(low + (hi - low) / 2);
        let v = haystack[m];

        if (v === needle) {
            return true;
        } else if (v > needle) {
            hi = m;
        } else {
            low = m + 1;
        }
    } while (low < hi);
    return false;
}
