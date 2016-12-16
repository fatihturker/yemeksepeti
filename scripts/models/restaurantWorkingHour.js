/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type RestaurantWorkingHour:#YS.WebServices.Service.DTO.Sub.
* @class RestaurantWorkingHour
*/
YS.Models.Sub.RestaurantWorkingHour = function(data){
    var utility = new YS.Controllers.Utility();
    this.dayOfWeek = utility.getValue('DayOfWeek', data, -1);
    this.isToday = utility.getValue('IsToday', data, false);
    this.workingHours = utility.getValue('WorkingHours', data, []);
}