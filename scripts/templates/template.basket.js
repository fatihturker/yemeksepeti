/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Basket template that creates a basket from products.
* @class Basket
*/
YS.Templates.Basket = function(){
    this.getItem = function(products, totalPrice){
            return '<products>{{Products}}<div class="totalPrice"><span class="totalTitle">Toplam: </span><span id="TotalPrice">{{TotalPrice}}</span><span> TL</span></div></products>'.replace("{{Products}}", products).replace("{{TotalPrice}}", totalPrice);
    }
    this.getProductItem = function(productId, displayName, productCount, price){
        return '<product data-productid="{{ProductId}}"><span class="displayName">{{DisplayName}}</span><input class="count" type="number" value="{{ProductCount}}" min="1" max="100" oninput="currentYSApp.events.basketEvents.validateInputAndChangePrice(this)" onkeyup="currentYSApp.events.basketEvents.validateInputAndChangePrice(this)"/><span class="price">{{Price}} TL</span><button class="btnRemove" onclick="currentYSApp.events.basketEvents.removeItemFromBasket(this)">x</button></product>'.replace("{{DisplayName}}", displayName).replace("{{ProductCount}}", productCount).replace("{{ProductId}}", productId).replace("{{Price}}", price);
    }
    this.getLoadedTemplate = function(items){
        var loadedTemplate = "";
        if(items != null){
            var productList = "";
            var totalPrice = 0;
            for(var i = 0; i < items.length; i++){
                var product = items[i];
                var price = parseFloat(product.listPrice.replace(',','.').replace(' ','')) * parseFloat(product.addedCount);
                var totalPrice = parseFloat(totalPrice) + parseFloat(price);
                productList += this.getProductItem(product.productId, product.displayName, product.addedCount,price);
            } 
            loadedTemplate += this.getItem(productList, totalPrice);    
        }
        return loadedTemplate;
    }
}