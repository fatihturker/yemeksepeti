/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type RestaurantMainInfo:#YS.WebServices.Service.DTO.Main.
* @class RestaurantMainInfo
*/
YS.Models.Main.RestaurantMainInfo = function(data) {
    var utility = new YS.Controllers.Utility();
    YS.Models.Main.RestaurantBase.call(this, data); 
    this.addressText = utility.getValue('AddressText', data, "");
    this.catalogName = utility.getValue('CatalogName', data, "");
    this.closeMessage = utility.getValue('CloseMessage', data, "");
    this.closedByParent = utility.getValue('ClosedByParent', data, false);
    this.definitionName = utility.getValue('DefinitionName', data, "");
    this.deliveryAreas = [];
    var mDeliveryAreas = utility.getValue('DeliveryAreas', data, null);
    if(mDeliveryAreas != null){
        for (var i = 0; i < mDeliveryAreas.length; i++) {
            var deliveryArea = mDeliveryAreas[i];
            this.deliveryAreas.push(new YS.Models.Sub.RestaurantDeliveryArea(deliveryArea));
        }
    }
    this.deliveryFee = utility.getValue('DeliveryFee', data, -1);
    this.deliveryTime = utility.getValue('DeliveryTime', data, -1);
    this.discounts = [];
    var mDiscounts = utility.getValue('Discounts', data, null);
    if(mDiscounts != null){
        for (var i = 0; i < mDiscounts.length; i++) {
            var discount = mDiscounts[i];
            this.discounts.push(new YS.Models.Sub.RestaurantDiscount(discount));
        }
    }
    this.displayName = utility.getValue('DisplayName', data, "");
    this.facebookLikeUrl = utility.getValue('FacebookLikeUrl', data, "");
    this.facebookShareUrl = utility.getValue('FacebookShareUrl', data, "");
    this.favoriteRestaurantId = utility.getValue('FavoriteRestaurantId', data, -1);
    this.flavour = utility.getValue('Flavour', data, -1);
    this.imagePath = utility.getValue('ImagePath', data, "");
    this.isAvailableForOrder = utility.getValue('IsAvailableForOrder', data, false);
    this.isFavorited = utility.getValue('IsFavorited', data, false);
    this.longTermOrderQuota = utility.getValue('LongTermOrderQuota', data, -1);
    this.longTermOrderStatus = utility.getValue('LongTermOrderStatus', data, "");
    this.longTermOrderTimeLimit = utility.getValue('LongTermOrderTimeLimit', data, -1);
    this.paymentMethods = [];
    var mPaymentMethods = utility.getValue('PaymentMethods', data, null);
    if(mPaymentMethods != null){
        for (var i = 0; i < mPaymentMethods.length; i++) {
            var paymentMethod = mPaymentMethods[i];
            this.paymentMethods.push(new YS.Models.Sub.RestaurantPaymentMethod(paymentMethod));
        }
    }
    this.primaryParentCategory = utility.getValue('PrimaryParentCategory', data, "");
    this.restaurantArea = utility.getValue('RestaurantArea', data, "");
    this.restaurantDiscountImages = utility.getValue('RestaurantDiscountImages', data, []);
    this.restaurantSubState = utility.getValue('RestaurantSubState', data, "");
    this.resturantCuisines = [];
    var mResturantCuisines = utility.getValue('ResturantCuisines', data, null);
    if(mResturantCuisines != null){
        for (var i = 0; i < mResturantCuisines.length; i++) {
            var restaurantCuisine = mResturantCuisines[i];
            this.resturantCuisines.push(new YS.Models.Sub.RestaurantCuisines(restaurantCuisine));
        }
    }
    this.serving = utility.getValue('Serving', data, -1);
    this.slug = utility.getValue('Slug', data, "");
    this.speed = utility.getValue('Speed', data, -1);
    this.supportTakeAway = utility.getValue('SupportTakeAway', data, false);
    this.supportsDelivery = utility.getValue('SupportsDelivery', data, false);
    this.totalPointCount = utility.getValue('TotalPointCount', data, -1);
    this.warnings = utility.getValue('TotalPointCount', data, []);
    this.workingHours = [];
    var mWorkingHours = utility.getValue('WorkingHours', data, null);
    if(mWorkingHours != null){
        for (var i = 0; i < mWorkingHours.length; i++) {
            var workingHour = mWorkingHours[i];
            this.workingHours.push(new YS.Models.Sub.RestaurantWorkingHour(workingHour));
        }
    }
}