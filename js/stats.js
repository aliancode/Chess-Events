const ctx = document.getElementById('chessChart').getContext('2d');

// Initial data
const data = {
    labels: ['Tournaments', 'Workshops', 'Exhibitions', 'Simultaneous Games'],
    datasets: [{
        label: 'Number of Chess Events',
        data: [5, 3, 2, 1], // Simple starter data
        backgroundColor: ['red', 'blue', 'yellow', 'green']
    }]
};

// Create the chart
const chessChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: 'Chess Events by Category'
            }
        }
    }
});

// Update the chart
document.getElementById('updateChart').addEventListener('click', () => {
    const category = document.getElementById('category').value;
    const quantity = parseInt(document.getElementById('quantity').value, 10);

    if (isNaN(quantity) || quantity < 1) {
        alert("Please enter a valid number.");
        return;
    }

    const index = data.labels.indexOf(category);
    if (index >= 0) {
        data.datasets[0].data[index] += quantity; // Update data
        chessChart.update(); // Redraw chart
    }
});