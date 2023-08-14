// Unknown 타입
function unknownExam(){
    let a : unknown = 1;
    let b : unknown = "hello";
    let c : unknown = true;
    let d : unknown = null;
    let e : unknown = undefined;

    let unknownVar : unknown;
    let num : number = unknownVar;
    let str : string = unknownVar;
    let bool : boolean = unknownVar;

}

// Never 타입
function neverExam() {

    function neverFunc(): never {
        while(true) {}
        
    }
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    let never1: never1 = 10;
    let never2: never2 = "hello";
}

function voidExam() {
    function voidFunc(): void {
        console.log("hi");
    
    }
    let voidVar: void = undefined;

}

//any 타입 (치트키)

function anyExam(){
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;

    anyVar = unknownVar;
    undefinedVar = anyVar;
    neverVar = anyVar;
}

