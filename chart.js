import Chart from 'chart.js/auto'

(async function() {

  const taxes = localStorage.getItem('taxes')
  const meds = localStorage.getItem('meds')
  const foods = localStorage.getItem('foods')
  const houses = localStorage.getItem('houses')
  const savings = localStorage.getItem('savings')
  const travels = localStorage.getItem('travels')

    const data = {
        labels: [
          'Children',
          'Medical',
          'Food',
          'Housing',
          'Savings',
          'Travelling'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [taxes, meds, foods, houses, savings, travels],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)',
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

  new Chart(
    document.getElementById('chart'),
    {
      type: 'pie',
      data: data
    }
  );
})();


