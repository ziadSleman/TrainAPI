document.getElementById('prediction-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    fetch('https://ziadsleman.github.io/TrainAPI/predict?' + new URLSearchParams(data), {
        method: 'GET'
    })
    .then(response => response.json())
    .then(result => {
        document.getElementById('result').textContent = `الدرجة المتوقعة: ${result['الدرجة المتوقعة']}`;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
