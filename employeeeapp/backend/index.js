//1.import

const express = require('express')

require("./connections")
const empModel = require("./model/employee")
var cors = require("cors")
//import 2

const app = express()
app.use(express.json())
app.use(cors())


//api set akanam 
app.get('/trial',(req, res)=> {
    res.send('Hello')
})
app.post('/add', async (req, res) => {
    try {
        await empModel(req.body).save()
        res.send({ message: "data added" })
        
    } catch (error) {
        console.log(error)
        
    }
})

app.get('/view', async (req, res) => {
    try {
        const data = await empModel.find();
        res.send(data)
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error receving message" });
        
    }
   
})


app.delete('/remove/:id', async (req, res) => {
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted" })
        
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: "Error receving message" });

    }

})




app.put('/change/:id', async (req, res) => {
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send({ message: "data changed" })

    } catch (error) {
        console.log(error);
        

    }

})







app.get('/name', (req, res) => {
    res.send('akash')
})

//port
app.listen(3004, () => {

    
    console.log("server is running on port 3004")
    
})