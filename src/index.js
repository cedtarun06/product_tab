var product = []
function come(){
    id = document.getElementById('productId').value
    proname = document.getElementById('productName').value
    price = document.getElementById('productPrice').value
    return {
        'productId':id,
        'productName':productname,
        'price':price
    }
}
function addproduct(){
    var products = come();
    product.push(products)
    table = document.getElementById('table')
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    for(var i=0; i<product.length; i++){
        cell1.innerHTML = product[i].productId
        cell2.innerHTML = product[i].productName
        cell3.innerHTML = product[i].price
    }
}
