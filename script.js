// Bar Chart - Pemeriksaan per Bulan
const barCtx = document.getElementById('barChart').getContext('2d');
new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun'],
        datasets: [{
            label: 'Jumlah Pemeriksaan',
            data: [10, 15, 20, 18, 30, 27],
            backgroundColor: '#4e73df'
        }]
    }
});

// Pie Chart - Status Temuan
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Selesai', 'Proses', 'Belum'],
        datasets: [{
            data: [250, 60, 30],
            backgroundColor: ['#1cc88a', '#f6c23e', '#e74a3b']
        }]
    }
});
