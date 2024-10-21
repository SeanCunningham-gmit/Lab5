const express = require('express'); // Import the Express framework
const bodyParser = require('body-parser'); // Import body-parser for handling data
const path = require('path'); 
const app = express(); 
const port = 3000; // Define the port number for the server

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static('public')); // Serve the files from the 'public' directory

app.get('/', (req, res) => {
    res.send('Hello World'); // Respond with "Hello World"
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name; // Extract the name from the URL
    res.send(`Hello ${name}`); 
});

app.get('/hello/:name/:surname', (req, res) => {
    const name = req.params.name; // Extract the name and surname from the URL
    const surname = req.params.surname; 
    res.send(`Hello ${name} ${surname}`); 
});

app.get('/api/movies', (req, res) => {
    const movies = [ // Array of movie objects
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.status(201).json({ myMovies: movies }); // Respond with a JSON file containing the movies data
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); 
});

app.get('/name', (req, res) => {
    const firstname = req.query.firstname; // Extract firstname and lastname from query parameters
    const lastname = req.query.lastname; 
    res.send(`Hello ${firstname} ${lastname}`); 
});

app.post('/name', (req, res) => {
    const firstname = req.body.firstname; // Extract firstname and lastname from the request body
    const lastname = req.body.lastname; 
    res.send(`Hello ${firstname} ${lastname}`); 
});

app.use((err, req, res, next) => {
    console.error(err.stack); 
    res.status(500).send('Something went wrong!'); // Respond with an error message
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log server running message
});

