(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,i="millisecond",s="second",a="minute",n="hour",r="day",o="week",c="month",d="quarter",f="year",l="date",p="Invalid Date",b=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,h={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],i=e%100;return"["+e+(t[(i-20)%10]||t[i]||t[0])+"]"}},v=function(e,t,i){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(i)+e},m={s:v,z:function(e){var t=-e.utcOffset(),i=Math.abs(t),s=Math.floor(i/60),a=i%60;return(t<=0?"+":"-")+v(s,2,"0")+":"+v(a,2,"0")},m:function e(t,i){if(t.date()<i.date())return-e(i,t);var s=12*(i.year()-t.year())+(i.month()-t.month()),a=t.clone().add(s,c),n=i-a<0,r=t.clone().add(s+(n?-1:1),c);return+(-(s+(i-a)/(n?a-r:r-a))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:f,w:o,d:r,D:l,h:n,m:a,s,ms:i,Q:d}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",_={};_[y]=h;var g=function(e){return e instanceof w},$=function e(t,i,s){var a;if(!t)return y;if("string"==typeof t){var n=t.toLowerCase();_[n]&&(a=n),i&&(_[n]=i,a=n);var r=t.split("-");if(!a&&r.length>1)return e(r[0])}else{var o=t.name;_[o]=t,a=o}return!s&&a&&(y=a),a||!s&&y},T=function(e,t){if(g(e))return e.clone();var i="object"==typeof t?t:{};return i.date=e,i.args=arguments,new w(i)},M=m;M.l=$,M.i=g,M.w=function(e,t){return T(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function h(e){this.$L=$(e.locale,null,!0),this.parse(e)}var v=h.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,i=e.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(b);if(s){var a=s[2]-1||0,n=(s[7]||"0").substring(0,3);return i?new Date(Date.UTC(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)):new Date(s[1],a,s[3]||1,s[4]||0,s[5]||0,s[6]||0,n)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===p)},v.isSame=function(e,t){var i=T(e);return this.startOf(t)<=i&&i<=this.endOf(t)},v.isAfter=function(e,t){return T(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<T(e)},v.$g=function(e,t,i){return M.u(e)?this[t]:this.set(i,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var i=this,d=!!M.u(t)||t,p=M.p(e),b=function(e,t){var s=M.w(i.$u?Date.UTC(i.$y,t,e):new Date(i.$y,t,e),i);return d?s:s.endOf(r)},u=function(e,t){return M.w(i.toDate()[e].apply(i.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),i)},h=this.$W,v=this.$M,m=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case f:return d?b(1,0):b(31,11);case c:return d?b(1,v):b(0,v+1);case o:var _=this.$locale().weekStart||0,g=(h<_?h+7:h)-_;return b(d?m-g:m+(6-g),v);case r:case l:return u(y+"Hours",0);case n:return u(y+"Minutes",1);case a:return u(y+"Seconds",2);case s:return u(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var o,d=M.p(e),p="set"+(this.$u?"UTC":""),b=(o={},o[r]=p+"Date",o[l]=p+"Date",o[c]=p+"Month",o[f]=p+"FullYear",o[n]=p+"Hours",o[a]=p+"Minutes",o[s]=p+"Seconds",o[i]=p+"Milliseconds",o)[d],u=d===r?this.$D+(t-this.$W):t;if(d===c||d===f){var h=this.clone().set(l,1);h.$d[b](u),h.init(),this.$d=h.set(l,Math.min(this.$D,h.daysInMonth())).$d}else b&&this.$d[b](u);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[M.p(e)]()},v.add=function(i,d){var l,p=this;i=Number(i);var b=M.p(d),u=function(e){var t=T(p);return M.w(t.date(t.date()+Math.round(e*i)),p)};if(b===c)return this.set(c,this.$M+i);if(b===f)return this.set(f,this.$y+i);if(b===r)return u(1);if(b===o)return u(7);var h=(l={},l[a]=e,l[n]=t,l[s]=1e3,l)[b]||1,v=this.$d.getTime()+i*h;return M.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,i=this.$locale();if(!this.isValid())return i.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",a=M.z(this),n=this.$H,r=this.$m,o=this.$M,c=i.weekdays,d=i.months,f=function(e,i,a,n){return e&&(e[i]||e(t,s))||a[i].slice(0,n)},l=function(e){return M.s(n%12||12,e,"0")},b=i.meridiem||function(e,t,i){var s=e<12?"AM":"PM";return i?s.toLowerCase():s},h={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:M.s(o+1,2,"0"),MMM:f(i.monthsShort,o,d,3),MMMM:f(d,o),D:this.$D,DD:M.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,c,2),ddd:f(i.weekdaysShort,this.$W,c,3),dddd:c[this.$W],H:String(n),HH:M.s(n,2,"0"),h:l(1),hh:l(2),a:b(n,r,!0),A:b(n,r,!1),m:String(r),mm:M.s(r,2,"0"),s:String(this.$s),ss:M.s(this.$s,2,"0"),SSS:M.s(this.$ms,3,"0"),Z:a};return s.replace(u,(function(e,t){return t||h[e]||a.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(i,l,p){var b,u=M.p(l),h=T(i),v=(h.utcOffset()-this.utcOffset())*e,m=this-h,y=M.m(this,h);return y=(b={},b[f]=y/12,b[c]=y,b[d]=y/3,b[o]=(m-v)/6048e5,b[r]=(m-v)/864e5,b[n]=m/t,b[a]=m/e,b[s]=m/1e3,b)[u]||m,p?y:M.a(y)},v.daysInMonth=function(){return this.endOf(c).$D},v.$locale=function(){return _[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var i=this.clone(),s=$(e,t,!0);return s&&(i.$L=s),i},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},h}(),j=w.prototype;return T.prototype=j,[["$ms",i],["$s",s],["$m",a],["$H",n],["$W",r],["$M",c],["$y",f],["$D",l]].forEach((function(e){j[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),T.extend=function(e,t){return e.$i||(e(t,w,T),e.$i=!0),T},T.locale=$,T.isDayjs=g,T.unix=function(e){return T(1e3*e)},T.en=_[y],T.Ls=_,T.p={},T}()}},t={};function i(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,i),n.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var s in t)i.o(t,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=i(484),t=i.n(e);const s=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],a=(e,i)=>e?t()(e).format(i):"",n=e=>a(e,"YYYY-MM-DDTHH:mm"),r=e=>a(e,"HH:mm"),o=e=>a(e,"DD/MM/YY HH:mm"),c=[{id:"e5c26d80-c07c-4012-8d46-d510fdb2c79c",description:"Tokio - a true asian pearl",name:"Tokio",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Tokio famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Tokio in a middle of Europe"}]},{id:"3d098017-7ce8-420a-a792-c3baafaa3bf4",description:"Frankfurt - is a beautiful city",name:"Frankfurt",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Frankfurt full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://23.objects.htmlacademy.pro/static/destinations/18.jpg",description:"Frankfurt famous for its crowded street markets with the best street food in Asia"}]},{id:"4715f1ce-023d-4832-bb76-e6ca381ec287",description:"Kioto - is a beautiful city",name:"Kioto",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Kioto famous for its crowded street markets with the best street food in Asia"},{src:"https://23.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Kioto full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Kioto is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Kioto full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"9ef8acfc-a0d9-4901-ac3b-59c116c44492",description:"Geneva - with a beautiful old town",name:"Geneva",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/3.jpg",description:"Geneva for those who value comfort and coziness"},{src:"https://23.objects.htmlacademy.pro/static/destinations/7.jpg",description:"Geneva with an embankment of a mighty river as a centre of attraction"},{src:"https://23.objects.htmlacademy.pro/static/destinations/1.jpg",description:"Geneva for those who value comfort and coziness"}]},{id:"49b94996-d9c4-444c-90e1-da11c7c3c7fc",description:"Amsterdam - a perfect place to stay with a family",name:"Amsterdam",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Amsterdam a perfect place to stay with a family"}]},{id:"a1b26641-a191-4b42-b852-79e763a3ec46",description:"Naples - middle-eastern paradise",name:"Naples",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Naples full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://23.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Naples full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://23.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Naples famous for its crowded street markets with the best street food in Asia"}]},{id:"d4f42ec2-e0b7-484a-85c5-0ec4dd7e236e",description:"Rotterdam - middle-eastern paradise",name:"Rotterdam",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/13.jpg",description:"Rotterdam with a beautiful old town"}]},{id:"16c73b9f-169f-45a2-94f3-d6689937e332",description:"Oslo - full of of cozy canteens where you can try the best coffee in the Middle East",name:"Oslo",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Oslo for those who value comfort and coziness"},{src:"https://23.objects.htmlacademy.pro/static/destinations/10.jpg",description:"Oslo full of of cozy canteens where you can try the best coffee in the Middle East"},{src:"https://23.objects.htmlacademy.pro/static/destinations/14.jpg",description:"Oslo a perfect place to stay with a family"}]},{id:"3881ec5b-b2b6-4f20-9a7a-82c18e2a5d53",description:"Chamonix - a true asian pearl",name:"Chamonix",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/6.jpg",description:"Chamonix with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/4.jpg",description:"Chamonix with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/12.jpg",description:"Chamonix is a beautiful city"},{src:"https://23.objects.htmlacademy.pro/static/destinations/11.jpg",description:"Chamonix full of of cozy canteens where you can try the best coffee in the Middle East"}]},{id:"ac52f50c-3bce-47b0-94a1-421ef1f7a099",description:"Monaco - is a beautiful city",name:"Monaco",pictures:[{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Monaco a true asian pearl"},{src:"https://23.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Monaco with a beautiful old town"},{src:"https://23.objects.htmlacademy.pro/static/destinations/5.jpg",description:"Monaco with an embankment of a mighty river as a centre of attraction"},{src:"https://23.objects.htmlacademy.pro/static/destinations/19.jpg",description:"Monaco a perfect place to stay with a family"},{src:"https://23.objects.htmlacademy.pro/static/destinations/16.jpg",description:"Monaco in a middle of Europe"}]}],d=[{id:"3470cafa-31a4-4b71-8e33-bd3c3df7df38",basePrice:174,dateFrom:"2024-04-15T15:08:07.164Z",dateTo:"2024-04-17T15:10:07.164Z",destination:"e5c26d80-c07c-4012-8d46-d510fdb2c79c",isFavorite:!0,offers:[],type:"sightseeing"},{id:"125899ed-d862-4897-87dd-8bdf5ba1d6cd",basePrice:4437,dateFrom:"2024-04-19T13:56:07.164Z",dateTo:"2024-04-20T01:52:07.164Z",destination:"ac52f50c-3bce-47b0-94a1-421ef1f7a099",isFavorite:!1,offers:[],type:"bus"},{id:"fbe950a3-4b3d-4812-98a6-6e4bbdea32f0",basePrice:9819,dateFrom:"2024-04-21T16:16:07.164Z",dateTo:"2024-04-21T23:41:07.164Z",destination:"a1b26641-a191-4b42-b852-79e763a3ec46",isFavorite:!0,offers:["48ef59a9-7bad-4a89-a057-6a3fd8a05574","ca6f9a93-6e4a-4471-bdca-12a5d6360ce5","c029338d-79b0-4183-bcca-4bd4328ec78b"],type:"ship"},{id:"627621ba-66b9-4ecc-b399-524015f6285b",basePrice:3324,dateFrom:"2024-04-22T16:22:07.164Z",dateTo:"2024-04-24T10:13:07.164Z",destination:"9ef8acfc-a0d9-4901-ac3b-59c116c44492",isFavorite:!0,offers:["1b8b5893-234d-4c40-bc57-7fc0f0a0432b","4c4eeb46-e746-4e7a-b69d-f72f4e1759e7"],type:"taxi"},{id:"d1d58b95-1f7b-4abf-aaf2-8a3e059b6ee4",basePrice:6710,dateFrom:"2024-04-25T15:51:07.164Z",dateTo:"2024-04-27T05:45:07.164Z",destination:"3d098017-7ce8-420a-a792-c3baafaa3bf4",isFavorite:!0,offers:[],type:"train"},{id:"d411637a-9036-4931-8ccb-45ce0996978e",basePrice:1622,dateFrom:"2024-04-27T20:06:07.164Z",dateTo:"2024-04-29T02:01:07.164Z",destination:"ac52f50c-3bce-47b0-94a1-421ef1f7a099",isFavorite:!1,offers:["ae85920c-b179-4ddf-80c6-031081d06696","48ef59a9-7bad-4a89-a057-6a3fd8a05574","ca6f9a93-6e4a-4471-bdca-12a5d6360ce5","c029338d-79b0-4183-bcca-4bd4328ec78b"],type:"ship"},{id:"efc7cbd5-fea9-4324-89ff-c765b5abd72f",basePrice:2494,dateFrom:"2024-04-30T11:46:07.164Z",dateTo:"2024-05-01T17:57:07.164Z",destination:"ac52f50c-3bce-47b0-94a1-421ef1f7a099",isFavorite:!1,offers:["24968829-a4b8-4691-8915-a39348ec1e9c","e5d12b20-9e0b-4ed6-a92e-c84ef070e183"],type:"drive"},{id:"4eae0fce-f283-4f3a-83a5-35a6ef9ab6b6",basePrice:2541,dateFrom:"2024-05-02T18:49:07.164Z",dateTo:"2024-05-04T16:09:07.164Z",destination:"16c73b9f-169f-45a2-94f3-d6689937e332",isFavorite:!0,offers:["8576f4b9-4071-405f-ba15-337b6500a493","3221bb97-0f8a-4340-97b2-26f7ebd68388","dc87ba6e-6a15-49d8-98ae-0a1becce893d"],type:"train"},{id:"868139a6-5d8d-44e5-a9ac-27bea677221a",basePrice:7180,dateFrom:"2024-05-05T16:56:07.164Z",dateTo:"2024-05-07T13:08:07.164Z",destination:"e5c26d80-c07c-4012-8d46-d510fdb2c79c",isFavorite:!0,offers:["3221bb97-0f8a-4340-97b2-26f7ebd68388","dc87ba6e-6a15-49d8-98ae-0a1becce893d"],type:"train"},{id:"53cef26f-d2c7-4129-95c0-57821b53c4f2",basePrice:1578,dateFrom:"2024-05-09T04:37:07.164Z",dateTo:"2024-05-11T04:06:07.164Z",destination:"9ef8acfc-a0d9-4901-ac3b-59c116c44492",isFavorite:!0,offers:["8576f4b9-4071-405f-ba15-337b6500a493","3221bb97-0f8a-4340-97b2-26f7ebd68388","dc87ba6e-6a15-49d8-98ae-0a1becce893d"],type:"train"},{id:"0f4209da-636b-4f92-aee1-5fa91cc1137d",basePrice:4667,dateFrom:"2024-05-12T16:52:07.164Z",dateTo:"2024-05-13T05:57:07.164Z",destination:"3881ec5b-b2b6-4f20-9a7a-82c18e2a5d53",isFavorite:!0,offers:["3fc54970-f17d-4268-be14-198f77c2a883","2b182504-880c-4915-af79-39b69651490d","aca5339a-b38b-4d83-9619-c41e984d23a0"],type:"flight"},{id:"8bbb7b71-d58c-4a0f-b147-680ac7864453",basePrice:7143,dateFrom:"2024-05-14T02:35:07.164Z",dateTo:"2024-05-15T22:01:07.164Z",destination:"a1b26641-a191-4b42-b852-79e763a3ec46",isFavorite:!1,offers:["c029338d-79b0-4183-bcca-4bd4328ec78b"],type:"ship"},{id:"40bfe63b-9b5a-4bc5-ad57-8926210bcf51",basePrice:6372,dateFrom:"2024-05-17T10:44:07.164Z",dateTo:"2024-05-18T05:59:07.164Z",destination:"a1b26641-a191-4b42-b852-79e763a3ec46",isFavorite:!1,offers:[],type:"drive"},{id:"8ee20c6e-4dd1-43b9-957b-9d4a87bb2ad1",basePrice:1792,dateFrom:"2024-05-19T19:26:07.164Z",dateTo:"2024-05-20T05:15:07.164Z",destination:"3881ec5b-b2b6-4f20-9a7a-82c18e2a5d53",isFavorite:!0,offers:["dc55aea4-0e34-4989-97a6-eb29da358e6a","304b839a-b9cd-41b8-9aa2-96f9ab4ca41f"],type:"bus"},{id:"6ffc26bb-fb28-4f67-a0dc-74ae27337a79",basePrice:124,dateFrom:"2024-05-21T05:42:07.164Z",dateTo:"2024-05-22T14:50:07.164Z",destination:"ac52f50c-3bce-47b0-94a1-421ef1f7a099",isFavorite:!1,offers:["5284ce5c-16f5-40a5-99d4-8c760bad607e","3e70d7a0-c554-49b2-8d13-18a03624a0be"],type:"restaurant"},{id:"5c7619dd-cc66-49bc-b43f-d9a5d78dc4bc",basePrice:8568,dateFrom:"2024-05-23T02:12:07.164Z",dateTo:"2024-05-23T17:11:07.164Z",destination:"4715f1ce-023d-4832-bb76-e6ca381ec287",isFavorite:!1,offers:[],type:"sightseeing"},{id:"9691f0b1-a9fb-4ffc-80c2-aafa11d9d0fc",basePrice:2890,dateFrom:"2024-05-24T17:32:07.164Z",dateTo:"2024-05-26T00:23:07.164Z",destination:"a1b26641-a191-4b42-b852-79e763a3ec46",isFavorite:!1,offers:[],type:"sightseeing"},{id:"08d4ce47-b7f7-4161-a423-defdfc471044",basePrice:1688,dateFrom:"2024-05-26T07:28:07.164Z",dateTo:"2024-05-26T23:15:07.164Z",destination:"a1b26641-a191-4b42-b852-79e763a3ec46",isFavorite:!0,offers:[],type:"sightseeing"},{id:"02a9033e-eccf-4571-8b76-a9cd335f307a",basePrice:512,dateFrom:"2024-05-27T22:07:07.164Z",dateTo:"2024-05-28T21:16:07.164Z",destination:"3881ec5b-b2b6-4f20-9a7a-82c18e2a5d53",isFavorite:!0,offers:["5077482b-05c8-4147-a8bc-b8de9cf09f51","1b8b5893-234d-4c40-bc57-7fc0f0a0432b","4c4eeb46-e746-4e7a-b69d-f72f4e1759e7"],type:"taxi"},{id:"c8a87a71-ed15-41b3-9770-99517b3d8fcd",basePrice:1511,dateFrom:"2024-05-29T15:24:07.164Z",dateTo:"2024-05-30T03:42:07.164Z",destination:"9ef8acfc-a0d9-4901-ac3b-59c116c44492",isFavorite:!1,offers:[],type:"drive"},{id:"d4cae048-2b34-4bc9-9f8a-56bcf070abf8",basePrice:9872,dateFrom:"2024-05-30T18:17:07.164Z",dateTo:"2024-05-31T22:15:07.164Z",destination:"d4f42ec2-e0b7-484a-85c5-0ec4dd7e236e",isFavorite:!0,offers:[],type:"sightseeing"},{id:"155622b5-ba54-425a-a265-c341f0bf94fd",basePrice:6794,dateFrom:"2024-06-01T20:39:07.164Z",dateTo:"2024-06-03T18:43:07.164Z",destination:"d4f42ec2-e0b7-484a-85c5-0ec4dd7e236e",isFavorite:!1,offers:["07ca56e9-f70b-4a8b-8239-ebe1a8faef51","3ff6e0b1-12df-470f-a3f9-eb49db1201fc","5077482b-05c8-4147-a8bc-b8de9cf09f51","1b8b5893-234d-4c40-bc57-7fc0f0a0432b","4c4eeb46-e746-4e7a-b69d-f72f4e1759e7"],type:"taxi"},{id:"8bca9025-4412-4cc2-9c77-fe4d619befb0",basePrice:740,dateFrom:"2024-06-04T13:11:07.164Z",dateTo:"2024-06-05T09:12:07.164Z",destination:"9ef8acfc-a0d9-4901-ac3b-59c116c44492",isFavorite:!0,offers:[],type:"drive"},{id:"1f2c1ef8-7203-4fd8-84b3-bbf07b52f59b",basePrice:1841,dateFrom:"2024-06-06T08:03:07.164Z",dateTo:"2024-06-07T20:22:07.164Z",destination:"3881ec5b-b2b6-4f20-9a7a-82c18e2a5d53",isFavorite:!0,offers:["24968829-a4b8-4691-8915-a39348ec1e9c","e5d12b20-9e0b-4ed6-a92e-c84ef070e183"],type:"drive"},{id:"31326554-c27c-4c59-b777-3ec021aff7e9",basePrice:5528,dateFrom:"2024-06-09T02:01:07.164Z",dateTo:"2024-06-11T01:19:07.164Z",destination:"3881ec5b-b2b6-4f20-9a7a-82c18e2a5d53",isFavorite:!0,offers:["40be16b1-2d98-4d0f-898b-a5d9573b6479"],type:"check-in"}],f=()=>{return(e=d)[Math.floor(Math.random()*e.length)];var e},l=[{type:"taxi",offers:[{id:"07ca56e9-f70b-4a8b-8239-ebe1a8faef51",title:"Upgrade to a business class",price:33},{id:"3ff6e0b1-12df-470f-a3f9-eb49db1201fc",title:"Choose the radio station",price:148},{id:"5077482b-05c8-4147-a8bc-b8de9cf09f51",title:"Choose temperature",price:165},{id:"1b8b5893-234d-4c40-bc57-7fc0f0a0432b",title:"Drive quickly, I am in a hurry",price:71},{id:"4c4eeb46-e746-4e7a-b69d-f72f4e1759e7",title:"Drive slowly",price:106}]},{type:"bus",offers:[{id:"f267d4d8-799b-4e25-8826-ac8455fe3833",title:"Infotainment system",price:174},{id:"dc55aea4-0e34-4989-97a6-eb29da358e6a",title:"Order meal",price:122},{id:"304b839a-b9cd-41b8-9aa2-96f9ab4ca41f",title:"Choose seats",price:91}]},{type:"train",offers:[{id:"8576f4b9-4071-405f-ba15-337b6500a493",title:"Book a taxi at the arrival point",price:78},{id:"3221bb97-0f8a-4340-97b2-26f7ebd68388",title:"Order a breakfast",price:85},{id:"dc87ba6e-6a15-49d8-98ae-0a1becce893d",title:"Wake up at a certain time",price:38}]},{type:"flight",offers:[{id:"9601c223-a752-40f4-a5e8-b36d83727f23",title:"Choose meal",price:111},{id:"48746fde-dad6-4562-a284-ab96e80186da",title:"Choose seats",price:59},{id:"ae9d8098-b376-40fb-8a9d-b3c4326fb792",title:"Upgrade to comfort class",price:95},{id:"3fc54970-f17d-4268-be14-198f77c2a883",title:"Upgrade to business class",price:169},{id:"2b182504-880c-4915-af79-39b69651490d",title:"Add luggage",price:85},{id:"aca5339a-b38b-4d83-9619-c41e984d23a0",title:"Business lounge",price:71}]},{type:"check-in",offers:[{id:"c6a1285d-bd27-46a3-8a33-9e4c5102b58b",title:"Choose the time of check-in",price:54},{id:"b94c57ef-54a4-41e4-b7da-fa944fd68ff3",title:"Choose the time of check-out",price:182},{id:"97efaa0f-3ce2-4993-9570-230e30363d34",title:"Add breakfast",price:165},{id:"611f5ece-7baf-4283-8d64-719f4cee82b7",title:"Laundry",price:98},{id:"40be16b1-2d98-4d0f-898b-a5d9573b6479",title:"Order a meal from the restaurant",price:88}]},{type:"sightseeing",offers:[]},{type:"ship",offers:[{id:"82981ccb-c202-4294-b289-eaa1dd2d3e4f",title:"Choose meal",price:103},{id:"575f58d3-a812-4cb4-ace1-2071a9866d43",title:"Choose seats",price:130},{id:"ae85920c-b179-4ddf-80c6-031081d06696",title:"Upgrade to comfort class",price:133},{id:"48ef59a9-7bad-4a89-a057-6a3fd8a05574",title:"Upgrade to business class",price:98},{id:"ca6f9a93-6e4a-4471-bdca-12a5d6360ce5",title:"Add luggage",price:174},{id:"c029338d-79b0-4183-bcca-4bd4328ec78b",title:"Business lounge",price:68}]},{type:"drive",offers:[{id:"24968829-a4b8-4691-8915-a39348ec1e9c",title:"With automatic transmission",price:43},{id:"e5d12b20-9e0b-4ed6-a92e-c84ef070e183",title:"With air conditioning",price:157}]},{type:"restaurant",offers:[{id:"5284ce5c-16f5-40a5-99d4-8c760bad607e",title:"Choose live music",price:190},{id:"3e70d7a0-c554-49b2-8d13-18a03624a0be",title:"Choose VIP area",price:186}]}];class p{events=Array.from({length:3},f);cities=(()=>c)();offers=(()=>l)();getEvents(){return this.events}getOffers(){return this.offers}getOffersByType(e){return this.getOffers().find((t=>t.type===e)).offers}getSelectedOffers(e,t){return this.getOffersByType(e).filter((e=>t.indexOf(e.id)>-1))}getCities(){return this.cities}getCityById(e){return this.getCities().find((t=>t.id===e))}}const b="afterbegin",u="beforeend";function h(e,t,i=u){t.insertAdjacentElement(i,e.getElement())}class v{createComponentTemplate(){return""}getTemplate(){return this.createComponentTemplate()}getElement(){return this.element||(this.element=function(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}(this.getTemplate())),this.element}removeElement(){this.element=null}}class m extends v{constructor({event:e,city:t,cities:i,offers:s}){super(),this.event=e,this.city=t,this.cities=i,this.offers=s}createComponentTemplate(){return`<form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      ${(({type:e}={})=>{const t=[],i=(e=>{const t=[];return t.push('<fieldset class="event__type-group">\n  <legend class="visually-hidden">Event type</legend>'),s.forEach((i=>{const s=i.toLowerCase(),a=s===e?"checked":"";t.push(`<div class="event__type-item">\n    <input id="event-type-${s}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${s}" ${a}>\n   <label class="event__type-label  event__type-label--${s}" for="event-type-${s}-1">${i}</label>\n  </div>`)})),t.push("</fieldset>"),t.join("")})(e);return t.push(`<div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/${e}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle visually-hidden" id="event-type-toggle-1" type="checkbox">\n        <div class="event__type-list">\n          ${i}\n        </div>\n      </div>`),t.join("")})(this.event)}\n      ${((e,t)=>{const i=[],s=t?.name||"";return i.push(`<div class="event__field-group  event__field-group--destination">\n  <label class="event__label  event__type-output" for="event-destination-1">\n    Flight\n  </label>\n  <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${s}" list="destination-list-1">\n  <datalist id="destination-list-1">`),e.forEach((e=>{i.push(`<option value="${e.name}"></option>`)})),i.push("</datalist></div>"),i.join("")})(this.cities,this.city)}\n      ${(({dateFrom:e,dateTo:t}={})=>`<div class="event__field-group  event__field-group--time">\n<label class="visually-hidden" for="event-start-time-1">From</label>\n<input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${o(e)}">\n&mdash;\n<label class="visually-hidden" for="event-end-time-1">To</label>\n<input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${o(t)}">\n</div>`)(this.event)}\n      ${(({basePrice:e}={})=>`<div class="event__field-group  event__field-group--price">\n<label class="event__label" for="event-price-1">\n  <span class="visually-hidden">Price</span>\n  &euro;\n</label>\n<input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${e}">\n</div>`)(this.event)}\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Cancel</button>\n    </header>\n    <section class="event__details">\n      ${((e,t)=>{if(!e||0===e.length)return"";const i=[];return i.push('<section class="event__section  event__section--offers">\n  <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n  <div class="event__available-offers">'),e.forEach((e=>{const s=t.indexOf(e.id)>-1?"checked":"";i.push(`<div class="event__offer-selector">\n      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.id}" type="checkbox" name="event-offer-luggage" ${s}>\n      <label class="event__offer-label" for="event-offer-${e.id}">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n      </label>\n      </div>`)})),i.push("</div></section>"),i.join("")})(this.offers,this.event?.offers)}\n      ${(({description:e,pictures:t}={})=>{if(!e&&!t)return"";const i=[];return i.push(`<section class="event__section  event__section--destination">\n    <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n    <p class="event__destination-description">${e}</p>\n    <div class="event__photos-container"><div class="event__photos-tape">`),t.forEach((e=>{i.push(`<img class="event__photo" src="${e.src}" alt="${e.description}">`)})),i.push("</div></div></section>"),i.join("")})(this.city)}\n    </section>\n  </form>`}}class y extends v{createComponentTemplate(){return'<li class="trip-events__item"></li>'}}class _ extends v{constructor({event:e,city:t,offers:i}){super(),this.event=e,this.city=t,this.offers=i}createComponentTemplate(){const{basePrice:e,isFavorite:i,type:s,dateFrom:o,dateTo:c}=this.event,{name:d}=this.city,f=a(o,"YYYY-MM-DD"),l=a(o,"MMMM D"),p=n(o),b=n(c),u=r(o),h=r(c),v=((e,i)=>{const s=t()(i),a=t()(e),n={minutes:0,hours:0,days:0,strings:[]};return n.minutes=s.diff(a,"m"),n.minutes>=60&&(n.hours=Math.floor(n.minutes/60),n.minutes-=60*n.hours),n.hours>=24&&(n.days=Math.floor(n.hours/24),n.hours-=24*n.days),n.strings.push(`${String(n.days).padStart(2,"0")}D`),n.strings.push(`${String(n.hours).padStart(2,"0")}H`),n.strings.push(`${String(n.minutes).padStart(2,"0")}M`),n.strings.every(((e,t)=>!!e.startsWith("00")&&(delete n.strings[t],!0))),n.strings.join(" ")})(o,c);return`<div class="event">\n        <time class="event__date" datetime="${f}">${l}</time>\n        <div class="event__type">\n          <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon" />\n        </div>\n        <h3 class="event__title">${s} ${d}</h3>\n        <div class="event__schedule">\n          <p class="event__time">\n            <time class="event__start-time" datetime="${p}">${u}</time>\n            &mdash;\n            <time class="event__end-time" datetime="${b}">${h}</time>\n          </p>\n          <p class="event__duration">${v}</p>\n        </div>\n        <p class="event__price">\n          &euro;&nbsp;<span class="event__price-value">${e}</span>\n        </p>\n        <h4 class="visually-hidden">Offers:</h4>\n        ${(e=>{if(0===e.length)return"";const t=['<ul class="event__selected-offers">'];return e.forEach((e=>{t.push(`<li class="event__offer">\n    <span class="event__offer-title">${e.title}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${e.price}</span>\n  </li>`)})),t.push("</ul>"),t.join("")})(this.offers)}\n        <button class="event__favorite-btn ${i?"event__favorite-btn--active":""}" type="button">\n  <span class="visually-hidden">Add to favorite</span>\n  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n  <path\n    d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z" />\n  </svg></button>\n        <button class="event__rollup-btn" type="button">\n          <span class="visually-hidden">Open event</span>\n        </button>\n      </div>`}}class g extends v{createComponentTemplate(){return'<ul class="trip-events__list"></ul>'}}class $ extends v{createComponentTemplate(){return'<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n    <div class="trip-sort__item  trip-sort__item--day">\n      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day">\n      <label class="trip-sort__btn" for="sort-day">Day</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--event">\n      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>\n      <label class="trip-sort__btn" for="sort-event">Event</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--time">\n      <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" checked>\n      <label class="trip-sort__btn" for="sort-time">Time</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--price">\n      <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price">\n      <label class="trip-sort__btn" for="sort-price">Price</label>\n    </div>\n\n    <div class="trip-sort__item  trip-sort__item--offer">\n      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>\n      <label class="trip-sort__btn" for="sort-offer">Offers</label>\n    </div>\n  </form>'}}class T{sortComponent=new $;eventListComponent=new g;constructor({container:e,eventsModel:t}){this.container=e,this.eventsModel=t}renderEventItem(e){const t=new y;h(t,this.eventListComponent.getElement()),e(t)}renderEventNew(){this.renderEventItem((e=>{const t={id:null,basePrice:0,dateFrom:null,dateTo:null,destination:null,isFavorite:null,offers:[],type:"flight"},i=this.eventsModel.getOffersByType(t.type);h(new m({event:t,cities:this.cities,offers:i}),e.getElement())}))}renderEventEdit(e){this.renderEventItem((t=>{const i=this.eventsModel.getCityById(e.destination),s=this.eventsModel.getOffersByType(e.type);h(new m({event:e,city:i,cities:this.cities,offers:s}),t.getElement())}))}renderTripPoints(){for(let e=0;e<this.events.length;e++)this.renderEventItem((t=>{const i=this.events[e],s=this.eventsModel.getCityById(i.destination),a=this.eventsModel.getSelectedOffers(i.type,i.offers);h(new _({event:i,city:s,offers:a}),t.getElement())}))}init(){this.events=[...this.eventsModel.getEvents()],this.cities=[...this.eventsModel.getCities()],this.offers=[...this.eventsModel.getOffers()],h(this.sortComponent,this.container),h(this.eventListComponent,this.container),this.renderEventEdit(this.events[0]),this.renderTripPoints()}}class M extends v{createComponentTemplate(){return'<div class="trip-main__trip-controls  trip-controls">\n    <div class="trip-controls__filters">\n      <h2 class="visually-hidden">Filter events</h2>\n      <form class="trip-filters" action="#" method="get">\n        <div class="trip-filters__filter">\n          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>\n          <label class="trip-filters__filter-label" for="filter-everything">Everything</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-future" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="future">\n          <label class="trip-filters__filter-label" for="filter-future">Future</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-present" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="present">\n          <label class="trip-filters__filter-label" for="filter-present">Present</label>\n        </div>\n\n        <div class="trip-filters__filter">\n          <input id="filter-past" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="past">\n          <label class="trip-filters__filter-label" for="filter-past">Past</label>\n        </div>\n\n        <button class="visually-hidden" type="submit">Accept filter</button>\n      </form>\n    </div>\n  </div>'}}class w extends v{createComponentTemplate(){return'<section class="trip-main__trip-info  trip-info">\n    <div class="trip-info__main">\n      <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n      <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n    </div>\n\n    <p class="trip-info__cost">\n      Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n    </p>\n  </section>'}}(()=>{const e=document.querySelector(".page-header .page-header__container"),t=e.querySelector(".trip-main"),i=e.querySelector(".trip-controls__filters");h(new w,t,b),h(new M,i)})(),(()=>{const e=document.querySelector(".page-main .trip-events"),t=new p;new T({container:e,eventsModel:t}).init()})()})()})();
//# sourceMappingURL=bundle.56c5bb5cb9f33a1f0569.js.map