// ==UserScript==
// @name        aaa
// @namespace   thangaayyanar.blogspot.com
// @include     about:newtab
// @version     1
// @grant       none
// ==/UserScript==
//@require https://raw.githubusercontent.com/eligrey/FileSaver.js/master/FileSaver.js

function magic(){
  alert("hello");
  
  /* this code is under construction
  if (unsafeWindow.count == undefined) {
   unsafeWindow.count = 0;
  }
  var data=document.getElementById("qlist_tbl_data").innerHTML;
  for(i=unsafeWindow.count;i<unsafeWindow.count+5;i++){
    var str="qlist_tbl:"+i+":j_id_du";
    data+=document.getElementById(str).click();
    data+=document.getElementById("solutionpanel").innerHTML;
    delay(200);
  }
  unsafeWindow.count+=5;
  */
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
(function(){
document.addEventListener('keydown', function(e) {
  // pressed alt+g
  if (e.keyCode == 71 && !e.shiftKey && !e.ctrlKey && e.altKey && !e.metaKey) {
   magic();
  }
}, false);
})();
