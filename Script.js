const response = await fetch('http://localhost:8080/https://parksmart-interns.atlassian.net/rest/api/3/issue', {
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
