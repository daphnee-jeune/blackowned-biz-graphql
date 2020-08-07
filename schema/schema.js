const { buildSchema } = require('graphql')

const bizSchema = buildSchema(`
    type Query {
        businesses: [Business],
        bizByName(name: String!): Business
    }

    type Mutation {
        addBusiness(name: String!, category: String!, phone: String!, address: String!, instagram: String!, year: String!): Business
    }

    type Business {
        name: String,
        category: String,
        phone: String,
        instagram: String,
        address: String,
        year: String
    }
`)

module.exports = bizSchema