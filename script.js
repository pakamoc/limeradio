function vote(option) {
    fetch('https://example-backend.com/vote', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ option: option })
    })
    .then(response => response.json())
    .then(data => {
        alert('Thank you for voting!');
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
