const { getAllBooks } = require('../data/db');
const {books, authors, access_token, refresh_token, array_access_token, array_refresh_token} = require('../data/static');
const {Author} = require('../models/Author');
const {Book} = require('../models/Book');

const timeExpire = 60;

const resolvers = {
    // QUERY
    Query: {
        books: (parent, args, context) => {
            // if (!context.user?.roles.includes("admin")) return new Error("Sorry, but you're not authorized to look at this page.");
            const result = args && args.authorId
            ? 
            books.filter((book) => String(book.authorId) === String(args.authorId)) 
            :
            books;
            console.log("call booksss=");
            return result;
        },
        book: (parent, args) => books.find((book) => String(book.id) === String(args.id)),
        authors: () => {
            console.log("11111");
            return authors
        },
        author: (parent, args) => authors.find((author) => String(author.id) === String(args.id)),
    },
    Book: {
        author: (book, args) => authors.find((author) => author.id == book.authorId)
    },
    Author: {
        books: (author, args) => books.filter((book) => book.authorId == author.id)
    },

    // MUTATION
    Mutation: {
        createAuthor: async (parent, args) => {
            const newAuthor = new Author(args);
            return await newAuthor.save()
        },
        createBook: async (parent, args) => {
            const newBook = new Book(args);
            return await newBook.save()
        },
        login: (parent, args) => {
            console.log("login Args====", args);
            // console.log("password====", args?.variables?.password);
            const expire = Math.round(Date.now()/1000) + timeExpire;
            const accessToken = array_access_token[Math.floor(Math.random()*10)] + "." + String(expire);
            const refreshToken = array_refresh_token[Math.floor(Math.random()*10)] + "." + String(expire);
            return {
                accessToken,
                refreshToken,
                expire
            }
        },
        refreshToken: (parent, args) => {
            const expire = Math.round(Date.now()/1000) + timeExpire;
            const accessToken = array_access_token[Math.floor(Math.random()*10)] + "." + String(expire);
            const refreshToken = array_refresh_token[Math.floor(Math.random()*10)] + "." + String(expire);
            console.log("refresh--token");
            return {
                accessToken,
                refreshToken,
                expire
            }
        }
    }
}

module.exports = resolvers;