var currentYSApp = null;
/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Application container
* @class Main
*/
YS.Containers.Main = function(){
    this.restoranData = null;
    this.menuData = null;
    this.setRestoranData = function(pRestoranData){
        restoranData = pRestoranData;
    };
    this.setMenuData = function(pMenuData){
        menuData = pMenuData;
    };
    this.getRestoranData = function(){
        return restoranData;
    };
    this.getMenuData = function(){
        return menuData;
    };
    this.getCategoriesWithProducts = function(){
        var items = [];
        if(menuData != null){
            for(var i = 0; i < menuData.resultSet.length; i++){
                var result = menuData.resultSet[i];
                var item = {}
                item.categoryName = result.categoryDisplayName;
                item.products = result.products;
                items.push(item);
            }
        }
        return items;
    }
    this.getProductByProductId = function(productId){
        var product = null;
        if(menuData != null){
            for(var i = 0; i < menuData.resultSet.length; i++){
                var result = menuData.resultSet[i];
                var filteredProducts = result.products.filter(function(product){ 
                                        return product.productId == productId;
                                    });
                if(filteredProducts != null && filteredProducts.length > 0){
                    product = filteredProducts[0];
                }
            }
        }
        return product;
    }
}
/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Application sub container
* @class Sub
*/
YS.Containers.Sub = function(){
    this.restoranlar = null;
    this.yemekler = null;
    this.loadRestoranlar = function(pRestoranData){
        this.restoranlar = [];
        if(pRestoranData != null && pRestoranData.resultSet != null){
            for(var i = 0; i < pRestoranData.resultSet.length; i++){
                var restaurantMainInfo = pRestoranData.resultSet[i];
                this.restoranlar.push(restaurantMainInfo.displayName);
            }
        }
    };
    this.loadYemekler= function(pMenuData){
        this.yemekler = [];
        if(pMenuData != null && pMenuData.resultSet != null){
            for(var i = 0; i < pMenuData.resultSet.length; i++){
                var menuInfo = pMenuData.resultSet[i];
                for(var j = 0; j < menuInfo.products.length; j++){
                    var product = menuInfo.products[j];
                    this.yemekler.push(product.displayName);
                }
            }
        }
    };
    this.getRestoranlar = function(){
        return this.restoranlar;
    };
    this.getYemekler = function(){
        return this.yemekler;
    };
}