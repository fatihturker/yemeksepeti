/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* Application load
*/
(function() {
    currentYSApp = new YS.App.Main();
    currentYSApp.loadRestoranData();
    currentYSApp.loadMenuData();
})();