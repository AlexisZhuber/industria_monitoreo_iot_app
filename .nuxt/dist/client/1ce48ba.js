(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{955:function(e,r,t){"use strict";t.r(r);var o={components:{BaseCheckbox:t(62).BaseCheckbox},data:function(){return{model:{email:"",password:"",confirmPassword:"",subscribe:!1},modelValidations:{email:{required:!0,email:!0},password:{required:!0,min:5},confirmPassword:{required:!0,confirmed:"password"},subscribe:{required:!0}}}},methods:{getError:function(e){return this.errors.first(e)},validate:function(){var e=this;this.$validator.validateAll().then((function(r){e.$emit("on-submit",e.registerForm,r)}))}}},l=t(2),component=Object(l.a)(o,(function(){var e=this,r=e._self._c;return r("form",[r("card",{attrs:{"footer-classes":"text-right"}},[r("div",{attrs:{slot:"header"},slot:"header"},[r("h4",{staticClass:"card-title"},[e._v("Register Form")])]),e._v(" "),r("div",[r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.email,expression:"modelValidations.email"}],attrs:{type:"email",required:"",name:"email",label:"Email address",error:e.getError("email")},model:{value:e.model.email,callback:function(r){e.$set(e.model,"email",r)},expression:"model.email"}}),e._v(" "),r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.password,expression:"modelValidations.password"}],attrs:{label:"Password",required:"",type:"password",name:"password",error:e.getError("password")},model:{value:e.model.password,callback:function(r){e.$set(e.model,"password",r)},expression:"model.password"}}),e._v(" "),r("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.confirmPassword,expression:"modelValidations.confirmPassword"}],attrs:{label:"Confirm Password",required:"",type:"password",name:"confirm",error:e.getError("confirm")},model:{value:e.model.confirmPassword,callback:function(r){e.$set(e.model,"confirmPassword",r)},expression:"model.confirmPassword"}}),e._v(" "),r("div",{staticClass:"category form-category"},[e._v("* Required fields")])],1),e._v(" "),r("template",{staticClass:"text-right",slot:"footer"},[r("base-checkbox",{staticClass:"pull-left",attrs:{name:"subscribe"},model:{value:e.model.subscribe,callback:function(r){e.$set(e.model,"subscribe",r)},expression:"model.subscribe"}},[e._v("\n        Accept terms & conditions\n      ")]),e._v(" "),r("base-button",{attrs:{"native-type":"submit",type:"primary"},on:{click:function(r){return r.preventDefault(),e.validate.apply(null,arguments)}}},[e._v("Register")])],1)],2)],1)}),[],!1,null,null,null);r.default=component.exports;installComponents(component,{BaseInput:t(104).default,BaseCheckbox:t(124).default,BaseButton:t(63).default,Card:t(51).default})}}]);