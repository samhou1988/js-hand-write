const express = require('express');
const path = require('path');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname)))

app.post('/xhr', function (req, res) {

  res.send(req.body)
});

const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  console.log(`listening on port ${PORT}`)
})