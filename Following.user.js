// ==UserScript==
// @name         Following
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lokin
// @match        https://www.instagram.com/*/?following
// ==/UserScript==

    var list=document.getElementsByTagName("a");
    var i=0;
    var j=0;
    var link=[]
	var following;
    var following_list=[];

setTimeout(function(){
    'use strict';

    console.log(list)
    console.log(list.length)
    for(i=0;i<list.length;i++)
    {
        if(list[i].getAttribute("href").endsWith("following/"))
           {
           following=list[i].getAttribute("href")
               list[i].click();
               setTimeout(function(){
                   var ele = document.querySelectorAll('[role="dialog"]')
                   console.log(ele[0].childNodes[2])
                   var button = document. createElement("button");
                   button. innerHTML = "Click When Done Scrolling";
                   ele[0].childNodes[0].appendChild(button);

                   button.onclick=function(){
                       following_list=[];
                   var following_list_raw=ele[0].childNodes[2].childNodes[0].childNodes[0].childNodes;
                       for (j=0;j<following_list_raw.length;j++)
                       {
                           following_list.push(following_list_raw[j].outerText)
                       }
                   var list=[];
                       var names;
                   following_list.forEach(x=>
                                          {
                       names=x.split("\n");

                                              list.push(names[0]);
                                                          }

                                                         );
                   console.log(list);
                       localStorage.setItem("following", list);

                   }
               },5000);
           }

    }

console.log(link)

    console.log(following)
    // Your code here...
},5000)
