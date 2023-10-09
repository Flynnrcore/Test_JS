<script>
  let baseCurrency = 'USD';
  let targetCurrency = 'RUB';
  let baseAmount = 1;

  const apiKey = '1da11b167e70b5b8a4fd7ee0';

  let targetAmount = 0;

  function calculate(type) {
    const url = type === 'base' ? `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${baseCurrency}/${targetCurrency}/${baseAmount}` : `https://v6.exchangerate-api.com/v6/${apiKey}/pair/${targetCurrency}/${baseCurrency}/${targetAmount}`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (type === 'base') {
          targetAmount = data.conversion_result;
        } else if (type === 'target') {
          baseAmount = data.conversion_result;
        }
      });
  }
</script>

<main>
  <h1>Конвертер валют</h1>

  <div class="form-controls">
    <select bind:value={baseCurrency}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="RUB">RUB</option>
    </select>

    <input type="number" bind:value={baseAmount} on:change={() => calculate('base')} />

    <select bind:value={targetCurrency}>
      <option value="RUB">RUB</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
    </select>

    <input type="number" bind:value={targetAmount} on:change={() => calculate('target')} />
  </div>
</main>

<style>
  .form-controls {
    display: flex;
    gap: 10px;
    align-items: center;
  }

   select {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  input {
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  input:focus {
    outline: none;
    box-shadow: 0 0 4px #66afe9;
    border-color: #66afe9;
  }
</style>
