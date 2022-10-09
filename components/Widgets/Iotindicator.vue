<template>
  <card>
    <div slot="header">
          <h4 class="card-title">{{config.selectedDevice.name}} - {{config.variableFullName}}</h4>
    </div> 

    <i class="fa" :class="[config.icon, getIconColorClass()]" style="font-size: 30px"></i>

  </card>
</template>

<script>
export default {
  //props: ['config'],
  data() {
    return {
      value: true,
      config: {
        userId: "userid",
        selectedDevice: {
          name: "Maquina 2",
          dId: "7777",
          templateName: "Power Sensor",
          templateId: "23423904839849f3f2ff"
        },
        variableFullName: "Pump",
        variable: "",
        icon: "fa-sun",
        column: 'col-6',
        widget: 'indicator',
        class: 'danger'
      },
    };
  },
  beforeDestroy() {
    const topic = this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata";
    this.$nuxt.$off(topic);
  },
  mounted(){
    const topic = this.config.userId + "/" + this.config.selectedDevice.dId + "/" + this.config.variable + "/sdata";
    console.log(topic);
    this.$nuxt.$on(topic, this.processReceivedData);
  },
  methods: {

    processReceivedData(data){
      console.log("received");
      console.log(data)
      this.value = data.value;
    },

    getIconColorClass(){
      if(!this.value){
        return "text-dark";
      }

      if(this.config.class == "success"){
          return "text-success";
      }

      if(this.config.class == "primary"){
          return "text-primary";
      }

      if(this.config.class == "warning"){
          return "text-warning";
      }

      if(this.config.class == "danger"){
          return "text-danger";
      }

    }
  }
};
</script>
