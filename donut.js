const mongodb = require('mongoose')

const schema = new mongodb.Schema({
    data: {
        type: Array
    }
})

const Donut = mongodb.model("donut",schema)

module.exports = {Donut}