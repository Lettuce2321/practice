  var product = {
      "products": [
        {
          "id": 0,
          "title": "식기세척기",
          "brand": "세척나라",
          "photo": "pr1.jpg",
          "price": 10000
        },
        {
          "id": 1,
          "title": "원목 침대 프레임",
          "brand": "침대나라",
          "photo": "pr2.jpg",
          "price": 20000
        },
        {
          "id": 2,
          "title": "천연 디퓨저 세트",
          "brand": "향기나라",
          "photo": "pr3.jpg",
          "price": 30000
        },
        {
          "id": 3,
          "title": "시원한 서큘레이터",
          "brand": "바람나라",
          "photo": "pr4.jpg",
          "price": 40000
        }
      ]
    };

    for(let i=0; i<product.products.length; i++) {
      order(product.products[i]);
    }
    // product.products.forEach((item, i) => {
    //   console.log(item[i]);
    //   order(item[i]);
    // })
    
  $('.input').on('change', function() {
    $('.item-container').html('');
    var inputValue = $('.input').val()
    for(let i=0; i<product.products.length; i++) {
      if(product.products[i].title.includes(inputValue)) {
        // console.log(i);
        find(product.products[i], inputValue);
      }
    }
  });
  $('.drag-container').on('drop', function(e) {
    e.preventDefault();
    console.log('asdfasdfadfasdf');
  })
  function order(item) {
      var text = `<div class="item-card">
      <div class="item" draggable="true" data-id="${item.id}">
      <img src="${item.photo}">
      <h4>${item.title}</h4>
      <h4>${item.brand}</h4>
      <p>가격 : ${item.price}</p>
      <button class="add" data-id="${item.id}">담기</button>
      </div>
      </div>`
      $('.item-container').append(text);
  };
  function find(item, inputValue) {
    var text = `<div class="item-card">
      <div class="item" draggable="true" data-id="${item.id}">
      <img src="${item.photo}">
      <h4>${item.title}</h4>
      <h4>${item.brand}</h4>
      <p>가격 : ${item.price}</p>
      <button class="add" data-id="${item.id}">담기</button>
      </div>
      </div>`
      $('.item-container').append(text);
  }