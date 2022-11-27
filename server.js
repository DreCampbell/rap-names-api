const express = require('express')
const app = express()
const PORT  = 8000

const rappers = {
    '21 savage': {
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, England'
    },
    'stormzy': {
    'age': 29,
    'birthName': 'Michael Ebenezer Kwadjo Omari Owuo Jr.',
    'birthLocation': 'London, England'
    },
    'unknown': {
    'age': 0,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
    }
}

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const rapperName = req.params.name.toLowerCase()
    
    if(rappers[rapperName]){
        res.json(rappers[rapperName])
    }else{
        res.json(rappers['unknown'])
    }
})

app.listen(PORT, ()=>{
    console.log(`The server is now running on port ${PORT}! Better go catch it!`)
})