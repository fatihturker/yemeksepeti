/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains Integration Test Scenarios For RestaurantMainInfo And Relevant Components  
* @class RestaurantMenu_Product
*/
YS.Tests.DataRead.RestaurantMainInfo = function() {
    this.test_restaurantMainInfo_DataRead = function(){
        var restaurantMainInfoBL = new YS.Controllers.BusinessLogic.RestaurantMainInfo();
        var onSuccess = function(restaurantMainInfo){
            console.log(restaurantMainInfo);
        }
        var onFailure = function(errorMessage){
            console.log(errorMessage);
        }
        restaurantMainInfoBL.loadRestaurantMainInfo(onSuccess, onFailure);
    } 
}