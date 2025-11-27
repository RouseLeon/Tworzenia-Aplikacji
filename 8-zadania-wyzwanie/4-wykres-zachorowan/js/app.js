document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('filterForm');
    const countrySelect = document.getElementById('country');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const ctx = document.getElementById('covidChart').getContext('2d');
    let covidChart;

    async function fetchCovidData(country, startDate, endDate) {
        try {
            const res = await fetch(`https://api.covid19api.com/country/${country}?from=${startDate}T00:00:00Z&to=${endDate}T23:59:59Z`);
            const data = await res.json();

            // przygotowanie danych do wykresu
            const labels = data.map(d => d.Date.slice(0, 10));
            const cases = data.map(d => d.Confirmed);

            return { labels, cases };
        } catch (err) {
            console.error('Błąd pobierania danych:', err);
            return { labels: [], cases: [] };
        }
    }

    async function updateChart() {
        const country = countrySelect.value;
        const startDate = startDateInput.value;
        const endDate = endDateInput.value;

        const { labels, cases } = await fetchCovidData(country, startDate, endDate);

        if (covidChart) covidChart.destroy(); // usunięcie starego wykresu

        covidChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: `Zachorowania w ${country}`,
                    data: cases,
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    fill: true,
                    tension: 0.2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: true
                    }
                },
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Data'
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: 'Liczba przypadków'
                        }
                    }
                }
            }
        });
    }

    form.addEventListener('submit', e => {
        e.preventDefault();
        updateChart();
    });

    // inicjalny wykres dla Polski w 2020
    updateChart();
});
