document.getElementById('ticketForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const summary = document.getElementById('summary').value;
    const description = document.getElementById('description').value;
    const submitBtn = document.getElementById('submitBtn');
    const resultDiv = document.getElementById('result');

    // Disable the submit button and show a loading message
    submitBtn.disabled = true;
    submitBtn.innerText = 'Submitting...';
    resultDiv.innerText = '';

    try {
        const response = await fetch('https://api.allorigins.win/raw?url=' + encodeURIComponent('https://parksmart-interns.atlassian.net/rest/api/3/issue'), {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa('jayesh.pawar@parksmart.in:ATATT3xFfGF0DZl_0h_m48zajpF37igDzXVTDebGl26aT70YOnUNH6BKXYKPfwDmVPG4GPAxlNUKropOCh9JKiuh3yiVXI7ORG5-KdmQbxEExlnE4CKDQxjdoHTRhpAI9mI905GZutPkyiEJxrXOBSBX-CwRv6fC0EB6aNdGcdtgbm99beoFIMw=FA74DBC5'),
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fields: {
                    project: {
                        key: 'SERVE'
                    },
                    summary: summary,
                    description: description,
                    issuetype: {
                        name: 'Task' // or 'Incident', 'Service Request', etc.
                    }
                }
            })
        });

        if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP ${response.status} - ${response.statusText}: ${text}`);
        }

        const result = await response.json();
        resultDiv.innerText = 'Ticket created successfully: ' + result.key;
    } catch (error) {
        console.error('Error:', error);
        resultDiv.innerText = 'An error occurred: ' + error.message;
    }

    // Re-enable the submit button and reset the text
    submitBtn.disabled = false;
    submitBtn.innerText = 'Submit';
});
