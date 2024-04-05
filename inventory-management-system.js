const products = [];
function addProduct(name, price, quantity, category) {
    let newProduct = {
        name: name,
        price: price,
        quantity: quantity,
        category: category
    };
    products.push(newProduct);
}

function updateProduct(name, newDetails) {
    let productIndex = products.findIndex(product => product.name === name);
    if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...newDetails };
        console.log("Detail produk berhasil diperbarui.");
    } else {
       console.log("Produk tidak ditemukan.");
    }
}   

function displayProductsByCategory(category) {
    let categoryProducts = products.filter(product => product.category === category);
    if (categoryProducts.length > 0) {
        console.log("Produk dalam kategori " + category + ":");
        console.log(categoryProducts);
    } else {
        console.log("Tidak ada produk dalam kategori " + category);
    }
}   

addProduct("Buku Tulis", 5000, 100, "Alat Tulis");
addProduct("Pensil", 2000, 150, "Alat Tulis");
addProduct("Buku Catatan", 10000, 80, "Alat Tulis");

updateProduct("Buku Tulis", { price: 6000 });

displayProductsByCategory("Alat Tulis");
