fetch('../data/data.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('weather').innerText = `Weather: ${data.weather}`;

    let stockHTML = '<h2 class="text-xl font-semibold">Seed Stock</h2><ul>';
    data.stock.forEach(item => {
      stockHTML += `<li>${item}</li>`;
    });
    stockHTML += '</ul>';
    document.getElementById('stock').innerHTML = stockHTML;
  });