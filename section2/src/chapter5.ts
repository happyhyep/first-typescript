enum Role {
    ADMIN = 0,
    USER = 1,
    GUEST = 2,
}

const user1 = {
    name: "정혜인",
    role: Role.ADMIN //0: 관리자
}

const user2 = {
    name: "홍길동",
    role: Role.USER //1: 일반 유저
}

const user3 = {
    name: "아무개",
    role: Role.GUEST //2: 게스트
}


