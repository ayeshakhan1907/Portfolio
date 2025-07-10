function fetchClothes() {
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(products => {
        const list = document.getElementById("productList");
        list.innerHTML = ""; // clear previous list
  
        // Filter only clothing products
        const clothes = products.filter(item => item.category.includes("clothing"));
  
        clothes.forEach(item => {
          const li = document.createElement("li");
  
          // Image
          const img = document.createElement("img");
          img.src = item.image;
          img.width = 50;
          img.height = 50;
          img.style.margin = "10px";
  
          // Text
          const text = document.createTextNode(`${item.title}`);
  
          // Add to list
          li.appendChild(img);
          li.appendChild(text);
          list.appendChild(li);
        });
      });
  }
