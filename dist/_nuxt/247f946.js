(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{951:function(e,t,n){"use strict";n.r(t);n(19);var c={data:function(){return{value:!0,config:{userId:"userid",selectedDevice:{name:"Maquina 2",dId:"7777",templateName:"Power Sensor",templateId:"23423904839849f3f2ff"},variableFullName:"Pump",variable:"",icon:"fa-sun",column:"col-6",widget:"indicator",class:"danger"}}},beforeDestroy:function(){var e=this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/sdata";this.$nuxt.$off(e)},mounted:function(){var e=this.config.userId+"/"+this.config.selectedDevice.dId+"/"+this.config.variable+"/sdata";console.log(e),this.$nuxt.$on(e,this.processReceivedData)},methods:{processReceivedData:function(data){console.log("received"),console.log(data),this.value=data.value},getIconColorClass:function(){return this.value?"success"==this.config.class?"text-success":"primary"==this.config.class?"text-primary":"warning"==this.config.class?"text-warning":"danger"==this.config.class?"text-danger":void 0:"text-dark"}}},o=n(2),component=Object(o.a)(c,(function(){var e=this,t=e._self._c;return t("card",[t("div",{attrs:{slot:"header"},slot:"header"},[t("h4",{staticClass:"card-title"},[e._v(e._s(e.config.selectedDevice.name)+" - "+e._s(e.config.variableFullName))])]),e._v(" "),t("i",{staticClass:"fa",class:[e.config.icon,e.getIconColorClass()],staticStyle:{"font-size":"30px"}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:n(51).default})}}]);