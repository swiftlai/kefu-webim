!function(e,t){"use strict";var i,o,s,n,a,l,r=document.title,d={x:10,y:10},c={x:0,y:0},m=document.createElement("div"),u="-新消息提醒  ",p=0,y=function(e){var t;if(e){for(var i=document.scripts,o=0,s=i.length;s>o;o++)if(i[o].src&&0<i[o].src.indexOf(e)){t=i[o].src;break}}else t=location.href;var n={};if(!t)return{str:"",json:n,domain:""};var a,l=t.indexOf("?"),r=t.indexOf("//")>-1?t.indexOf("//"):0,d=t.slice(r,t.indexOf("/",r+2)),c=t.slice(l+1).split("&");n.src=t.slice(0,l);for(var m=0,u=c.length;u>m;m++)a=c[m].split("="),n[a[0]]=a.length>1?a[1]:"";return{str:t,json:n,domain:d+"/"}},f=y("easemob.js");f.json.hide="false"===f.json.hide?!1:f.json.hide;var h=function(){i.listenToIframe(function(e){var t,i,s,n="新消息提醒";if(e.indexOf("setuser")>-1&&(t=e.split("@").length>0?e.split("@")[1]:"",e=e.split("@").length>0?e.split("@")[0]:""),e.indexOf("notify")>-1&&(n=e.slice(6),e="notify"),e.indexOf("dragready")>-1){var a=e.slice(9);c.x=isNaN(Number(a.split("&")[0]))?0:Number(a.split("&")[0]),c.y=isNaN(Number(a.split("&")[1]))?0:Number(a.split("&")[1]),e="dragready"}if(e.indexOf("setchannel")>-1&&(i=e.split("@").length>0?e.split("@")[1]:"",e=e.split("@").length>0?e.split("@")[0]:""),e.indexOf("setgroupuser")>-1){var l=e.indexOf("@emgroupuser@");t=e.slice(13,l),s=e.slice(l+13),e="setgroupuser"}switch(e){case"msgPrompt":var y,h=(r+u).split("");clearInterval(p),p=setInterval(function(){y=h.shift(),document.title=y+Array.prototype.join.call(h,""),h.push(y)},360);break;case"notify":j(f.domain+"webim/static/img/notify.png","新消息",n);break;case"recoveryTitle":clearInterval(p),document.title=r;break;case"showChat":o.style.width="400px",o.style.height="500px",o.style.right=d.x+"px",o.style.bottom=d.y+"px",o.style.cssText+="box-shadow: 0 4px 8px rgba(0,0,0,.2);border-radius: 4px;border: 1px solid #ccc\\9;";break;case"minChat":v&&clearTimeout(v),o.style.boxShadow="none",o.style.borderRadius="4px;",o.style.left="auto",o.style.right="-5px",o.style.top="auto",o.style.bottom="10px",o.style.border="none",f.json.hide?(o.style.width="12px",o.style.height="12px"):(o.style.height="37px",o.style.width="104px");break;case"setuser":Emc.setcookie("emKefuUser",t);break;case"setgroupuser":Emc.setcookie(s,t);break;case"setchannel":Emc.setcookie("emKefuChannel",i);break;case"dragready":m.style.display="block",o.style.display="none",EasemobWidget.utils.on(document,"mousemove",w);break;case"dragend":E()}}),e.easemobIM=function(t){if(EasemobWidget.utils.isMobile){var o=document.getElementById(s),n=e.event.srcElement||e.event.target;t?(n.setAttribute("href",o.getAttribute("src")+"&emgroup="+t),n.setAttribute("target","_blank")):(n.setAttribute("href",o.getAttribute("src")),n.setAttribute("target","_blank"))}else if(t){var a=Emc.getcookie(t);i.sendToIframe("emgroup@"+a+"@emgroupuser@"+t)}else i.sendToIframe("imclick")}},g=function(){if(o=/MSIE (6|7|8)/.test(navigator.userAgent)?document.createElement('<iframe name="'+(new Date).getTime()+'">'):document.createElement("iframe"),s="EasemobIframe"+(new Date).getTime(),o.id=s,o.name=(new Date).getTime(),o.frameBorder=0,o.allowTransparency="true",o.style.cssText=["z-index:16777269;","overflow:hidden;","position:fixed;","bottom:10px;","right:-5px;","border:none;","width:400px;","height:0;","display:none;","transition:all .01s;"].join(""),m.style.cssText=["display:none;","cursor:move;","z-index:16777270;","position:fixed;","bottom:10px;","right:10px;","border:none;","width:400px;","height:500px;","border-radius:4px;","box-shadow: 0 4px 8px rgba(0,0,0,.2);","border-radius: 4px;"].join(""),m.style.background="url("+f.domain+"webim/static/img/drag.png) no-repeat",l="initdata:"+f.domain+"webim/im.html?tenantId="+f.json.tenantId+(f.json.hide?"&hide=true":"")+(f.json.color?"&color="+f.json.color:"")+(f.json.preview?"&preview="+f.json.preview:"")+(n?"&c="+n:"")+(a?"&u="+a:"")+"&time="+(new Date).getTime(),o.src=f.domain+"webim/im.html?tenantId="+f.json.tenantId,f.json.hide?(o.style.height="12px",o.style.width="12px"):(o.style.height="37px",o.style.width="104px"),EasemobWidget.utils.isMobile&&(o.style.cssText+="left:0;bottom:0",o.style.width="100%"),f.json&&f.json.preview){var e=document.getElementById(f.json.previewid);e?e.appendChild(o):document.body.appendChild(o)}else document.body.appendChild(m),document.body.appendChild(o);o.readyState?o.onreadystatechange=function(){("loaded"===o.readyState||"complete"===o.readyState)&&(this.style.display="block",i=new EmMessage(s),h(),i.sendToIframe(l))}:o.onload=function(){this.style.display="block",i=new EmMessage(s),h(),i.sendToIframe(l)}},b=document.createElement("script");b.src=f.domain+"webim/static/js/easemob.utils.js",(document.head||document.getElementsByTagName("head")[0]).appendChild(b),b.readyState?b.onreadystatechange=function(){("loaded"==b.readyState||"complete"==b.readyState)&&x()}:b.onload=function(){x()};var x=function(){a=Emc.getcookie("emKefuUser"),n=Emc.getcookie("emKefuChannel"),g(),EasemobWidget.utils.on(m,"mouseup",E),k()},v=0,w=function(t){var i=(e.event||t,document.documentElement.clientWidth),o=document.documentElement.clientHeight,s=i-t.clientX-400+c.x,n=o-t.clientY-500+c.y;t.clientX-c.x<=0?s=i-400:t.clientX+400-c.x>=i&&(s=0),t.clientY-c.y<=0?n=o-500:t.clientY+500-c.y>=o&&(n=0),m.style.left="auto",m.style.top="auto",m.style.right=s+"px",m.style.bottom=n+"px",d={x:s,y:n},clearTimeout(v),v=setTimeout(E,500)},E=function(){EasemobWidget.utils.remove(document,"mousemove",w),o.style.left="auto",o.style.top="auto",o.style.right=d.x+"px",o.style.bottom=d.y+"px",m.style.left="auto",m.style.top="auto",m.style.right=d.x+"px",m.style.bottom=d.y+"px",m.style.display="none",o.style.display="block",i.sendToIframe("dragend")},k=function(){EasemobWidget.utils.on(e,"resize",function(){var e=document.documentElement.clientWidth,t=document.documentElement.clientHeight,i=Number(o.style.right.slice(0,-2)),s=Number(o.style.bottom.slice(0,-2));400>e?(o.style.left="auto",o.style.right=0,m.style.left="auto",m.style.right=0):400>e-i?(o.style.right=e-400+"px",o.style.left=0,m.style.right=e-400+"px",m.style.left=0):(o.style.left="auto",m.style.left="auto"),500>t?(o.style.top="auto",o.style.bottom=0):500>t-s?(o.style.bottom=t-500+"px",o.style.top=0):o.style.top="auto"})},j=function(){var t=0;return function(i,o,s){if(0===t){t=setTimeout(function(){t=0},3e3),i=i||"",o=o||"",s=s||"";try{if(e.Notification)if("granted"===Notification.permission){var n=new Notification(o,{icon:i,body:s});setTimeout(function(){n.close()},3e3)}else Notification.requestPermission()}catch(a){}}}}()}(window,void 0);