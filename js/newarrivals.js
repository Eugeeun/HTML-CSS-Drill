function loadItems() {
  return fetch('../data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function createElement(item) {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.setAttribute('href', '#');

  const img = document.createElement('img');
  // img.setAttribute('src', item.image);
  img.src = item.image;
  img.setAttribute('alt', item.name);

  const itemTitle = document.createElement('h3');
  itemTitle.innerText = item.name;

  const price = document.createElement('span');
  const delPrice = document.createElement('del');
  delPrice.innerText = item.startPrice;
  price.appendChild(delPrice);
  price.append(item.currPrice);
  // console.log(price);

  const link = document.createElement('a');
  link.setAttribute('href', '#');
  link.setAttribute('class', 'addToCart');
  link.innerText = 'add to cart';

  const sale = document.createElement('span');
  sale.setAttribute('class', 'sale');
  sale.innerText = 'Sale!';

  a.appendChild(img);
  a.appendChild(itemTitle);
  a.appendChild(price);

  li.appendChild(a);
  li.appendChild(sale);
  li.appendChild(link);
  // console.log(li);

  return li;
}

// append, appendChild구분해서 잘 하기 ㅎㅎ;;

loadItems().then((items) => {
  const elements = items.map(createElement);
  // console.log(elements);
  const container = document.querySelector('.items');
  container.append(...elements); // ... 을 사용하면 object 안의 값만 가져옴!
});
