import{bZ as f,cs as h,ch as r}from"./app-DmW52sVY.js";var m=function(t){var n=t.dt;return`
.p-ink {
    display: block;
    position: absolute;
    background: `.concat(n("ripple.background"),`;
    border-radius: 100%;
    transform: scale(0);
    pointer-events: none;
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`)},y={root:"p-ink"},v=f.extend({name:"ripple-directive",theme:m,classes:y}),b=h.extend({style:v});function s(e){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(e)}function g(e){return S(e)||E(e)||A(e)||k()}function k(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function A(e,t){if(e){if(typeof e=="string")return a(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}function E(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function S(e){if(Array.isArray(e))return a(e)}function a(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}function p(e,t,n){return(t=w(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e){var t=$(e,"string");return s(t)=="symbol"?t:t+""}function $(e,t){if(s(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var o=n.call(e,t||"default");if(s(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var T=b.extend("ripple",{watch:{"config.ripple":function(t){t?(this.createRipple(this.$host),this.bindEvents(this.$host),this.$host.setAttribute("data-pd-ripple",!0),this.$host.style.overflow="hidden",this.$host.style.position="relative"):(this.remove(this.$host),this.$host.removeAttribute("data-pd-ripple"))}},unmounted:function(t){this.remove(t)},timeout:void 0,methods:{bindEvents:function(t){t.addEventListener("mousedown",this.onMouseDown.bind(this))},unbindEvents:function(t){t.removeEventListener("mousedown",this.onMouseDown.bind(this))},createRipple:function(t){var n=r.createElement("span",p(p({role:"presentation","aria-hidden":!0,"data-p-ink":!0,"data-p-ink-active":!1,class:!this.isUnstyled()&&this.cx("root"),onAnimationEnd:this.onAnimationEnd.bind(this)},this.$attrSelector,""),"p-bind",this.ptm("root")));t.appendChild(n),this.$el=n},remove:function(t){var n=this.getInk(t);n&&(this.$host.style.overflow="",this.$host.style.position="",this.unbindEvents(t),n.removeEventListener("animationend",this.onAnimationEnd),n.remove())},onMouseDown:function(t){var n=this,o=t.currentTarget,i=this.getInk(o);if(!(!i||getComputedStyle(i,null).display==="none")){if(!this.isUnstyled()&&r.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"),!r.getHeight(i)&&!r.getWidth(i)){var l=Math.max(r.getOuterWidth(o),r.getOuterHeight(o));i.style.height=l+"px",i.style.width=l+"px"}var u=r.getOffset(o),d=t.pageX-u.left+document.body.scrollTop-r.getWidth(i)/2,c=t.pageY-u.top+document.body.scrollLeft-r.getHeight(i)/2;i.style.top=c+"px",i.style.left=d+"px",!this.isUnstyled()&&r.addClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","true"),this.timeout=setTimeout(function(){i&&(!n.isUnstyled()&&r.removeClass(i,"p-ink-active"),i.setAttribute("data-p-ink-active","false"))},401)}},onAnimationEnd:function(t){this.timeout&&clearTimeout(this.timeout),!this.isUnstyled()&&r.removeClass(t.currentTarget,"p-ink-active"),t.currentTarget.setAttribute("data-p-ink-active","false")},getInk:function(t){return t&&t.children?g(t.children).find(function(n){return r.getAttribute(n,"data-pc-name")==="ripple"}):void 0}}});export{T as R};
