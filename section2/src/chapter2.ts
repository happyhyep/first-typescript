let numArr: number[] = [1,2,3];

let strArr: string[] = ["hello", "im", "hyein"];

let boolArr: Array<boolean> = [true, false, true]

let multiArr: (number | string)[] = [1, "hello"];

let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
]

let tup1: [number, number] = [1, 2];
tup1 = [1,2,3];
tup1 = ["1", "2"];

let tup2: [number, string, boolean] = [1, "2", true];
tup2 = ["2", 1, true];
tup2 = [1];

const users: [string, number][] = [
    ["정혜인", 1],
    ["홍길동", 2],
    ["아무개", 3],
    ["김씨", 4],
    [5, "바보"]
]