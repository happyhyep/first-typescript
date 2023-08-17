let num1: number = 10;
let num2: 10 = 10;

num1 = num2;


type Animal = {
    name: string;
    color: string;
};
type Dog = {
    name: string;
    color: string;
    breed: string;
}

let animal: Animal = {
    name: "기린",
    color: "yello",
}

let dog: Dog = {
    name: "돌돌이", 
    color: "brown",
    breed: "진도",
}

animal = dog;
dog = animal;
//animal이 dog보다 슈퍼타입
//추가 속성이 없는(조건이 적은) 객체가 슈퍼타입이 됨 