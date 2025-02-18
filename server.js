const express = require('express')
const bodyParser = require("body-parser")
const app = express()
const port = 5000;
app.use(bodyParser.json());


app.get("/khiem", (req, res) => {
    console.log('Client calling api');
  res.send('Hello World!')
})

app.get("/check", (req, res) => {
    console.log('Client calling api');
  res.json('Hello World!1')
})

app.get("/profile", (req, res) => {
    const {email,password} = req.body;

    if(!email || !password) {
        return res.json({
            message: "Email or Passworl is required "
        })
    }

    if(Number(password) === 1234567) {
        return res.json({
                message: "Login success"
        })
    }
    return res.json({
        message: "Login fail"
    })

    console.log(email,password);
})



app.listen(port, () => {    
  console.log(`Example app listening on port ${port}`)
})