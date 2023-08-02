type User = {
    id: number;
    name: string;
    nickname: string;
    birth: string;
    bio: string;
    location: string;
}

let user: User = {
    id:1,
    name: "정혜인",
    nickname: "happyhyep",
    birth: "2002.10.01",
    bio: "안녕하세요",
    location: "포항",
};

let user2: User = {
    id:2,
    name: "홍길동",
    nickname: "abc",
    birth: "2002.01.01",
    bio: "안녕",
    location: "서울",
};
type CountryCodes = {
    [key: string] : number;
    Korea: number;
}

let countryCodes: CountryCodes = {
    Korea: 1,
    UnitedState: 2,
    UnitedKingdom: 3,
}

