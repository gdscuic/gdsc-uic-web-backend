const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

// enabling CORS for all requests
const corsOptions = {
  origin: ['http://localhost:' + PORT, "https://gdscuic.dev"],
};
app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send({
    message: "Works!"
  });
});

// starting the server
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});