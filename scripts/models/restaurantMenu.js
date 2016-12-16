/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type RestaurantMenu:#YS.WebServices.Service.DTO.Main.
* @class RestaurantMenu
*/
YS.Models.Main.RestaurantMenu = function(data) {
    var utility = new YS.Controllers.Utility();
    YS.Models.Main.RestaurantBase.call(this, data);    
    this.categoryDisplayName = utility.getValue('CategoryDisplayName', data, "");
    this.description = utility.getValue('Description', data, "");
    this.extendedPrice = utility.getValue('ExtendedPrice', data, -1);
    this.isTopSoldMenu = utility.getValue('IsTopSoldMenu', data, false);
    this.price = utility.getValue('Price', data, -1);
    this.products = [];
    var mProducts = utility.getValue('Products', data, null);
    if(mProducts != null){
        for (var i = 0; i < mProducts.length; i++) {
            var product = mProducts[i];
            this.products.push(new YS.Models.Main.Product(product));
        }
    }
}