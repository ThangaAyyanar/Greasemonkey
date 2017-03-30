// ==UserScript==
// @name        aaa
// @namespace   thangaayyanar.blogspot.com
// @include     about:newtab
// @version     1
// @grant       none
// ==/UserScript==
var soln="hellog";
function hello(count){
  solution(document.getElementById("solutionpanel").innerHTML,false,++count);
}
function solution(datam,flag,count){
  
  if(flag){
      var str="qlist_tbl:"+count+":j_id_du";
      try{
        document.getElementById(str).click();
      }catch(err){
        magic(true,"",count+5);
      }
      setTimeout(function(){
        if(count<5)
         hello(count);  
      },1000)
    }else{ 
      if((count%5)==1)
        soln=datam;
      else
        soln+=datam;
      //alert(soln);
      if(count%5==0){
         alert("in");
          magic(false,soln,count);
       }
      solution(soln,true,count);
    }
     //console.log(soln);
     //soln="helloworld";
   
    //unsafeWindow.count+=5;
}
function magic(flag,datam,count){
  //alert("hello");
  //if (unsafeWindow.count == undefined) {
   //unsafeWindow.count = 0;
  //}
  if(count>70)
    return;
  if(flag){
    solution("",true,count);
  }else{
  var data=document.getElementById("qlist_tbl_data").innerHTML;
  data+=datam;
  //alert("log"+soln);
  var a = document.createElement('a');
  //a.href = 'data:application/csv;charset=utf-8,' + encodeURIComponent(data);
  a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
  //supported by chrome 14+ and firefox 20+
  a.download = 'data.html';
  //needed for firefox
  document.getElementsByTagName('body')[0].appendChild(a);
  //supported by chrome 20+ and firefox 5+
  a.click();
  }
}
(function(){
document.addEventListener('keydown', function(e) {
  // pressed alt+g
  if (e.keyCode == 71 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
   magic(true,"",0);
  }
}, false);
})();
