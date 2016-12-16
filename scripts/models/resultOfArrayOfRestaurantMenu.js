/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Map Class for the type ResultOfArrayOfRestaurantMenuFak_P0sVK:#YS.WebServices.Utility.Common.
* @class ResultOfArrayOfRestaurantMenu
*/
YS.ServiceResponses.Utility.Common.ResultOfArrayOfRestaurantMenu = function(data){
    var utility = new YS.Controllers.Utility();
    YS.ServiceResponses.Utility.Common.ResultBase.call(this, data);
    var mResultSet = utility.getValue('ResultSet', data, null);
    if(mResultSet != null){
        for (var i = 0; i < mResultSet.length; i++) {
            var result = mResultSet[i];
            this.resultSet.push(new YS.Models.Main.RestaurantMenu(result));
        }
    }
}