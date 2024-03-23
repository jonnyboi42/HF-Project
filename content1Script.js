// const months = ['Gas', 'Tolls', 'Groceries', 'Entertainment', 'May', 'June', 'July'];
// const labels = months.slice(0, 4); // Get the first 7 months
// const data = {
//   labels: labels,
//   datasets: [{
//     label: 'Yearly Spending',
//     data: [65, 59, 80, 81, 56, 55, 40],
//     backgroundColor: [
  
//       'rgba(75, 192, 192, 0.2)',
//       'rgba(54, 162, 235, 0.2)',
//       'rgba(153, 102, 255, 0.2)',
//       'rgba(201, 203, 207, 0.2)'
//     ],
//     borderColor: [

//       'rgb(75, 192, 192)',
//       'rgb(54, 162, 235)',
//       'rgb(153, 102, 255)',
//       'rgb(201, 203, 207)'
//     ],
//     borderWidth: 1
//   }]
// };
// const ctxContentOne = document.getElementById('contentOneChart');

// new Chart(ctxContentOne, {
//   type: 'bar',
//   data: data,
//   options: {
//     plugins: {
//       legend: {
//           display: false
//       },
//   },
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     },
//     responsive: true,
     
//   }
// });

const months = ['Gas', 'Tolls', 'Groceries', 'Entertainment', 'May', 'June', 'July'];
const labels = months.slice(0, 4); // Get the first 7 months
const data = {
  labels: labels,
  datasets: [{
    label: ' Approx Spent This Month',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};
const ctxContentOne = document.getElementById('contentOneChart');

new Chart(ctxContentOne, {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      legend: {
          display: false
      },
  },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            return '$' + value;
          }
        }
      }
    },
    responsive: true,
  }
});