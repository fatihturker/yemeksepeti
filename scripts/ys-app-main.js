/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains main operations for app load.
* @class Main
*/
YS.App.Main = function(){
    this.mainContainer = new YS.Containers.Main();
    this.subContainer = new YS.Containers.Sub();
    this.events = {}
    this.events.searchEvents =  new YS.App.Events.SearchEvents();
    this.events.pagingEvents =  new YS.App.Events.PagingEvents();
    this.events.basketEvents =  new YS.App.Events.BasketEvents();
    this.loadRestoranData = function(){
        var restaurantMainInfoBL = new YS.Controllers.BusinessLogic.RestaurantMainInfo();
        var lcMainContainer = this.mainContainer;
        var lcSubContainer = this.subContainer;
        var onSuccess = function(restaurantMainInfo){
            lcMainContainer.setRestoranData(restaurantMainInfo);
            lcSubContainer.loadRestoranlar(restaurantMainInfo);
        }
        var onFailure = function(errorMessage){
            console.log(errorMessage);
        }
        restaurantMainInfoBL.loadRestaurantMainInfo(onSuccess, onFailure);
    };

    this.loadMenuData = function(){
        var restaurantMenuBL = new YS.Controllers.BusinessLogic.RestaurantMenu();
        var lcMainContainer = this.mainContainer;
        var lcSubContainer = this.subContainer;
        var onSuccess = function(restaurantMenu){
            lcMainContainer.setMenuData(restaurantMenu);
            lcSubContainer.loadYemekler(restaurantMenu);
        }
        var onFailure = function(errorMessage){
            console.log(errorMessage);
        }
        restaurantMenuBL.loadRestaurantMenu(onSuccess, onFailure);
    }
}
