/*
* @author: Fatih Türker <fatihturker35@gmail.com>
* @classdesc Search container template that creates a search container from data.
* @class SearchContainer
*/
YS.Templates.SearchContainer = function(){
    this.getItem = function(fields) {
        return '<ul class="item">{{Fields}}</ul>'.replace("{{Fields}}", fields);
    }
    this.getTitleItem = function(title){
        return '<li class="title">{{Title}}</li>'.replace("{{Title}}", title);
    }
    this.getOptionItem = function(option, itemType){
        return ('<li class="option" onclick="currentYSApp.events.pagingEvents.filterMenu(this,' + itemType + ')">{{Option}}</li>').replace("{{Option}}", option);
    }
    this.getLoadedTemplate = function(items){
        var template = "";
        if(items != null){
            for(var i = 0; i < items.length; i++){
                var item = items[i];
                var fields = "";
                fields += this.getTitleItem(item.title);
                if(item.options != null){
                    for(var j = 0; j < item.options.length; j++){
                        var option = item.options[j];
                        fields += this.getOptionItem(option, item.itemType);
                    }
                }  
                template += this.getItem(fields);    
            }
        }
        return template;
    }
}