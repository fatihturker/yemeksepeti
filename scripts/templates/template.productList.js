/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Product list template that creates a product list from category based products.
* @class ProductList
*/
YS.Templates.ProductList = function(){
    this.getItem = function(categoryName, productList){
        return '<category><categoryName>{{CategoryName}}</categoryName><productList>{{ProductList}}</productList></category>'.replace("{{CategoryName}}", categoryName).replace("{{ProductList}}", productList);
    }
    this.getProductItem = function(productId, displayName, description, price){
        return '<product data-productid="{{ProductId}}"><input class="count" type="number" value="1" min="1" onkeyup="currentYSApp.events.pagingEvents.validateInput(this)"/><button class="btnAddToBasket" onclick="currentYSApp.events.basketEvents.addItemToBasket(this)">+</button><span class="displayName">{{DisplayName}}</span><span class="description">{{Description}}</span><span class="price">{{Price}} TL</span></product>'.replace("{{DisplayName}}", displayName).replace("{{Description}}", description).replace("{{ProductId}}", productId).replace("{{Price}}", price);
    }
    this.getLoadedTemplate = function(items){
        var loadedTemplate = "";
        if(items != null){
            for(var i = 0; i < items.length; i++){
                var category = items[i];
                var productList = "";
                for(var j = 0; j < category.products.length; j++){
                    var product = category.products[j];
                    productList += this.getProductItem(product.productId, product.displayName, product.description, product.listPrice);
                }
                loadedTemplate += this.getItem(category.categoryName, productList);
            } 
        }
        return loadedTemplate;
    }
}