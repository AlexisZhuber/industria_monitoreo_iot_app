(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{879:function(t,e,n){var content=n(901);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(12).default)("528636aa",content,!0,{sourceMap:!1})},900:function(t,e,n){"use strict";n(879)},901:function(t,e,n){var o=n(11)(!1);o.push([t.i,"\n.navbar-nav .nav-item p {\r\n  line-height: inherit;\r\n  margin-left: 5px;\n}\r\n",""]),t.exports=o},932:function(t,e,n){"use strict";n.r(e);n(19);var o={middleware:"notAuthenticated",name:"login-page",layout:"auth",data:function(){return{user:{email:"",password:""}}},mounted:function(){},methods:{login:function(){var t=this;this.$axios.post("/login",this.user).then((function(e){if("success"==e.data.status){t.$notify({type:"success",icon:"tim-icons icon-check-2",message:"Success! Welcome "+e.data.userData.name}),console.log(e.data);var n={token:e.data.token,userData:e.data.userData};return t.$store.commit("setAuth",n),localStorage.setItem("auth",JSON.stringify(n)),t.user.email="",t.user.password="",void $nuxt.$router.push("/dashboard")}})).catch((function(e){console.log(e.response.data),t.$notify({type:"danger",icon:"tim-icons icon-alert-circle-exc",message:"Invalid credentials..."})}))}}},r=(n(900),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container login-page"},[e("div",{staticClass:"col-lg-4 col-md-6 ml-auto mr-auto"},[e("card",{staticClass:"card-login card-white"},[e("template",{slot:"header"},[e("img",{attrs:{src:"img//card-info.png",alt:""}})]),t._v(" "),e("br"),e("br"),e("br"),e("br"),t._v(" "),e("h1",{staticClass:"text-dark"},[t._v("Academia de Tecnología")]),t._v(" "),e("div",[e("base-input",{attrs:{name:"email",placeholder:"Email","addon-left-icon":"tim-icons icon-email-85"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}}),t._v(" "),e("base-input",{attrs:{name:"password",type:"password",placeholder:"Password","addon-left-icon":"tim-icons icon-lock-circle"},model:{value:t.user.password,callback:function(e){t.$set(t.user,"password",e)},expression:"user.password"}})],1),t._v(" "),e("div",{attrs:{slot:"footer"},slot:"footer"},[e("base-button",{staticClass:"mb-3",attrs:{"native-type":"submit",type:"blue",size:"lg",block:""},on:{click:function(e){return t.login()}}},[t._v("\n          Login\n        ")])],1)],2)],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseInput:n(104).default,BaseButton:n(63).default,Card:n(51).default})}}]);