(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{874:function(t,e,n){"use strict";n.r(e);n(19);var o,c=n(15),r=(n(725),n(78),n(726)),l=n.n(r),d=(n(727),n(728)),h=n.n(d),m=(n(45),n(8),n(26),n(65),n(371),{name:"rtnumberchart",props:["config"],data:function(){return{selectedIndexTime:null,times:["Day","Month","Year"],dataChart:[],receivedTime:0,value:0,time:Date.now(),nowTime:Date.now(),isMounted:!1,topic:"insert",chartOptions:{credits:{enabled:!1},chart:{renderTo:"container",defaultSeriesType:"line",backgroundColor:"rgba(0,0,0,0)"},title:{text:""},xAxis:{type:"datetime",labels:{style:{color:"#d4d2d2"}}},yAxis:{title:{text:""},labels:{style:{color:"#d4d2d2",font:"11px Trebuchet MS, Verdana, sans-serif"}}},plotOptions:{series:{label:{connectorAllowed:!1},pointStart:2010}},series:[{name:"",data:[],color:"#e14eca"}],legend:{itemStyle:{color:"#d4d2d2"}},responsive:{rules:[{condition:{maxWidth:500},chartOptions:{legend:{layout:"horizontal",align:"center",verticalAlign:"bottom"}}}]}}}},watch:{config:{immediate:!0,deep:!0,handler:function(){var t=this;setTimeout((function(){t.value=0,t.$nuxt.$off(t.topic+t.config.name),t.$nuxt.$on(t.topic+t.config.name,t.procesReceivedData),t.getChartData(),t.updateColorClass(),window.dispatchEvent(new Event("resize"))}),300)}}},mounted:function(){this.getNow(),this.updateColorClass()},beforeDestroy:function(){this.$nuxt.$off(this.topic+this.config.name)},methods:{updateColorClass:function(){this.chartOptions.series[0].color="#00f2c3",this.chartOptions.series[0].name=this.config.variableTime},getChartData:function(){var t=this;if("Day"==this.config.variableTime)var select=1440;if("Month"==this.config.variableTime)select=43200;if("Year"==this.config.variableTime)select=525600;var e={headers:{token:$nuxt.$store.state.auth.token},params:{dId:this.config.dId,name:this.config.name,time:select}};this.$axios.get("/get-small-charts-data",e).then((function(e){t.isMounted=!1,t.dataChart=[],e.data.data.forEach((function(element){var e=[];e.push(element.createdTime+60*(new Date).getTimezoneOffset()*1e3*-1),e.push(element.data),t.value=element.data,t.dataChart.push(e)})),t.chartOptions.series[0].data=t.dataChart,t.isMounted=!0})).catch((function(t){console.log(t)}))},getIconColorClass:function(){return"text-success"},procesReceivedData:function(data){var t=this;if(this.config.name==data.name.toString())try{this.time=Date.now(),this.value=data.value,setTimeout((function(){1==data.save&&t.getChartData()}),1e3)}catch(t){console.log(t)}},getNow:function(){var t=this;this.nowTime=Date.now(),setTimeout((function(){t.getNow()}),1e3)},getTimeAgo:function(t){return t<0&&(t=0),t<59?t.toFixed()+" secs":t>59&&t<=3600?(t/=60).toFixed()+" min":t>3600&&t<=86400?(t/=3600).toFixed()+" hour":t>86400?(t/=86400).toFixed()+" day":void 0},updateData:function(){null!=this.selectedIndexTime?(this.config.variableTime=this.times[this.selectedIndexTime],this.chartOptions.series[0].name=this.config.variableTime,this.getChartData()):this.$notify({type:"danger",message:"You need to make some selection for "+this.config.name,icon:"tim-icons icon-alert-circle-exc"})}},components:(o={BaseButton:n(63).default},Object(c.a)(o,h.a.name,h.a),Object(c.a)(o,l.a.name,l.a),o)}),f=n(2),component=Object(f.a)(m,(function(){var t=this,e=t._self._c;return e("card",{attrs:{type:"chart"}},[e("template",{slot:"header"},[e("h5",{staticClass:"card-category pull-right"},[t._v("\n      "+t._s(t.getTimeAgo((t.nowTime-t.time)/1e3))+" ago\n    ")]),t._v(" "),e("h5",{staticClass:"card-category"},[t._v("\n      "+t._s(t.config.name)+"\n    ")]),t._v(" "),e("h3",{staticClass:"card-title"},[e("i",{staticClass:"fa",class:["tim-icons icon-laptop",t.getIconColorClass()],staticStyle:{"font-size":"30px"},attrs:{"aria-hidden":"true"}}),t._v(" "),e("span",[t._v("Last data = "+t._s(t.value))])])]),t._v(" "),e("div",{staticClass:"chart-area",staticStyle:{height:"300px"}},[t.isMounted?e("highchart",{staticStyle:{height:"100%"},attrs:{options:t.chartOptions}}):t._e()],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[t._t("label",(function(){return[e("label",[t._v(" Time ")])]})),t._v(" "),e("el-select",{staticClass:"select-default",staticStyle:{width:"100%"},attrs:{placeholder:"Select Date"},model:{value:t.selectedIndexTime,callback:function(e){t.selectedIndexTime=e},expression:"selectedIndexTime"}},t._l(t.times,(function(time,t){return e("el-option",{key:t,staticClass:"text-dark",attrs:{value:t,label:time}})})),1)],2)]),t._v(" "),e("div",{staticClass:"row pull-right"},[e("div",{staticClass:"col-12"},[e("base-button",{staticClass:"mb-3",attrs:{type:"blue",size:"lg"},on:{click:function(e){return t.updateData()}}},[t._v("Actualizar grafica")])],1)])],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BaseButton:n(63).default,Card:n(51).default})}}]);