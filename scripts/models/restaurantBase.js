/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Base class representing Restaurant's basic info.
* @class RestaurantBase
*/
YS.Models.Main.RestaurantBase = function(data){
    var utility = new YS.Controllers.Utility();
    this.categoryName = utility.getValue('CategoryName', data, "");
    this.isOpen = utility.getValue('IsOpen', data, false);
    this.oid = utility.getValue('Oid', data, -1);
}