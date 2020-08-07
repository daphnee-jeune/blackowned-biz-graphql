const Business = require('../model/model')

const resolvers = {
    businesses: () => {
        // find all movies
        //currently null
        return Business.find({})
    },
    addBusiness: (args) => {
        let biz = new Business({
            name: args.name,
            category: args.category,
            year: args.year,
            address: args.address,
            phone: args.phone,
            instagram: args.instagram
        })
        biz.save()
        return biz
    },
    bizByName: (args) => {
        return Business.findOne({name: args.name})
    }
}

module.exports = resolvers