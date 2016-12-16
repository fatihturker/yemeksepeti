/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Contains search events for the application
* @class SearchEvents
*/
YS.App.Events.SearchEvents = function (){
    this.loadSearchContainer = function (input){
        if(input.value.length >= 3){
            var items = [];
            var yemekler = currentYSApp.subContainer.getYemekler();
            var subYemekler = yemekler.filter(function(yemekAdi){ 
                return yemekAdi.toLowerCase().indexOf(input.value.toLowerCase()) !== -1;
            });
            var restoranlar = currentYSApp.subContainer.getRestoranlar();     
            // Add if you have restaurant menu content
            // var subRestoranlar = restoranlar.filter(function(restaurantMenuContent){ 
            //     return restaurantMenuContent.toLowerCase().indexOf(input.value.toLowerCase()) !== -1;
            // });
            var subRestoranlar = null;
            if(subYemekler != null && subYemekler.length > 0){
                var item = {}
                item.title = "Yemekler";
                item.itemType = 1;
                item.options = subYemekler;
                items.push(item);
                subRestoranlar = restoranlar; //added only for showing resturant data on menu
            }
            if(subRestoranlar != null && subRestoranlar.length > 0){
                var item = {}
                item.title = "Restoranlar";
                item.itemType = 2;
                item.options = subRestoranlar;
                items.push(item);
            }
            var searchContainerTemplate = new YS.Templates.SearchContainer();
            var loadedTemplate = searchContainerTemplate.getLoadedTemplate(items);
            if(loadedTemplate != null && loadedTemplate != ""){
                document.getElementById("SearchContainer").innerHTML = loadedTemplate;
                document.getElementById("SearchContainer").classList.remove("invisible");
            }else{
                document.getElementById("SearchContainer").classList.add("invisible");
            }
        }else{
            document.getElementById("SearchContainer").classList.add("invisible");
        } 
    }
}