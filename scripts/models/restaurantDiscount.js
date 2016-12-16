/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type RestaurantDiscount:#YS.WebServices.Service.DTO.Sub.
* @class RestaurantDiscount
*/
YS.Models.Sub.RestaurantDiscount = function(data){
    var utility = new YS.Controllers.Utility();
    this.isCampusPromotion = utility.getValue('IsCampusPromotion', data, false);
    this.name = utility.getValue('Name', data, "");
}