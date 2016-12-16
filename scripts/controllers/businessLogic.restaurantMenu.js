/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains Business Logic Methods For RestaurantMenu
* @class RestaurantMenu
*/
YS.Controllers.BusinessLogic.RestaurantMenu = function() {
    var utility = new YS.Controllers.Utility();
    this.loadRestaurantMenu = function(onSuccess, onFailure){
        var restaurantMenuDA = new YS.Controllers.DataAccess.RestaurantMenu();
        var successMethod = function(data){
            var jsonData = JSON.parse(data);
            var actualData = utility.getValue('d', jsonData, null);
            var errorMessage = "";
            if(actualData != null){
                var resultOfArrayOfRestaurantMenu = new YS.ServiceResponses.Utility.Common.ResultOfArrayOfRestaurantMenu(actualData);
                if(resultOfArrayOfRestaurantMenu != null){
                    onSuccess(resultOfArrayOfRestaurantMenu);   
                }else{
                    errorMessage = "Restoran menü bilgisi bulunamadı.";
                }
            }else{
                errorMessage = "Restoran menü bilgisi alınamadı.";
            }
            if(errorMessage != ""){
                onFailure(errorMessage);                
            }
        }
        var failureMethod = function(errorMessage){
            onFailure(errorMessage);
        }
        restaurantMenuDA.loadRestaurantMenu(successMethod, failureMethod);
    }
}