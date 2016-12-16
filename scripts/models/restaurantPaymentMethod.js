/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type RestaurantPaymentMethod:#YS.WebServices.Service.DTO.Sub.
* @class RestaurantPaymentMethod
*/
YS.Models.Sub.RestaurantPaymentMethod = function(data){
    var utility = new YS.Controllers.Utility();
    this.groupId = utility.getValue('GroupId', data, "");
    this.paymentMethodId = utility.getValue('PaymentMethodId', data, "");
    this.paymentMethodName = utility.getValue('PaymentMethodName', data, "");
    this.paymentType = utility.getValue('PaymentType', data, -1);
    this.isFastPay = utility.getValue('isFastPay', data, false);
    this.isOCC = utility.getValue('isOCC', data, false);
}