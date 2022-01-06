const books = [
    {
        id: 1,
        name: 'Tat den',
        genre: 'Tieu thuyet',
        authorId: 1
    },
    {
        id: 2,
        name: 'Chi Pheo',
        genre: 'Truyen ngan',
        authorId: 2
    },
    {
        id: 3,
        name: 'So do',
        genre: 'Tieu thuyet',
        authorId: 3
    },
    {
        id: 4,
        name: 'Doi thua',
        genre: 'Truyen ngan',
        authorId: 2
    },
    {
        id: 5,
        name: 'Song mon',
        genre: 'Tieu thuyet',
        authorId: 2
    },
    {
        id: 6,
        name: 'Ky nghe lay Tay',
        genre: 'Phong su',
        authorId: 3
    },
]

const authors = [
    {
        id: 1,
        name: "Ngo Tat To",
        age: 127
    },
    {
        id: 2,
        name: "Nam Cao",
        age: 106
    },
    {
        id: 3,
        name: "Vu Trong Phung",
        age: 109
    },
]
const private_key = "hjjhjashdfjhqwuye";
const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTmdvIFR1YW4gTWluaCIsImlkIjoiNjFkNTRhNGY2Yjg4MjU4ZjJlMGNmYjI2In0.KNvGxAB8_OGcZd6nb7qSTvMKhiFr-uzE7KJ9xNOq9p8"

module.exports = {
    books,
    authors,
    access_token,
    private_key
}