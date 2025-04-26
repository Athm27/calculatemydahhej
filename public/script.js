document.getElementById("generate").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const degree = document.getElementById("degree").value;
    const salary = document.getElementById("salary").value;
    const specialSkill = document.getElementById("specialSkill").value;
    const familyReputation = document.getElementById("familyReputation").value;

    fetch('/generate-result', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, degree, salary, specialSkill, familyReputation })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerHTML = `<p>${data.result}</p>`;
    });
});

function shareOnTwitter() {
    const resultText = document.getElementById('result').innerText;
    window.open(`https://twitter.com/share?text=${encodeURIComponent(resultText)}`);
}

function shareOnFacebook() {
    const resultText = document.getElementById('result').innerText;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(resultText)}`);
}

function shareOnWhatsApp() {
    const resultText = document.getElementById('result').innerText;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(resultText)}`);
}
