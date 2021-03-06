const {gql} = require('apollo-server-express');

const typeDefs = gql`
	directive @isOwner on FIELD | FIELD_DEFINITION
	directive @privateField on FIELD | FIELD_DEFINITION

	type Book {
		id: ID
		name: String
		genre: String
		author: Author
	}

	type Login {
		accessToken: String
		refreshToken: String
		expire: Int
	}

	type Author {
		id: ID!
		name: String
		age: Int
		books: [Book]
	}

	type Query {
		books(authorId: String): [Book]
		book(id: ID!): Book
		authors: [Author]
		author(id: ID!): Author
	}

	type Mutation {
		createAuthor(name: String, age: Int): Author,
		createBook(name: String, genre: String, authorId: ID): Book
		login(email: String, password: String): Login
		refreshToken(refreshToken: String): Login
	}
`

module.exports = typeDefs;
