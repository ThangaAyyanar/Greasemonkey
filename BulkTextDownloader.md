
- Consider you have to download text file from webpage, where each page can be reached by id.
- Consideration
    * The download the data form: BASE_URL+ID
    
    once you done that, feed it to **initiater**
    
 - The initiater will open a tab and hence the downloader script will be started and start downloading the data.

initiater.js

```js
// ==UserScript==
// @name     starter
// @version  1
// @grant    none
// ==/UserScript==





function changelocation(url){
    console.log("Replacing url");
  window.open(url, '_blank');
 //location.replace(url); 
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function initiate() {
  console.log("Grease Monkey script - Initiator loaded");
  
  var baseurl = "<BASEURL>";
	var issues = ["<IDS>"]; //array of ids
  
	for(var i=0;i<issues.length;i++){
 		var nextUrl = baseurl+issues[i];
        console.log(nextUrl);
        changelocation(nextUrl);
        await sleep(10000);
	}

  console.log("Grease Monkey script - Initiator Completed");

  await magic();
}

initiate();
```

### Downloader_script.js
```js
// ==UserScript==
// @name     downloader
// @version  1
// @grant    none
// ==/UserScript==

// Download log logic

async function magic(){
  
	var title= document.getElementById('selectedfeedid').innerText.substring(1);
  
  var consoleButton = document.getElementById('consolelogbtn')
    
 	if(consoleButton){
    
    consoleButton.click()

  	await sleep(7000);
  
  	console.log("Collecting console data");
  	var consoleLog=document.getElementsByClassName('consolelogscnt')[0].innerHTML;
  
		var a = document.createElement('a');
		a.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(consoleLog);
		a.download = title+'.txt';
		document.getElementsByTagName('body')[0].appendChild(a);
		a.click();
    
    await sleep(1000);
    window.close();
  }
  else{
    console.log("Failed to find console Button");
    await sleep(1000);
    window.close();
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function initiate() {
  console.log("Grease Monkey script - console log download script loaded");
  await sleep(5000);
  await magic();
}

initiate();
```
