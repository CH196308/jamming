(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[72],{DAui:function(e,t,a){"use strict";a.d(t,"a",(function(){return RecaptchaWrapper}));var r=a("q1tI"),n=a.n(r),c=a("0iCA");class RecaptchaWrapper extends r.PureComponent{constructor(...e){super(...e),this.setCaptchaRef=e=>{this.captcha=e},this.execute=()=>{this.captcha.execute()}}render(){const e=this.props,t=e.size,a=e.publicKey,r=e.onChange,p=e.onExpired;return n.a.createElement(c.a,{ref:this.setCaptchaRef,badge:"bottomright",size:t,onChange:r,onExpired:p,sitekey:a})}}RecaptchaWrapper.defaultProps={size:"normal",onExpired:()=>{},onChange:()=>{}}}}]);
//# sourceMappingURL=72.9d7eba19de803c1f38a7.chunk.js.map