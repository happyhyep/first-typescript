let user: {
    id?: number;
    name: string;
} = {
    id: 1,
    name: "정헤인",
};


user = {
    name: "홍길동",
}


let config: {
    readonly apiKey: string;
} = {
    apiKey: "abcdefg"
}

config.apiKey = "hacked";