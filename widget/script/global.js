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

var pro_list = new Vue({
    el:'#pro_list',
    data:{
        title:'Vue + axios',
				apiUrl:'http://101.132.227.142/product/list',
        limit:'5',
        totalPage:'',
        type:1,
        curPage: 1,
        loading : true,
        loadmore : '1',
        item:'loading'
    },
    methods:{
      init: function(){
        var self = this;
				if(self.type == 1){
						self.apiUrl = '../api/prolist.json';
				}
        self.loadmore = '2';
        axios.post(pro_list.apiUrl,{
            type: pro_list.type,
            curPage: pro_list.curPage,
            limit: pro_list.limit
          })
          .then(function (response) {
                self.loading = false;
                console.log("loadmore----"+self.loadmore);
                //pro_list.loadmore = false;
                //self.item  = response.data.data;
                if(response.data.code == 200){
                  	console.log("当前页码："+pro_list.curPage);
                  	self.totalPage = response.data.data.totalPage;
										console.log("总页码："+pro_list.totalPage);

                      if(pro_list.curPage == 1){
                          self.item = response.data.data;
                      }else if(pro_list.curPage < self.totalPage){
													if(self.type == 1){
															for(var i=2;i<response.data.data.list.length;i++){
																	self.item.list.push(response.data.data.list[i]);
															}
													}

	                        for(var i=0;i<response.data.data.list.length;i++){
	                            self.item.list.push(response.data.data.list[i]);
	                        }
	                        console.log("数据条数====："+self.item.list.length);
                          //self.item = response.data.data;
                      }else{
													self.loadmore = '3';
											}

											if(pro_list.curPage < self.totalPage){
												pro_list.curPage += 1;
											}

                  }else{
                    self.loadmore = '3';
                      // api.toast({
                      //     msg: response.data.msg,
                      //     duration: 2000,
                      //     location: 'bottom'
                      // });
                  }

          })
          .catch(function (error) {
              self.loading = false;
              //alert("接口异常:" + error);
          });
      }
    }
});

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
