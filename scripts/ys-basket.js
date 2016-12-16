/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains basket events for the application
* @class BasketEvents
*/
YS.App.Events.BasketEvents = function(){
    this.products = [];
    this.addItemToBasket = function(item){ 
        var parentNode = item.parentNode;
        var productCount = parentNode.childNodes[0].value;
        var productId = parentNode.dataset.productid;
        var product = currentYSApp.mainContainer.getProductByProductId(productId);  
        var lcProducts = this.products.filter(function(product){ 
                                        return product.productId == productId;
                                    });
        var productExist = false;
        if(lcProducts != null && lcProducts.length > 0){
            product = lcProducts[0];
            product.addedCount = parseInt(product.addedCount) + parseInt(productCount);
            productExist = true;
        }else{
            product.addedCount = productCount;
            this.products.push(product);        
        }
     
        this.createBasket();
    }

    this.createBasket = function(){
        var basketTemplate = new YS.Templates.Basket();
        var basketItems = document.getElementById('BasketItems');
        var loadedTemplate = basketTemplate.getLoadedTemplate(this.products);
        if(loadedTemplate != null && loadedTemplate != ""){
            basketItems.innerHTML = loadedTemplate;
        }else{
            basketItems.innerHTML = "";
        }
    }

    this.removeItemFromBasket = function(item){
        var parentNode = item.parentNode;
        var productId = parentNode.dataset.productid;
        var productArr = this.products.filter(function(product){ 
                                        return product.productId == productId;
                                    });
        
        this.products = this.products.filter(function(product){ 
                                        return product.productId != productId;
                                    });
        parentNode.remove();
        if(this.products.length == 0){
            var basketItems = document.getElementById('BasketItems');
            basketItems.innerHTML = "<b>Sepetiniz henüz boş.</b>";
        }else if(productArr != null && productArr.length > 0){
            var product = productArr[0];
            var totalPrice = document.getElementById('TotalPrice');
            var price = parseFloat(product.listPrice.replace(',','.').replace(' ','')) * parseFloat(product.addedCount);
            totalPrice.innerHTML = parseFloat(totalPrice.innerHTML) - parseFloat(price);
        }
    }

    this.validateInputAndChangePrice = function(item){
        item.value = item.value.replace(".","").replace(",","");
        if(item.value <= 0){
            item.value = 1;
        }else if(item.value >= 100){
            item.value = 100;
        }
        var productCount = item.value;
        var parentNode = item.parentNode;
        var productId = parentNode.dataset.productid;
        var lcProducts = this.products.filter(function(product){ 
                            return product.productId == productId;
                        });
         if(lcProducts != null && lcProducts.length > 0){
            var product = lcProducts[0];
            product.addedCount = productCount;
            var productPrice = parentNode.childNodes[2];
            productPrice.innerHTML = parseFloat(product.listPrice.replace(',','.').replace(' ','')) * parseFloat(product.addedCount) + ' TL';
            var totalPrice = 0;
            for(var i = 0; i < this.products.length; i++){
                var lcProduct = this.products[i];
                totalPrice = parseFloat(totalPrice) + (parseFloat(lcProduct.listPrice.replace(',','.').replace(' ','')) * parseFloat(lcProduct.addedCount));
            }
            document.getElementById('TotalPrice').innerHTML = totalPrice;
        }
    }
}