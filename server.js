const express = require('express')

const flowers = [
    {
        id: "_1sp71vgn2",
        Color: 'Röd',
        Name: 'Ros'
    },
    {
        id: "_9y8rzlkft",
        Color: "Vit",
        Name: "Lilja"
    }
]

const { json } = require('body-parser')
const app = express()

app.use(express.json())
app.use(express.static('client'))

app.get('/api/flowers', (req, res) => res.json(flowers))
app.post('/api/flowers', (req, res) =>{
    if (!req.body.Color || !req.body.Name){
        res.status(400).json({message: 'No data was put in the inputfields'})
    }
    else{
        const flower = {id: idGen(), ...req.body }
        flowers.push(flower)
        res.status(201).json(flower)
        }
})

app.use((req, res) => {
    res.status(404).json({message: 'Error message'})
})

app.listen(3000, () => console.log('Server is live and running on port 3000'))

function idGen () {
    // Math.random should be unique because of its seeding algorithm.
    // Convert it to base 36 (numbers + letters), and grab the first 9 characters
    // after the decimal.
    return '_' + Math.random().toString(36).substr(2, 9);
  };

  console.log(idGen())



