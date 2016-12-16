/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains Common Utility Methods. You need to import this file if you are using models.
* @class Utility
*/
YS.Controllers.Utility = function() {
    this.getValue = function(propertyName, dataObject, defaultValue){
        return (propertyName in dataObject) ? dataObject[propertyName] : defaultValue;
    }
}