const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const db = require('mongoose')
const {Retail} = require('./schema')
const {Grid} = require('./grid')
const {Line} = require('./line')
const {Donut} = require('./donut')
const {Inventory} = require('./inventory')
const {Login} = require('./login')
const {Range} = require('./range')

const port = process.env.PORT || 8000
const url = "mongodb+srv://Mohammed_Ashif:Ashif2005@cluster0.whqaznv.mongodb.net/RetailDb?retryWrites=true&w=majority&appName=Cluster0"

const app = express()
app.use(parser.json())
app.use(cors())

app.get('/',(req,res)=>{
    try{
        res.status(200).json({
            'Status':'Your Application Running Successfully....'
        })
    }catch(error){
        res.status(500).json({
            'Status':'Some Internal Issue...',
            'Error':error
        })
    }
})

app.get('/getData', async (req,res)=>{
    try{
        const data = await Retail.findOne()
        res.status(200).json(data)
    } catch(error){
        res.status(500).json({
            'Status':'Some Internal Issue...',
            'Error':error
        })
    }
})

app.post('/findData',async (req,res)=>{
    try{
        const data = await Inventory.find(req.body)
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            'Status': 'Some Internal Server Issue....',
            'Error': error
        })
    }
})

app.get('/getGrid',async (req,res)=>{
    try{
        const data = await Grid.find()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            'Status': 'Some Internal Server Issue....',
            'Error': error
        })
    }
})

app.get('/getLine',async (req,res)=>{
    try{
        const data = await Line.findOne()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            'Status': 'Some Internal Server Issue....',
            'Error': error
        })
    }
})

app.get('/getDonut',async (req,res)=>{
    try{
        const data = await Donut.findOne()
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            'Status': 'Some Internal Server Issue....',
            'Error': error
        })
    }
})

app.post('/login',async (req,res)=>{
    try{
        let count = 0
        const data = await Login.find()
        for(i of data){
            if(req.body.Name === i.Name && req.body.Password === i.Password){
                count++
            }
        }
        if(count>0){
            res.status(200).json({
                "status":"Successfully logged in"
            })
            count = 0
        }
        else{
            res.status(401).json({
                "status":"Invalid user name or password"
            })
        }   
    }catch(error){
        res.status(500).json({
            "status":"Internal Server Issue"
        })
    }
})

app.post('/signup',async (req,res)=>{
    try{
        let count = 0
        const data = await Login.find()
        for(i of data){
            if(req.body.Name === i.Name){
                count++
            }
        }
        if(count>0){
            res.status(401).json({
                "status":"User Already Exist"
            })
            count = 0
        }
        else{
            await Login.create({
                "Name":req.body.Name,
                "Password":req.body.Password
            })
            res.status(200).json({
                "status":"Account Created Successfull"
            })
        }   
    }catch(error){
        res.status(500).json({
            "status":"Internal Server Issue"
        })
    }
})

app.post('/getUser',async (req,res)=>{
    try{
        const data = await Grid.find(req.body)
        res.status(200).json(data)
    }catch(error){
        res.status(500).json({
            'Status': 'Some Internal Server Issue....',
            'Error': error
        })
    }
})

app.get('/getInv', async (req,res)=>{
    try{
        const data = await Inventory.find()
        res.status(200).json(data)
    } catch(error){
        res.status(500).json({
            'Status':'Some Internal Issue...',
            'Error':error
        })
    }
})

async function connectToDb(){
    try{
        await db.connect(url)
        console.log('DataBase Connected Successful....')
        app.listen(port,()=>{
            console.log(`Listening on port ${port}`)
        })
    } catch(error){
        console.log(error)
    }
}

connectToDb()