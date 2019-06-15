// ==UserScript==
// @name         notfollowing
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Lokin
// @match        https://www.instagram.com/*/?notfollowing
// @grant        none
// ==/UserScript==

(function() {
    var followers=localStorage.Followers.split(",");
    var following=localStorage.following.split(",");
    var nonf_list=[];
    var i=0;
    followers.forEach(x=>{for(i=0;i<following.length;i++){if(x==following[i]){following[i]="Removed"}}});
    following.forEach(x=>{if(x!="Removed"){nonf_list.push("www.instagram.com/"+x)}});
    console.log(nonf_list);
})();