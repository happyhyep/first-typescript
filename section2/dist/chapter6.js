let anyVar = 10;
anyVar = "hello";
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
let unknownVar;
unknownVar = "";
unknownVar = 1;
unknownVar = () => { };
if (typeof unknownVar === "number") {
    num = unknownVar;
}
class TEST {
    TEST() { }
    ;
    name() {
        console.log("test");
    }
    ;
}
let test = new TEST();
test.name();
export {};
