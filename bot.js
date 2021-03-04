// ==UserScript==
// @name         Google Meet Bot
// @namespace    http://tampermonkey.net/
// @version      2.0
// @description  Spam any google meet class
// @author       GSRHackZ
// @match        *://*/*
// @icon         https://www.flaticon.com/svg/static/icons/svg/939/939840.svg
// @grant        none
// @license                  MIT
// @compatible               chrome
// @compatible               firefox
// @compatible               opera
// @compatible               safari
// ==/UserScript==

if(location.href.includes("https://meet.google.com")){
    if(!location.href.includes("#BOT")){
        document.body.addEventListener("keyup",function(evt){
            if(evt.keyCode==192){
                let botCount=prompt("How many bots would you like to activate? *Enter in number format only* Recommended : less than 15");
                let link=prompt("Enter link bots should hijack; *Remember to use an email other than your school email!!*");
                let phrase=prompt("What would you like the robot to keep spamming in chat?");
                if(botCount.trim().length==0||link.trim().length==0||phrase.trim().length==0){
                    alert("something is missing, please try again...🤔")
                }
                else{
                    let ask=confirm(`Please confirm by clicking ok...\nbotCount = ${botCount}\nlink = ${link}\nSpam Msg = ${phrase}`);
                    if(ask){
                        localStorage.setItem("spamMsg",phrase);
                        for(let i=0;i<botCount;i++){
                            window.open(link+"#BOT"+Number(i+1));
                        }
                    }
                    else{
                        alert("alright, give it another go...😊")
                    }
                }
            }

        })}
    else{
        setInterval(function(){
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

            let phrase=localStorage.getItem("spamMsg");
            botSay(phrase)
        },1000)
    }
}

function botSay(phrase){
    document.getElementsByClassName("uArJ5e UQuaGc kCyAyd QU4Gid foXzLb ")[1].click();
    document.getElementsByClassName("KHxj8b tL9Q4c")[0].value=phrase;
    let send=document.getElementsByClassName("uArJ5e Y5FYJe cjq2Db IOMpW Cs0vCd RDPZE")[0];
    send.setAttribute("aria-disabled",false);
    send.click();
}


