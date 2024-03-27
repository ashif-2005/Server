const mongodb = require('mongoose')

const schema = new mongodb.Schema({
    data: {
        type: Array
    }
})

const Retail = mongodb.model("retail",schema)

module.exports = {Retail}