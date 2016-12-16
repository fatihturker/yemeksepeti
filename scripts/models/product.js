/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type Product:#YS.WebServices.Service.DTO.Main.
* @class Product
*/
YS.Models.Main.Product = function(data){
    var utility = new YS.Controllers.Utility();
    this.alternativeDisplayChannels = utility.getValue('AlternativeDisplayChannels', data, "");
    this.baseCatalogName = utility.getValue('BaseCatalogName', data, "");
    this.description = utility.getValue('Description', data, "");
    this.displayName = utility.getValue('DisplayName', data, "");
    this.extendedPrice = utility.getValue('ExtendedPrice', data, "");
    this.hasPromotion = utility.getValue('HasPromotion', data, false);
    this.imagePath = utility.getValue('ImagePath', data, "");
    this.isSellAlone = utility.getValue('IsSellAlone', data, false);
    this.isTakeAwayOnly = utility.getValue('IsTakeAwayOnly', data, "");
    this.listPrice = utility.getValue('ListPrice', data, "");
    this.productGroup = utility.getValue('ProductGroup', data, "");
    this.productId = utility.getValue('ProductId', data, "");
    this.productIsOpen = utility.getValue('ProductIsOpen', data, "");
    this.showOnlyInThisApplication = utility.getValue('ShowOnlyInThisApplication', data, "");
}