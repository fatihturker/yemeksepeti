/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type RestaurantArea:#YS.WebServices.Service.DTO.Sub.
* @class RestaurantDeliveryArea
*/
YS.Models.Sub.RestaurantDeliveryArea = function(data) {
    var utility = new YS.Controllers.Utility();
    this.areaId = utility.getValue('AreaId', data, "");
    this.areaName = utility.getValue('AreaName', data, "");
    this.areaType = utility.getValue('AreaType', data, "");
    this.deliveryFee = utility.getValue('DeliveryFee', data, -1);
    this.deliveryTime = utility.getValue('DeliveryTime', data, -1);
    this.isSelectedArea = utility.getValue('IsSelectedArea', data, false);
    this.minimumPrice = utility.getValue('MinimumPrice', data, -1);
}