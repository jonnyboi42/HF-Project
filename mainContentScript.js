
// Generate random spending data for each month
function generateRandomSpending() {
    const spending = [];
    for (let i = 0; i < 12; i++) {
        // Generate a random spending amount between 1500 and 2500
        const amount = Math.floor(Math.random() * (2500 - 1500 + 1)) + 1500;
        spending.push(amount);
    }
    return spending;
}
const ctx = document.getElementById('myChart');


new Chart(ctx, {
type: 'line',

data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'Novermber', 'December'],
    datasets: [{
    label: 'Amount Spent',
    data: generateRandomSpending(),
    borderWidth: 1
    }]
},
options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    y: {
        beginAtZero: true
    }
    }
}
});
  