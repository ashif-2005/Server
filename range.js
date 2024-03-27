const mongodb = require('mongoose')

const schema = new mongodb.Schema({
    data: {
        type: Array
    }
})

const Range = mongodb.model("range",schema)

module.exports = {Range}