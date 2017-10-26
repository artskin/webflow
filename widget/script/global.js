/*
 * APICloud JavaScript global
 * Copyright (c) 2017 artskin
 */
(function(window){


})(window);

var isViewOpened = false;
var X5broser = null;

apiready = function(){



};


function showBrowser(obj){
	console.log("obj→："+$api.attr(obj,'data-url') ||'');
		var iurl = $api.attr(obj,'data-url') ||'';
		//iurl = 'index_frm.html';
		X5broser.open({
			url: iurl,
			progress:{
				color:'#ff7e21'
			},
			titleBar:{
				visible:true,
				bg:'#fc6900',
				textColor:'#fff'
			}
		}, function(ret){
			console.log(JSON.stringify(ret));
		});
}

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
