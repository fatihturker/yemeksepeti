/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains Data Access Methods For RestaurantMenu
* @class RestaurantMenu
*/
YS.Controllers.DataAccess.RestaurantMenu = function() {
    this.loadRestaurantMenu = function(successMethod, failureMethod){
        var provider = new YS.DataProviders.RestaurantMenuDataProvider();
        var utility = new YS.Controllers.Utility();
        var response = provider.getData();
        if(response != null){
            successMethod(response);
        }else{
            failureMethod("Restoran menü bilgisi alınamadı.");            
        }
    }
}