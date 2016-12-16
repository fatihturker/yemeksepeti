/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type RestaurantCuisines:#YS.WebServices.Service.DTO.Sub.
* @class RestaurantCuisines
*/
YS.Models.Sub.RestaurantCuisines = function(data){
    var utility = new YS.Controllers.Utility();
    this.groupId = utility.getValue('GroupId', data, "");
    this.imagePath = utility.getValue('ImagePath', data, "");
    this.isChainCuisine = utility.getValue('IsChainCuisine', data, false);
    this.name = utility.getValue('Name', data, "");
    this.slug = utility.getValue('Slug', data, "");
}