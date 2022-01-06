const { getAllBooks } = require('../data/db');
const {books, authors} = require('../data/static');
const {Author} = require('../models/Author');
const {Book} = require('../models/Book');

const resolvers = {
    // QUERY
    Query: {
        books: (parent, args, context) => {
            if (!context.user?.roles.includes("admin")) return new Error("Sorry, but you're not authorized to look at this page.");
            const result = args && args.authorId
            ? 
            books.filter((book) => String(book.authorId) === String(args.authorId)) 
            :
            books;
            return result;
        },
        book: (parent, args) => books.find((book) => String(book.id) === String(args.id)),
        authors: () => authors,
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
        }
    }
}

module.exports = resolvers;