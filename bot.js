// ==UserScript==
// @name         Google Meet Spam Bot
// @namespace    http://tampermonkey.net/
// @version      3.1
// @description  Spam any google meet with bots, chat spam added!!
// @author       GSRHackZZ
// @match        https://meet.google.com/*
// @icon         https://i.ibb.co/F5BWyjw/fixed-removebg-preview.png
// @grant        none
// ==/UserScript==

window.addEventListener("keyup",function(evt){
    let dataSet = {"link":"","bots":"","spam":"Inactive","phrase":"none"}
    if(evt.ctrlKey&&evt.altKey&&evt.keyCode==66){
        dataSet.link=location.href;
        dataSet.bots = prompt(`How many bots would you like to spam ${dataSet.link}? Recommended Max : 15 or your browser may crash ☠`)
        if(!isNaN(dataSet.bots)){
            let spam = prompt(`ChatSpam would spam your google meets chat with whatever phrase you would like. Would you like to activate ChatSpam? If yes please write yes,if no write nothing and continue...`)
            if(spam.trim().length>0){
                if(spam.toLowerCase().includes("yes")){
                    let phrase = prompt("What phrase would you like to be spammed?")
                    if(phrase.trim().length==0){
                        alert("Please refresh page and try again. You didn't write down a phrase....")
                    }
                    else{
                        dataSet.phrase=phrase
                        dataSet.spam="Active"
                    }
                }
            }
            let check = confirm(`Here's your bot request:\nLink: ${dataSet.link}\nBot-Count: ${dataSet.bots}\nChatSpam: ${dataSet.spam}\nPhrase: ${dataSet.phrase}\n\nPlease click ok to start botting!!`)
            if(check){
                let spam=false;
                if(dataSet.spam=="Active"){
                    spam=true;
                }
                let prm;
                for(let i=0;i<dataSet.bots;i++){
                    if(dataSet.link.includes("?")){
                        prm = "&botting"
                    }
                    else{
                        prm = "?botting"
                    }
                    window.open(dataSet.link+`${prm}=true&spam=${spam}&phrase=${dataSet.phrase}&#BOT_${i+1}`);
                }
            }
        }
        else{
            alert("Please refresh page and try again. You didn't write down a number....")
        }
    }
})

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
        document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid foXzLb ")[1].click();
        document.getElementsByClassName("KHxj8b tL9Q4c")[0].value=phrase;
        let send=document.getElementsByClassName("uArJ5e Y5FYJe cjq2Db IOMpW Cs0vCd RDPZE")[0];
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

