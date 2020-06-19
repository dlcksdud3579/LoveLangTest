$(document).ready(function(){
    var getParam = function(key){
        var _parammap = {};
        document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
            function decode(s) {
                return decodeURIComponent(s.split("+").join(" "));
            }
 
            _parammap[decode(arguments[1])] = decode(arguments[2]);
        });
 
        return _parammap[key];
    };
 
    var data = [
        {rname:"인정하는 말", name:'A',value: getParam('A')},
        {rname:"함께하는 시간",name:'B' ,value: getParam('B')},
        {rname:"선물",name:'C' ,value: getParam('C')},
        {rname:"봉사",name:'D' ,value: getParam('D')},
        {rname:"스킨쉽 ",name:'E' ,value: getParam('E')}
    ]
    
    $("#A").append(data[0]['value']);
    $("#B").append(data[1]['value']);
    $("#C").append(data[2]['value']);
    $("#D").append(data[3]['value']);
    $("#E").append(data[4]['value']);
    
    
     $("#radar").attr("src","http://chart.apis.google.com/chart?cht=r&chtt=사랑의언어&chs=500x500&chco=FF0000&chd=t:"+data[0]['value']*8+","+data[1]['value']*8+","+data[2]['value']*8+","+data[3]['value']*8+","+data[4]['value']*8+","+data[0]['value']*8+"&chl=인정하는말|함께하는시간|선물|봉사|스킨쉽&chls=2.0,1.0,0.0&chm=B,FF000050,0,1.0,13.0");
    
    data.sort(function(a,b){
        return b.value - a.value;
    })
   $('#n1').append(data[0]['rname'])
   $('#n2').append(data[1]['rname'])
    
    
});