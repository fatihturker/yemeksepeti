/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains Data Access Methods For RestaurantMainInfo
* @class RestaurantMainInfo
*/
YS.Controllers.DataAccess.RestaurantMainInfo = function() {
    this.loadRestaurantMainInfo = function(successMethod, failureMethod){
        var provider = new YS.DataProviders.RestaurantDataProvider();
        var utility = new YS.Controllers.Utility();
        var response = provider.getData();
        if(response != null){
            successMethod(response);
        }else{
            failureMethod("Restoran ana bilgileri alınamadı.");            
        }
    }
}