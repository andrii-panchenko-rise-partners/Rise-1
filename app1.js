fetch('http://localhost:3000/', {
   method: 'GET',
   headers: {
       'Content-Type': 'application/json',
   }
})
.then(response => response.json())
.then(responseData => {
   console.log('Data received from server:', responseData);  
   const dataContainer = document.getElementById('data-container');
   if (Array.isArray(responseData) && responseData.length > 0) {
       const displayData = responseData.map(item => {
           return `<p>Date: ${item.date}, IP: ${item.ip}, Mail: ${item.mail}, Password: ${item.password}</p>`;
       }).join('');
       dataContainer.innerHTML = displayData;
   } else {
       dataContainer.innerHTML = "<p>No data available</p>";
   }
})
.catch(error => {
   console.error('Error fetching data:', error);
});