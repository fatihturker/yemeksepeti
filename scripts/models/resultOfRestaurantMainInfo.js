/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type ResultOfRestaurantMainInfoFak_P0sVK:#YS.WebServices.Utility.Common.
* @class ResultOfRestaurantMainInfo
*/
YS.ServiceResponses.Utility.Common.ResultOfRestaurantMainInfo = function(data){
    var utility = new YS.Controllers.Utility();
    YS.ServiceResponses.Utility.Common.ResultBase.call(this, data);
    var mResultSet = utility.getValue('ResultSet', data, null);
    if(mResultSet != null){
        this.resultSet.push(new YS.Models.Main.RestaurantMainInfo(mResultSet));
    }
}