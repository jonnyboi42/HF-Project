let expensesVisible = false;

function toggleExpenses() {
    const expenses = document.querySelectorAll('.living-expense');
    expenses.forEach((expense, index) => {
        if (!expensesVisible) {
            setTimeout(() => {
                expense.classList.add('visible');
            }, index * 500); // Adjust the delay time as needed
        } else {
            setTimeout(() => {
                expense.classList.remove('visible');
            }, (expenses.length - index) * 500); // Reverse the delay for fade-out effect
        }
    });
    expensesVisible = !expensesVisible;
}





