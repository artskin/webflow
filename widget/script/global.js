/*
 * APICloud JavaScript global
 * Copyright (c) 2017 artskin
 */
(function(window){
  apiready = function(){
    api.setRefreshHeaderInfo({
      visible: true,
      loadingImg: 'widget://image/refresh.png',
      bgColor: 'rgba(0,0,0,0)',
      textColor: 'rgba(255,255,255,0.5)',
      textDown: '下拉刷新',
      textUp: '释放刷新'
    }, function(ret, err){
          loadData();
            app();
    });
    api.addEventListener({name: 'scrolltobottom'}, function(ret, err){
        loadData();
    });
  };

})(window);
