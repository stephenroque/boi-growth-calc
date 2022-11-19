function calcGrowth() {

  const result = document.getElementById(`tableResult`)

  params = document.querySelector(`form`)

  const fruit = [0, 100, 200, 300]
  const boost = [1, 1.01, 1.02, 1.03, 1.04, 1.05, 1.06, 1.08, 1.10, 1.12, 1.15]
  const base = params.growth.value / boost[params.boost.value] - (fruit[params.fruits.value])
  var growth = 0

  newHtml = `<tr>
<th colspan="6">Fruits</th>
</tr>
<tr>
<th colspan="2"></th>
<th width="100">0</th>
<th width="100">1</th>
<th width="100">2</th>
<th width="100">3</th>
</tr>
<tr>
<th rowspan="12">Boost</th>
</tr>`

  for (var x = 0; x < 11; x++) {
    newHtml += `<tr><th>${x}</th>`
    for (var y = 0; y < 4; y++) {
      growth = boost[x] * (base + fruit[y])
      newHtml += `<td>${parseInt(growth)}</td>`
    }
    newHtml += `</tr>`
  }

  result.innerHTML = newHtml
}