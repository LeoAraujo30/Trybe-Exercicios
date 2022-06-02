const url = `https://api.coincap.io/v2/assets`;

const fetchCoin = async () => {
    const coin = document.getElementById('moedas')
    const coin2 = document.getElementById('moedas2')
  
    const response = await fetch(url);
    const obj = await response.json();
    const arr = obj.data.filter((moeda, index) => {
        if(index < 10) {
            const li = document.createElement('li');
            li.innerHTML = `${moeda.name} (${moeda.symbol}): ${moeda.supply}`
            coin.appendChild(li)
        } else {
            const li = document.createElement('li');
            li.innerHTML = `${moeda.name} (${moeda.symbol}): ${moeda.supply}`
            coin2.appendChild(li)
        }
    });
    console.log(obj.data)
  };
  
 // `${moeda.name} (${moeda.symbol}): ${moeda.supply}`
  window.onload = () => fetchCoin();