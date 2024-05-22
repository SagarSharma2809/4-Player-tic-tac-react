export function calculateWinner(arr) {
    const lines = [
        //horizontal lines
        [0, 1, 2, 3],
        [4, 5, 6, 7],
        [8, 9, 10, 11],
        [12, 13, 14, 15],

        //vertical lines
        [0, 4, 8, 12],
        [1, 5, 9, 13],
        [2, 6, 10, 14],
        [3, 7, 11, 15],

        //diagonals
        [0, 5, 10, 15],
        [3, 6, 9, 12]
    ]

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c, d] = lines[i];  //destructuring
        if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c] && arr[a] === arr[d])
            return arr[a];
    }

    return null;
}