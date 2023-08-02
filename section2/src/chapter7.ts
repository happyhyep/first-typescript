import { error } from "console";

function func1(): string {
    return "hello";
}

function func2(): undefined {
    console.log("hello");
}


function func3(): never {
    while (true) {}
}

function func4(): never {
    throw new Error();
}