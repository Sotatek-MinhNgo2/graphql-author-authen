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
const refresh_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

const array_access_token = [
    "cSrn4qCSZ1__eP_h_hRmsGaIIPVsOMqxYhi3XAZHxEk",
    "4FUI91szHT0XJFXjLFN2paE0QW8tIJP1_sVYUgrJtvI",
    "xpL96gabit4k37pRFMSvzD-M4EGTjtjIN8ZjiFDZBlc",
    "fMeii3zFvLrJOmxqo5HyAzAZG9a5ggljGhOsg0tvwZY",
    "joMkYVG9EKBSYucOYNMZiCDjlI_54ZLWUpwiptCqG68",
    "rzOlfMs5jv7gCtduZLTOa7PRKHyElCvajrZqhDMc_to",
    "ukg6e-Ta4XLsJX9hqnMT4Gw1yARYH8wMKQaW1sZl38Q",
    "VBOkb0wHYwzygB5Yab2ch6GPZp0L7wumjRC-AwXVJpk",
    "pCMbGPhIrgK6kBZotvl9u2j9IorVPvtaV6K9HOhQKbY",
    "cuiTLQAp5gx4thCpS75fdJG_ZUwMmLAQM3ofHFNd4aA",
]

const array_refresh_token = [
    "tSFNEeH_YeJ2Etgzs6V18gLLamoksxnhi30vF6Edl00",
    "szk1B4LB0jLoesVRuig_ABJ-rjQi4jTV3hy2IICe7GA",
    "jNEdbrnFODBz-TCe962Tsj3YptM4pzngc3XReypurTU",
    "4IiW3lPtmA-nCJ2INazay2O-T5D7-wgsUOICv0h9tXI",
    "g5RlfLsNO80UNVxN-ZzFoZgGxi-_0VmgGOg6bT0sSbg",
    "fxPV5RJp0xdwzi1mnvS1LaOdB5wgDclgPmshMe9gNsU",
    "jIj-Q9M7mfzPp0Prl4ZBxBz3-aGkCMnaYHICMRIzkeI",
    "JArM9qa6VeOeiFtMB_wat6-8wN9WSK1rcgmGsuaESAg",
    "_7QrF8b3LhEQhnRyefGy6GGU5r73-vPvJRvwDbP0L4Y",
    "ZWOkU1o-orXkP58PbF4Atut-so065S0uPCBo3DXKWqw",
]

module.exports = {
    books,
    authors,
    access_token,
    private_key,
    refresh_token,
    array_access_token,
    array_refresh_token,
}