const express = require('express');
const bodyParser = require('body-parser'); // To parse JSON request bodies
const fs = require('fs'); // To work with the file system

const app = express();
const port = 8081; // Or any port you prefer

app.use(bodyParser.json()); // Important: To parse JSON data in requests

app.use(express.static('.')); // Serve static files (your HTML, JSON, etc.) from the current directory.

app.post('/location_data.json', (req, res) => {
  const data = req.body; // The JSON data sent from the client
  fs.writeFile('location_data.json', JSON.stringify(data, null, 2), (err) => {
	if (err) {
	console.error("Error saving data:", err);
	res.status(500).send('Error saving data');
	} else {
	console.log("Data saved successfully.");
	res.status(200).send('Data saved');
	}
  });
});

app.listen(port, () => {
          console.log(`Server listening at http://localhost:${port}`);
        });