const mongodb = require('mongoose')

const schema = new mongodb.Schema({
    data: {
        type: Array
    }
})

const Inventory = mongodb.model("inventory",schema)

module.exports = {Inventory}