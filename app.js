const express = require("express")
const app = express()
const mongoose = require("mongoose")
const { graphqlHTTP } = require("express-graphql")
const bizSchema = require("./schema/schema")
const resolvers = require("./resolvers/resolvers")


mongoose.connect("mongodb+srv://daph424:daph424@cluster0.wfr4r.mongodb.net/blackowenbiz?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected!"))
.catch(err => console.log(err))


//Setting GraphQL
app.use('/graphql', graphqlHTTP({
    schema: bizSchema,
    graphiql: true,
    rootValue: resolvers
}))

app.get('/', (req, res) => {
    res.send("Hello from backend app.js")
})

app.listen(5000, () => console.log("Connected on Port 5000"))