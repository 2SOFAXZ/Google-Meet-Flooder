// ==UserScript==
// @name         Google Meet Spam Bot
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Spam any google meet with bots, chat spam added!!
// @author       GSRHackZZ
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
        let send=document.getElementsByClassName("uArJ5e Y5FYJe cjq2Db IOMpW Cs0vCd")[0];
        send.setAttribute("aria-disabled",false);
        send.click();
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
}

