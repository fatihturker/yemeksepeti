/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Base class representing service response result.
* @class ResultBase
*/
YS.ServiceResponses.Utility.Common.ResultBase = function(data){
    var utility = new YS.Controllers.Utility();
    this.errorCode = utility.getValue('ErrorCode', data, -1);
    this.errorType = utility.getValue('ErrorType', data, -1);
    this.friendlyNotification = utility.getValue('FriendlyNotification', data, "");
    this.notification = utility.getValue('Notification', data, "");
    this.success = utility.getValue('Success', data, false);
    this.totalPageCount = utility.getValue('TotalPageCount', data, -1);
    this.totalRowCount = utility.getValue('TotalRowCount', data, -1);
    this.ysVersion = utility.getValue('YsVersion', data, "");
    this.resultSet = [];
}