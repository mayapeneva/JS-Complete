function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function r(t){return t&&t.__esModule?t.default:t}var n={},o={},i=e.parcelRequire3a11;null==i&&((i=function(t){if(t in n)return n[t].exports;if(t in o){var e=o[t];delete o[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){o[t]=e},e.parcelRequire3a11=i),i.register("27Lyk",(function(e,r){var n,o;t(e.exports,"register",(()=>n),(t=>n=t)),t(e.exports,"resolve",(()=>o),(t=>o=t));var i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),i("27Lyk").register(JSON.parse('{"f9fpV":"index.6e68a02b.js","eyyUD":"icons.c14567a0.svg"}'));var a,c,s={},u=function(t){return t&&t.Math==Math&&t};s=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof e&&e)||function(){return this}()||Function("return this")();var l,f;l=!(f=function(t){try{return!!t()}catch(t){return!0}})((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}));var p,h={};p=!f((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}));var d,v=Function.prototype.call;h=p?v.bind(v):function(){return v.apply(v,arguments)};var m={}.propertyIsEnumerable,g=Object.getOwnPropertyDescriptor,y=g&&!m.call({1:2},1);d=y?function(t){var e=g(this,t);return!!e&&e.enumerable}:m;var b;b=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}};var _,w,E,S={},O={},j=Function.prototype,F=j.call,L=p&&j.bind.bind(F,F),M=(O=p?L:function(t){return function(){return F.apply(t,arguments)}})({}.toString),k=O("".slice);E=function(t){return k(M(t),8,-1)},w=function(t){if("Function"===E(t))return O(t)};var x=Object,P=w("".split);S=f((function(){return!x("z").propertyIsEnumerable(0)}))?function(t){return"String"==E(t)?P(t,""):x(t)}:x;var T,$;$=function(t){return null==t};var I=TypeError;T=function(t){if($(t))throw I("Can't call method on "+t);return t},_=function(t){return S(T(t))};var N,D,R,A={},q={},H="object"==typeof document&&document.all,z=(R={all:H,IS_HTMLDDA:void 0===H&&void 0!==H}).all;q=R.IS_HTMLDDA?function(t){return"function"==typeof t||t===z}:function(t){return"function"==typeof t};var C=R.all;A=R.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:q(t)||t===C}:function(t){return"object"==typeof t?null!==t:q(t)};var U,G={},W=function(t){return q(t)?t:void 0};U=function(t,e){return arguments.length<2?W(s[t]):s[t]&&s[t][e]};var Y={};Y=w({}.isPrototypeOf);var B,Q,V,J={};J=U("navigator","userAgent")||"";var K,X,Z=s.process,tt=s.Deno,et=Z&&Z.versions||tt&&tt.version,rt=et&&et.v8;rt&&(X=(K=rt.split("."))[0]>0&&K[0]<4?1:+(K[0]+K[1])),!X&&J&&(!(K=J.match(/Edge\/(\d+)/))||K[1]>=74)&&(K=J.match(/Chrome\/(\d+)/))&&(X=+K[1]),V=X,Q=!!Object.getOwnPropertySymbols&&!f((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&V&&V<41})),B=Q&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var nt=Object;G=B?function(t){return"symbol"==typeof t}:function(t){var e=U("Symbol");return q(e)&&Y(e.prototype,nt(t))};var ot,it,at,ct=String;at=function(t){try{return ct(t)}catch(t){return"Object"}};var st=TypeError;it=function(t){if(q(t))return t;throw st(at(t)+" is not a function")},ot=function(t,e){var r=t[e];return $(r)?void 0:it(r)};var ut,lt=TypeError;ut=function(t,e){var r,n;if("string"===e&&q(r=t.toString)&&!A(n=h(r,t)))return n;if(q(r=t.valueOf)&&!A(n=h(r,t)))return n;if("string"!==e&&q(r=t.toString)&&!A(n=h(r,t)))return n;throw lt("Can't convert object to primitive value")};var ft;var pt,ht={},dt=Object.defineProperty;pt=function(t,e){try{dt(s,t,{value:e,configurable:!0,writable:!0})}catch(r){s[t]=e}return e};var vt=s["__core-js_shared__"]||pt("__core-js_shared__",{});ht=vt,(ft=function(t,e){return ht[t]||(ht[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.26.0",mode:"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.26.0/LICENSE",source:"https://github.com/zloirock/core-js"});var mt,gt={},yt=Object;mt=function(t){return yt(T(t))};var bt=w({}.hasOwnProperty);gt=Object.hasOwn||function(t,e){return bt(mt(t),e)};var _t,wt=0,Et=Math.random(),St=w(1..toString);_t=function(t){return"Symbol("+(void 0===t?"":t)+")_"+St(++wt+Et,36)};var Ot=ft("wks"),jt=s.Symbol,Ft=jt&&jt.for,Lt=B?jt:jt&&jt.withoutSetter||_t,Mt=TypeError,kt=function(t){if(!gt(Ot,t)||!Q&&"string"!=typeof Ot[t]){var e="Symbol."+t;Q&&gt(jt,t)?Ot[t]=jt[t]:Ot[t]=B&&Ft?Ft(e):Lt(e)}return Ot[t]}("toPrimitive");D=function(t,e){if(!A(t)||G(t))return t;var r,n=ot(t,kt);if(n){if(void 0===e&&(e="default"),r=h(n,t,e),!A(r)||G(r))return r;throw Mt("Can't convert object to primitive value")}return void 0===e&&(e="number"),ut(t,e)},N=function(t){var e=D(t,"string");return G(e)?e:e+""};var xt,Pt,Tt=s.document,$t=A(Tt)&&A(Tt.createElement);Pt=function(t){return $t?Tt.createElement(t):{}},xt=!l&&!f((function(){return 7!=Object.defineProperty(Pt("div"),"a",{get:function(){return 7}}).a}));var It,Nt,Dt=Object.getOwnPropertyDescriptor,Rt=c=l?Dt:function(t,e){if(t=_(t),e=N(e),xt)try{return Dt(t,e)}catch(t){}if(gt(t,e))return b(!h(d,t,e),t[e])},At={};Nt=l&&f((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}));var qt,Ht=String,zt=TypeError;qt=function(t){if(A(t))return t;throw zt(Ht(t)+" is not an object")};var Ct=TypeError,Ut=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor;It=l?Nt?function(t,e,r){if(qt(t),e=N(e),qt(r),"function"==typeof t&&"prototype"===e&&"value"in r&&"writable"in r&&!r.writable){var n=Gt(t,e);n&&n.writable&&(t[e]=r.value,r={configurable:"configurable"in r?r.configurable:n.configurable,enumerable:"enumerable"in r?r.enumerable:n.enumerable,writable:!1})}return Ut(t,e,r)}:Ut:function(t,e,r){if(qt(t),e=N(e),qt(r),xt)try{return Ut(t,e,r)}catch(t){}if("get"in r||"set"in r)throw Ct("Accessors not supported");return"value"in r&&(t[e]=r.value),t},At=l?function(t,e,r){return It(t,e,b(1,r))}:function(t,e,r){return t[e]=r,t};var Wt,Yt,Bt=Function.prototype,Qt=l&&Object.getOwnPropertyDescriptor,Vt=gt(Bt,"name"),Jt={EXISTS:Vt,PROPER:Vt&&"something"===function(){}.name,CONFIGURABLE:Vt&&(!l||l&&Qt(Bt,"name").configurable)}.CONFIGURABLE,Kt={},Xt=w(Function.toString);q(ht.inspectSource)||(ht.inspectSource=function(t){return Xt(t)}),Kt=ht.inspectSource;var Zt,te,ee=s.WeakMap;te=q(ee)&&/native code/.test(String(ee));var re,ne=ft("keys");re=function(t){return ne[t]||(ne[t]=_t(t))};var oe={};oe={};var ie,ae,ce,se=s.TypeError,ue=s.WeakMap;if(te||ht.state){var le=ht.state||(ht.state=new ue);le.get=le.get,le.has=le.has,le.set=le.set,ie=function(t,e){if(le.has(t))throw se("Object already initialized");return e.facade=t,le.set(t,e),e},ae=function(t){return le.get(t)||{}},ce=function(t){return le.has(t)}}else{var fe=re("state");oe[fe]=!0,ie=function(t,e){if(gt(t,fe))throw se("Object already initialized");return e.facade=t,At(t,fe,e),e},ae=function(t){return gt(t,fe)?t[fe]:{}},ce=function(t){return gt(t,fe)}}var pe=(Zt={set:ie,get:ae,has:ce,enforce:function(t){return ce(t)?ae(t):ie(t,{})},getterFor:function(t){return function(e){var r;if(!A(e)||(r=ae(e)).type!==t)throw se("Incompatible receiver, "+t+" required");return r}}}).enforce,he=Zt.get,de=Object.defineProperty,ve=l&&!f((function(){return 8!==de((function(){}),"length",{value:8}).length})),me=String(String).split("String"),ge=Yt=function(t,e,r){"Symbol("===String(e).slice(0,7)&&(e="["+String(e).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!gt(t,"name")||Jt&&t.name!==e)&&(l?de(t,"name",{value:e,configurable:!0}):t.name=e),ve&&r&&gt(r,"arity")&&t.length!==r.arity&&de(t,"length",{value:r.arity});try{r&&gt(r,"constructor")&&r.constructor?l&&de(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=pe(t);return gt(n,"source")||(n.source=me.join("string"==typeof e?e:"")),t};Function.prototype.toString=ge((function(){return q(this)&&he(this).source||Kt(this)}),"toString"),Wt=function(t,e,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:e;if(q(r)&&Yt(r,i,n),n.global)o?t[e]=r:pt(e,r);else{try{n.unsafe?t[e]&&(o=!0):delete t[e]}catch(t){}o?t[e]=r:It(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ye,be,_e,we,Ee,Se={},Oe={},je=Math.ceil,Fe=Math.floor;Oe=Math.trunc||function(t){var e=+t;return(e>0?Fe:je)(e)},Ee=function(t){var e=+t;return e!=e||0===e?0:Oe(e)};var Le=Math.max,Me=Math.min;we=function(t,e){var r=Ee(t);return r<0?Le(r+e,0):Me(r,e)};var ke,xe,Pe=Math.min;xe=function(t){return t>0?Pe(Ee(t),9007199254740991):0},ke=function(t){return xe(t.length)};var Te=function(t){return function(e,r,n){var o,i=_(e),a=ke(i),c=we(n,a);if(t&&r!=r){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},$e={includes:Te(!0),indexOf:Te(!1)}.indexOf,Ie=w([].push);_e=function(t,e){var r,n=_(t),o=0,i=[];for(r in n)!gt(oe,r)&&gt(n,r)&&Ie(i,r);for(;e.length>o;)gt(n,r=e[o++])&&(~$e(i,r)||Ie(i,r));return i};var Ne,De=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");be=Object.getOwnPropertyNames||function(t){return _e(t,De)},Ne=Object.getOwnPropertySymbols;var Re=w([].concat);Se=U("Reflect","ownKeys")||function(t){var e=be(qt(t));return Ne?Re(e,Ne(t)):e},ye=function(t,e,r){for(var n=Se(e),o=It,i=c,a=0;a<n.length;a++){var s=n[a];gt(t,s)||r&&gt(r,s)||o(t,s,i(e,s))}};var Ae={},qe=/#|\.prototype\./,He=function(t,e){var r=Ce[ze(t)];return r==Ge||r!=Ue&&(q(e)?f(e):!!e)},ze=He.normalize=function(t){return String(t).replace(qe,".").toLowerCase()},Ce=He.data={},Ue=He.NATIVE="N",Ge=He.POLYFILL="P";Ae=He,a=function(t,e){var r,n,o,i,a,c=t.target,u=t.global,l=t.stat;if(r=u?s:l?s[c]||pt(c,{}):(s[c]||{}).prototype)for(n in e){if(i=e[n],o=t.dontCallGetSet?(a=Rt(r,n))&&a.value:r[n],!Ae(u?n:c+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ye(i,o)}(t.sham||o&&o.sham)&&At(i,"sham",!0),Wt(r,n,i,t)}};var We,Ye={},Be=Function.prototype,Qe=Be.apply,Ve=Be.call;Ye="object"==typeof Reflect&&Reflect.apply||(p?Ve.bind(Qe):function(){return Ve.apply(Qe,arguments)});var Je,Ke=w(w.bind);Je=function(t,e){return it(t),void 0===e?t:p?Ke(t,e):function(){return t.apply(e,arguments)}};var Xe={};Xe=U("document","documentElement");var Ze={};Ze=w([].slice);var tr,er=TypeError;tr=function(t,e){if(t<e)throw er("Not enough arguments");return t};var rr;rr=/(?:ipad|iphone|ipod).*applewebkit/i.test(J);var nr;nr="process"==E(s.process);var or,ir,ar,cr,sr=s.setImmediate,ur=s.clearImmediate,lr=s.process,fr=s.Dispatch,pr=s.Function,hr=s.MessageChannel,dr=s.String,vr=0,mr={};try{or=s.location}catch(t){}var gr=function(t){if(gt(mr,t)){var e=mr[t];delete mr[t],e()}},yr=function(t){return function(){gr(t)}},br=function(t){gr(t.data)},_r=function(t){s.postMessage(dr(t),or.protocol+"//"+or.host)};sr&&ur||(sr=function(t){tr(arguments.length,1);var e=q(t)?t:pr(t),r=Ze(arguments,1);return mr[++vr]=function(){Ye(e,void 0,r)},ir(vr),vr},ur=function(t){delete mr[t]},nr?ir=function(t){lr.nextTick(yr(t))}:fr&&fr.now?ir=function(t){fr.now(yr(t))}:hr&&!rr?(cr=(ar=new hr).port2,ar.port1.onmessage=br,ir=Je(cr.postMessage,cr)):s.addEventListener&&q(s.postMessage)&&!s.importScripts&&or&&"file:"!==or.protocol&&!f(_r)?(ir=_r,s.addEventListener("message",br,!1)):ir="onreadystatechange"in Pt("script")?function(t){Xe.appendChild(Pt("script")).onreadystatechange=function(){Xe.removeChild(this),gr(t)}}:function(t){setTimeout(yr(t),0)});var wr=(We={set:sr,clear:ur}).clear;a({global:!0,bind:!0,enumerable:!0,forced:s.clearImmediate!==wr},{clearImmediate:wr});var Er=We.set;a({global:!0,bind:!0,enumerable:!0,forced:s.setImmediate!==Er},{setImmediate:Er});const Sr=async function(t){try{const r=await Promise.race([fetch(t),(e=10,new Promise((function(t,r){setTimeout((function(){r(new Error(`Request took too long! Timeout after ${e}`))}),1e3*e)})))]),n=await r.json();if(!r.ok)throw new Error(`${n.message} (${r.status})`);return n}catch(t){throw t}var e},Or={recipe:{},search:{quety:"",results:[]}};var jr,Fr,Lr,Mr;jr=new URL(i("27Lyk").resolve("eyyUD"),import.meta.url).toString();class kr{_data;render(t){if(!t||Array.isArray(t)&&0===t.length)return this.renderError();this._data=t;const e=this._generateMarkUp();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}_clear(){this._parentElement.innerHTML=""}renderSpinner(){const t=`\n        <div class="spinner">\n          <svg>\n            <use href="${r(jr)}#icon-loader"></use>\n          </svg>\n        </div>`;this._parentElement.insertAdjacentHTML("afterbegin",t)}renderError(t=this._errorMessage){const e=`\n        <div class="error">\n          <div>\n            <svg>\n              <use href="${r(jr)}_icon-alert-triangle"></use>\n            </svg>\n          </div>\n          <p>${t}</p>\n        </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}Fraction=function(t,e){if(void 0!==t&&e)"number"==typeof t&&"number"==typeof e?(this.numerator=t,this.denominator=e):"string"==typeof t&&"string"==typeof e&&(this.numerator=parseInt(t),this.denominator=parseInt(e));else if(void 0===e)if(num=t,"number"==typeof num)this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}this.normalize()},Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var t=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),e=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=t&&n.push(t),0!=e&&n.push((0===t?e:Math.abs(e))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator+=t.numerator,e.normalize()},Fraction.prototype.subtract=function(t){var e=this.clone();return t=t instanceof Fraction?t.clone():new Fraction(t),td=e.denominator,e.rescale(t.denominator),t.rescale(td),e.numerator-=t.numerator,e.normalize()},Fraction.prototype.multiply=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.numerator,e.denominator*=t.denominator;else{if("number"!=typeof t)return e.multiply(new Fraction(t));e.numerator*=t}return e.normalize()},Fraction.prototype.divide=function(t){var e=this.clone();if(t instanceof Fraction)e.numerator*=t.denominator,e.denominator*=t.numerator;else{if("number"!=typeof t)return e.divide(new Fraction(t));e.denominator*=t}return e.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var e=this.clone().normalize();t=t.clone().normalize();return e.numerator===t.numerator&&e.denominator===t.denominator},Fraction.prototype.normalize=(Lr=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},Mr=function(t,e){if(e){var r=Math.pow(10,e);return Math.round(t*r)/r}return Math.round(t)},function(){if(Lr(this.denominator)){var t=Mr(this.denominator,9),e=Math.pow(10,t.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*e),this.numerator*=e}Lr(this.numerator)&&(t=Mr(this.numerator,9),e=Math.pow(10,t.toString().split(".")[1].length),this.numerator=Math.round(this.numerator*e),this.denominator*=e);var r=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=r,this.denominator/=r,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(t,e){var r=[],n=Fraction.primeFactors(t),o=Fraction.primeFactors(e);return n.forEach((function(t){var e=o.indexOf(t);e>=0&&(r.push(t),o.splice(e,1))})),0===r.length?1:function(){var t,e=r[0];for(t=1;t<r.length;t++)e*=r[t];return e}()},Fraction.primeFactors=function(t){for(var e=Math.abs(t),r=[],n=2;n*n<=e;)e%n==0?(r.push(n),e/=n):n++;return 1!=e&&r.push(e),r},Fr=Fraction;var xr=new class extends kr{_parentElement=document.querySelector(".recipe");_errorMessage="Please choose a recipe to display.";_message="";addHandlerRender(t){["hashchange","load"].forEach((e=>window.addEventListener(e,t)))}_generateMarkupIngredient(t){return`<li class="recipe__ingredient">\n                <svg class="recipe__icon">\n                  <use href="${r(jr)}#icon-check"></use>\n                </svg>\n                <div class="recipe__quantity">${t.quantity?new Fr(t.quantity).toString():""}</div>\n                <div class="recipe__description">\n                  <span class="recipe__unit">${t.unit}</span>\n                    ${t.description}\n                </div>\n              </li>`}_generateMarkUp(){return`\n      <figure class="recipe__fig">\n        <img src="${this._data.image_url}" alt="${this._data.title}" class="recipe__img" />\n        <h1 class="recipe__title">\n          <span>${this._data.title}</span>\n        </h1>\n      </figure>\n\n      <div class="recipe__details">\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${r(jr)}#icon-clock"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>\n          <span class="recipe__info-text">minutes</span>\n        </div>\n        <div class="recipe__info">\n          <svg class="recipe__info-icon">\n            <use href="${r(jr)}#icon-users"></use>\n          </svg>\n          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>\n          <span class="recipe__info-text">servings</span\n          <div class="recipe__info-buttons">\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${r(jr)}#icon-minus-circle"></use>\n              </svg>\n            </button>\n            <button class="btn--tiny btn--increase-servings">\n              <svg>\n                <use href="${r(jr)}#icon-plus-circle"></use>\n              </svg>\n            </button>\n          </div>\n        </div>\n        <div class="recipe__user-generated">\n        </div>\n        <button class="btn--round">\n          <svg class="">\n            <use href="${r(jr)}#icon-bookmark-fill"></use>\n          </svg>\n        </button>\n      </div>\n\n      <div class="recipe__ingredients">\n        <h2 class="heading--2">Recipe ingredients</h2>\n        <ul class="recipe__ingredient-list">\n        ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}\n        </ul>\n      </div>\n      <div class="recipe__directions">\n        <h2 class="heading--2">How to cook it</h2>\n        <p class="recipe__directions-text">\n          This recipe was carefully designed and tested by\n          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out\n          directions at their website.\n        </p>\n        <a\n          class="btn--small recipe__btn"\n          href="${this._data.source_url}"\n          target="_blank"\n        >\n          <span>Directions</span>\n          <svg class="search__icon">\n            <use href="${r(jr)}#icon-arrow-right"></use>\n          </svg>\n        </a>\n      </div>`}};var Pr=new class{_parentElement=document.querySelector(".search");getQuery(){const t=this._parentElement.querySelector(".search__field").value;return this._clearInput(),t}_clearInput(){this._parentElement.querySelector(".search__field").value=""}addHandlerSearch(t){this._parentElement.addEventListener("submit",(function(e){e.preventDefault(),t()}))}};var Tr=new class extends kr{_parentElement=document.querySelector(".search");_errorMessage="No recipies found for your query. Please try again.";_message="";_generateMarkUpPreview(t){return`\n        <li class="preview">\n            <a class="preview__link" href="#${t.id}">\n              <figure class="preview__fig">\n                <img src="${t.image_url}" alt="${t.title}" />\n              </figure>\n              <div class="preview__data">\n                <h4 class="preview__title">"${t.title}"</h4>\n                <p class="preview__publisher">${t.publisher}</p>\n              </div>\n            </a>\n        </li>`}_generateMarkUp(){return this._data.map(this._generateMarkUpPreview()).join("")}},$r=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof m?e:m,a=Object.create(i.prototype),c=new k(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,a)&&(b=w);var E=y.prototype=m.prototype=Object.create(b);function S(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function O(t,e){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,r){var n=p;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=F(a,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===p)throw n=d,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?d:"suspendedYield",s.arg===v)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=d,r.method="throw",r.arg=s.arg)}}}function F(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,F(t,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=f(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,v):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function x(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return g.prototype=y,o(E,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(O.prototype),u(O.prototype,c,(function(){return this})),t.AsyncIterator=O,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new O(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},S(E),u(E,s,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=x,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:x(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),v}},t}({});try{regeneratorRuntime=$r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=$r:Function("r","regeneratorRuntime = r")($r)}const Ir=async function(){try{let t=window.location.hash.slice(1);if(!t)return;xr.renderSpinner(),await async function(t){try{const e=await Sr(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`);Or.recipe=e.data.recipe}catch(t){throw t}}(t),xr.render(Or.recipe)}catch(t){xr.renderError(),console.log(t)}},Nr=async function(){try{Tr.renderSpinner();const t=Pr.getQuery();if(!t)return;await async function(t){try{return this.state.search.query=t,(await Sr(`https://forkify-api.herokuapp.com/api/v2/recipes/?search=${t}`)).data.recipes}catch(t){throw t}}(t),console.log(Or.search.results),Tr.render(Or.search.results)}catch(t){console.log(t)}};xr.addHandlerRender(Ir),Pr.addHandlerSearch(Nr);
//# sourceMappingURL=index.6e68a02b.js.map
