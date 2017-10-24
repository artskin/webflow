/*
 * APICloud JavaScript global
 * Copyright (c) 2017 artskin
 */
(function(window){


})(window);

apiready = function(){
  
};

function toWeb(obj){
    var url = $api.attr(obj,'data-url') ||'';
    var title = $api.attr(obj,'data-title');
    var frameName = $api.attr(obj,'data-frameName');
    console.log(title,url)
    var options = {
            title: title,
            url: url,
            frameName: frameName
        };
    options = JSON.stringify(options);

    // api.alert({msg:options});
    var str = 'indexToWeb('+options+')';
    api.execScript({
        name: 'root',
        script: str
    });
};
