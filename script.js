document.getElementById('eligibility-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('result').innerText = "Eligibility checked!";
});

document.getElementById('lawyer-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('lawyer-result').innerText = "Lawyers found!";
});
