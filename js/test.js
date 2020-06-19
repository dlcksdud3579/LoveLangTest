$(document).ready(function(){
    var data= readTextFile("./rsrc/test.txt");
    makeQ(data)
});

function readTextFile(file) {
    var allText
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
    if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                
            }
        }
    };
    rawFile.send(null);
    return allText;
}

function makeQ(data)
{
    var dataArr =data.split("\n");
    
    for(var i = 0; i<60;i+=2)
    {
        var temp =  dataArr[dataArr[i]]
        $("#q"+(i/2+1)+"-1").val(dataArr[i].charAt(dataArr[i].length-1));
        $("[for='q"+(i/2+1)+"-1']").text(dataArr[i]);
        $("#q"+(i/2+1)+"-2").val(dataArr[i+1].charAt(dataArr[i+1].length-1));
        $("[for='q"+(i/2+1)+"-2']").text(dataArr[i+1]);
    }
    
}

function result()
{
    var A=0,B=0,C=0,D=0,E=0;
    for(var i = 0; i<30;i+=1)
    {
       var temp  = $("input[name=q"+(i+1)+"]:checked").val();
        switch(temp)
        {
            case 'A':
                A++;
                break;
            case 'B':
                B++;
            break;
            case 'C':
                C++;
            break;
            case 'D':
                D++;
            break;
            case 'E':
                E++;
            break;
                    
        }
    }
    location.href='result.html?A='+A+'&B='+B+'&C='+C+'&D='+D+'&E='+E;
        
}
