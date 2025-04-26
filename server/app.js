const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.json());

// Load result templates
const resultTemplates = require('./resultTemplates.json');

// API to generate meme result
app.post('/generate-result', (req, res) => {
    const { name, degree, salary, specialSkill, familyReputation } = req.body;

    let resultText = "Arre, result ready hai ji!";

    resultTemplates.forEach(template => {
        if (template.salary === salary || template.degree === degree || template.specialSkill === specialSkill || template.familyReputation === familyReputation) {
            resultText = template.response;
        }
    });

    res.json({ result: `${name}, ${resultText}` });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
