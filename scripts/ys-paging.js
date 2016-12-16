/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains paging events for the application
* @class PagingEvents
*/
YS.App.Events.PagingEvents = function(){
    this.validateInput = function(item){
        item.value = item.value.replace(".","").replace(",","");
        if(item.value <= 0){
            item.value = 1;
        }else if(item.value >= 100){
            item.value = 100;
        }
    }
    this.filterMenu = function(selectedItem, itemType){
        if(itemType == 1){
            this.loadRelatedProducts(selectedItem.innerHTML);
        }else{
            this.loadAllProducts();
        }
        document.getElementById("SearchContainer").classList.add("invisible");   
    }

    this.loadAllProducts = function(){
        var items = currentYSApp.mainContainer.getCategoriesWithProducts();
        if(items != null){
            var productListTemplate = new YS.Templates.ProductList();
            var loadedTemplate = productListTemplate.getLoadedTemplate(items);
            if(loadedTemplate != null && loadedTemplate != ""){
                document.getElementById("MainContainer").innerHTML = loadedTemplate;
            }else{
                document.getElementById("MainContainer").innerHTML = "";
            }
        }     
    }

    this.loadRelatedProducts = function(item){
        var items = currentYSApp.mainContainer.getCategoriesWithProducts();
        items = items.filter(function(category){ 
                    category.products = category.products.filter(function(product){ 
                                        return product.displayName == item;
                                    });
                    return  category.products != null && category.products.length > 0;
                });
        if(items != null){
            var productListTemplate = new YS.Templates.ProductList();
            var loadedTemplate = productListTemplate.getLoadedTemplate(items);
            if(loadedTemplate != null && loadedTemplate != ""){
                document.getElementById("MainContainer").innerHTML = loadedTemplate;
            }else{
                document.getElementById("MainContainer").innerHTML = "";
            }
        } 
    }

    this.checkSearchContainerStatus = function(e){
        if (!document.getElementById("SearchContainer").contains(e.target)){
            document.getElementById("SearchContainer").classList.add("invisible");
        }
    }
}