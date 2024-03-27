const mongodb = require('mongoose')

const schema = new mongodb.Schema({
    data: {
        type: Array
    }
})

const Line = mongodb.model("line",schema)

module.exports = {Line}