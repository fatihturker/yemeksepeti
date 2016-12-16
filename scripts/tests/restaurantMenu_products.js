/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains Integration Test Scenarios For RestaurantMenu And Product 
* @class RestaurantMenu_Product
*/
YS.Tests.DataRead.RestaurantMenu_Product = function() {
    this.test_restaurantMenu_product_DataRead = function(){
        var restaurantMenuBL = new YS.Controllers.BusinessLogic.RestaurantMenu();
        var onSuccess = function(restaurantMenu){
            console.log(restaurantMenu);
        }
        var onFailure = function(errorMessage){
            console.log(errorMessage);
        }
        restaurantMenuBL.loadRestaurantMenu(onSuccess, onFailure);
    } 
}