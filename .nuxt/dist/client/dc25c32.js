(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{952:function(e,l,t){"use strict";t.r(l);var r={data:function(){return{model:{required:"",email:"",number:"",equalToSourceurl:"",equalToSource:"",equalToDest:""},modelValidations:{required:{required:!0},email:{email:!0},number:{numeric:!0},url:{url:!0},equalToSource:{required:!0},equalToDest:{required:!0,confirmed:"equalToSource"}}}},methods:{getError:function(e){return this.errors.first(e)},validate:function(){var e=this;this.$validator.validateAll().then((function(l){e.$emit("on-submit",e.registerForm,l)}))}}},o=t(2),component=Object(o.a)(r,(function(){var e=this,l=e._self._c;return l("form",{staticClass:"form-horizontal"},[l("card",[l("h4",{staticClass:"card-title",attrs:{slot:"header"},slot:"header"},[e._v("Type Validation")]),e._v(" "),l("div",[l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Requred Text")]),e._v(" "),l("div",{staticClass:"col-sm-7"},[l("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.required,expression:"modelValidations.required"}],attrs:{name:"required",error:e.getError("required")},model:{value:e.model.required,callback:function(l){e.$set(e.model,"required",l)},expression:"model.required"}})],1),e._v(" "),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('required="true"')])])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Email")]),e._v(" "),l("div",{staticClass:"col-sm-7"},[l("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.email,expression:"modelValidations.email"}],attrs:{name:"email",error:e.getError("email")},model:{value:e.model.email,callback:function(l){e.$set(e.model,"email",l)},expression:"model.email"}})],1),e._v(" "),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('email="true"')])])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Number")]),e._v(" "),l("div",{staticClass:"col-sm-7"},[l("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.number,expression:"modelValidations.number"}],attrs:{name:"number",error:e.getError("number")},model:{value:e.model.number,callback:function(l){e.$set(e.model,"number",l)},expression:"model.number"}})],1),e._v(" "),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('numeric="true"')])])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Url")]),e._v(" "),l("div",{staticClass:"col-sm-7"},[l("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.url,expression:"modelValidations.url"}],attrs:{name:"url",error:e.getError("url")},model:{value:e.model.url,callback:function(l){e.$set(e.model,"url",l)},expression:"model.url"}})],1),e._v(" "),l("label",{staticClass:"col-sm-3 label-on-right"},[l("code",[e._v('url="true"')])])]),e._v(" "),l("div",{staticClass:"row"},[l("label",{staticClass:"col-sm-2 col-form-label"},[e._v("Url")]),e._v(" "),l("div",{staticClass:"col-sm-3"},[l("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.equalToSource,expression:"modelValidations.equalToSource"}],attrs:{name:"equalToSource",placeholder:"Source field",error:e.getError("equalToSource")},model:{value:e.model.equalToSource,callback:function(l){e.$set(e.model,"equalToSource",l)},expression:"model.equalToSource"}})],1),e._v(" "),l("div",{staticClass:"col-sm-3"},[l("base-input",{directives:[{name:"validate",rawName:"v-validate",value:e.modelValidations.equalToDest,expression:"modelValidations.equalToDest"}],attrs:{name:"equalToDest",placeholder:"Destination field",error:e.getError("equalToDest")},model:{value:e.model.equalToDest,callback:function(l){e.$set(e.model,"equalToDest",l)},expression:"model.equalToDest"}})],1),e._v(" "),l("label",{staticClass:"col-sm-4 label-on-right"},[l("code",[e._v('confirmed="equalToSource"')])])])]),e._v(" "),l("div",{staticClass:"text-center"},[l("base-button",{attrs:{"native-type":"submit",type:"primary"},nativeOn:{click:function(l){return l.preventDefault(),e.validate.apply(null,arguments)}}},[e._v("Validate inputs")])],1)])],1)}),[],!1,null,null,null);l.default=component.exports;installComponents(component,{BaseInput:t(104).default,BaseButton:t(63).default,Card:t(51).default})}}]);