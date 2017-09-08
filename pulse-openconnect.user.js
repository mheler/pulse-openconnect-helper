// ==UserScript==
// @name          Pulse-openconnect
// @namespace     http://nalpette.io/pulse-openconnect
// @description   Shows command line instructions how to connect to Juniper Pulse Connect Secure VPN using openconnect
// @include       https://*/dana/home/index.cgi
// @grant         GM_setClipboard
// ==/UserScript==

var cookie = document.cookie.replace(/(?:(?:^|.*;\s*)DSID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
var connectStr = `sudo openconnect --proto=nc -C DSID=${cookie} ${document.domain}`;

document.getElementById("table_index_1").insertAdjacentHTML('afterEnd','<p style="margin-top: 0.5em"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAwFBMVEX59Ono1aympqj9/f3t1JF2dnfz8/PnsgK3uLuMjI5lZmnVoA4KCgrV1NaSe0tMS0zmqgDLy8ypegL+xQU2KxP9/fv5wAuxgwXpynQlJCT4+Pg4ODrm5ujMzdCNeToaGx73uwDs7Ozf39/WvYjgrBL8+vScg1FrZVo8PkKtrrRXSjMeEwPRwaSwj0TQ0tzd3eS9kyTg1sf50Ffw8/r6/f9bXWLSnAHp497ZrTf/2ASVi27AwMHdu3L/zQkAAAD///84eWF+AAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfWAgwVGzHaoBNxAAAAqElEQVQY003M1w6CQBQEUHpZ6UVYukhsiKKxo3v//68ELNl5m5PMMMwYNY8VhopNCMlTCrhVjjSVAmWZPWKRBucue4ieGO0c4fLfS5TsQSfmH0wR+Cgxye9Wxwnv89Bp+AtIhMj3YZaT7gOYA2kATNZjZ6tsB/0krGt26KHlyl4KcLo5l+MIxdRtdZDU4OXKQg/PiVVYm3NMArcSxo/rtjE4W08XzaFvbyG+EP8jeSz5AAAAAElFTkSuQmCC" style="vertical-align: text-bottom"><code id="openconnect" style="margin: 0 0.5em"></code><button id="openconnect_copy">📋 Copy</button></p>');
document.getElementById("openconnect").insertAdjacentText("beforeEnd", connectStr);
document.addEventListener("click",function() { GM_setClipboard(connectStr) });
