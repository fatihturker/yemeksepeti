/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains Business Logic Methods For RestaurantMainInfo
* @class RestaurantMainInfo
*/
YS.Controllers.BusinessLogic.RestaurantMainInfo = function() {
    var utility = new YS.Controllers.Utility();
    this.loadRestaurantMainInfo = function(onSuccess, onFailure){
        var restaurantMainInfoDA = new YS.Controllers.DataAccess.RestaurantMainInfo();
        var successMethod = function(data){
            var jsonData = JSON.parse(data);
            var actualData = utility.getValue('d', jsonData, null);
            var errorMessage = "";
            if(actualData != null){
                var resultOfRestaurantMainInfo = new YS.ServiceResponses.Utility.Common.ResultOfRestaurantMainInfo(actualData);
                if(resultOfRestaurantMainInfo != null){
                    onSuccess(resultOfRestaurantMainInfo);   
                }else{
                    errorMessage = "Restoran ana bilgileri bulunamadı.";
                }
            }else{
                errorMessage = "Restoran ana bilgileri alınamadı.";
            }
            if(errorMessage != ""){
                onFailure(errorMessage);                
            }
        }
        var failureMethod = function(errorMessage){
            onFailure(errorMessage);
        }
        restaurantMainInfoDA.loadRestaurantMainInfo(successMethod, failureMethod);
    }
}