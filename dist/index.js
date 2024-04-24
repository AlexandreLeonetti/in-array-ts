// Rewrite the function using TypeScript syntax
export function inArray(arr, val) {
    arr = arr || [];
    const len = arr.length;
    let i;
    for (i = 0; i < len; i++) {
        if (arr[i] === val) {
            return true;
        }
    }
    return false;
}
