// ==UserScript==
// @name         followers
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lokin
// @match        https://www.instagram.com/*/?followers
// @grant        none
// ==/UserScript==
    var list=document.getElementsByTagName("a");
    var i=0;
    var j=0;
    var link=[]
	var followers;
    var followers_list=[];

setTimeout(function(){
    'use strict';

    console.log(list)
    console.log(list.length)
    for(i=0;i<list.length;i++)
    {
        if(list[i].getAttribute("href").endsWith("followers/"))
           {
           followers=list[i].getAttribute("href")
               list[i].click();
               setTimeout(function(){
                   var ele = document.querySelectorAll('[role="dialog"]')
                   console.log(ele[0].childNodes[1])
                   var button = document. createElement("button");
                   button. innerHTML = "Click When Done Scrolling";
                   ele[0].childNodes[0].appendChild(button);

                   button.onclick=function(){
                       followers_list=[];
                   var followers_list_raw=ele[0].childNodes[1].childNodes[0].childNodes[0].childNodes;
                       for (j=0;j<followers_list_raw.length;j++)
                       {
                           followers_list.push(followers_list_raw[j].outerText)
                       }
                       var names;
                       var list=[];
                   followers_list.forEach(x=>
                                          {
                       names=x.split("\n");

                                              list.push(names[0]);
                                                          }

                                                         );
                   console.log(list);
                       localStorage.setItem("Followers", list);



                   }
               },5000);
           }

    }

console.log(link)
    console.log(followers)

    // Your code here...
},5000)
