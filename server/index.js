const express = require('express')
const app = express()
const port = 3000
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('SERVER IS LIVE!!')
})

app.post('/chat', (req, res) => {

  const userMessage = req.body.message;

  console.log("User message:", userMessage);

  res.json({
    reply: "You said: " + userMessage
  });

});




app.listen(port, () => {
  console.log(`🚨SERVER IS LIVE AT ${port}🚨`)
})
