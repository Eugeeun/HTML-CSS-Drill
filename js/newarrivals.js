function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

function createElement(item) {
  const img = document.createElement('img');
  img.setAttribute('src', item.image);
  img.setAttribute('alt', item.name);

  const itemTitle = document.createElement('h3');
  itemTitle.innerText = item.name;

  const price = document.createElement('span');
  const delPrice = document.createElement('del');
  delPrice.innerText = item.startPrice;
  price.appendChild;
}

// append, appendChild구분해서 잘 하기 ㅎㅎ;;
