// ==UserScript==
// @name         Google Meet Spam Bot
// @namespace    http://tampermonkey.net/
// @version      4.2
// @description  Spam any google meet with bots, chat spam added!!
// @author       GSRHackZ
// @match        https://meet.google.com/*
// @icon         https://i.ibb.co/F5BWyjw/fixed-removebg-preview.png
// @grant        none
// ==/UserScript==

let urlParams = new URLSearchParams(window.location.search);
if(urlParams.get("botting")=="true"){
    setInterval(function(){
        enter();
    },1000)
    if(urlParams.get("spam")=="true"){
        if(urlParams.get("phrase")!=="none"){
            botSay(urlParams.get("phrase"),1000)
        }
    }
}

function botSay(phrase,wait){
    setInterval(function(){
        if(document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc")[2].ariaPressed!=="true"){
            document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ JsuyRc boDUxc")[2].click()
        }
        document.getElementsByClassName("Pc9Gce Wic03c")[0].children[0].value=phrase;
        let send=document.getElementsByClassName("VfPpkd-Bz112c-LgbsSe yHy1rc eT1oJ tWDL4c Cs0vCd")[0];
        send.removeAttribute("disabled");
        send.click();
        if(document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid kNN8Bf")[0]!==undefined){
            document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid kNN8Bf")[0].click();
        }
    },wait)
}

function enter(){
    if(document.getElementsByClassName("uArJ5e UQuaGc Y5sE8d uyXBBb xKiqt")[0]!==undefined){
        document.getElementsByClassName("uArJ5e UQuaGc Y5sE8d uyXBBb xKiqt")[0].click();
    }
    if(document.getElementsByClassName("fwk7ze")[0]!==undefined){
        if(document.getElementsByClassName("fwk7ze")[0].innerText.includes("refresh")){
            location.reload();
        }
    }
    if(document.getElementsByClassName("CRFCdf")[0]!==undefined){
        location.reload();
    }
    if(document.getElementsByClassName("uArJ5e UQuaGc Y5sE8d uyXBBb xKiqt")[0]!==undefined){
        document.getElementsByClassName("uArJ5e UQuaGc Y5sE8d uyXBBb xKiqt")[0].click();
    }
    if(document.getElementsByClassName("g3VIld vdySc Up8vH J9Nfi iWO5td")[0]){
        document.getElementsByClassName("g3VIld vdySc Up8vH J9Nfi iWO5td")[0].children[3].children[0].click();
    }
}

