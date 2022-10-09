<template>
  <card type="chart">
    <template slot="header">
      <h5 class="card-category pull-right">
        {{ getTimeAgo((nowTime - time) / 1000) }} ago
      </h5>
      <!--<Json :value="config"></Json>-->

      <h5 class="card-category">
        {{ config.name }}
      </h5>

      <h3 class="card-title">
        <i
          class="fa"
          :class="['tim-icons icon-laptop', getIconColorClass()]"
          aria-hidden="true"
          style="font-size: 30px"
        ></i>
        <span>Last data = {{ value }}</span>
      </h3>
    </template>

    <div class="chart-area" style="height: 300px">
      <highchart
        style="height: 100%"
        v-if="isMounted"
        :options="chartOptions"
      />
    </div>

    <div class="row">
      <div class="col-12">
        <slot name="label">
          <label> Time </label>
        </slot>

        <el-select
          v-model="selectedIndexTime"
          placeholder="Select Date"
          class="select-default"
          style="width: 100%"
        >
          <el-option
            v-for="(time, index) in times"
            :key="index"
            class="text-dark"
            :value="index"
            :label="time"
          ></el-option>
        </el-select>
      </div>
    </div>
    <div class="row pull-right">
      <div class="col-12">
        <base-button type="blue" class="mb-3" size="lg" @click="updateData()"
          >Actualizar grafica</base-button
        >
      </div>
    </div>
  </card>
</template>
  
  
  <script>
import BaseButton from "../BaseButton.vue";
import { Select, Option } from "element-ui";

export default {
  name: "rtnumberchart",
  props: ["config"],
  data() {
    return {
      selectedIndexTime: null,
      times: ["Day", "Month", "Year"],
      dataChart: [],
      receivedTime: 0,
      value: 0,
      time: Date.now(),
      nowTime: Date.now(),
      isMounted: false,
      topic: "insert",
      chartOptions: {
        credits: {
          enabled: false,
        },
        chart: {
          renderTo: "container",
          defaultSeriesType: "line",
          backgroundColor: "rgba(0,0,0,0)",
        },
        title: {
          text: "",
        },
        xAxis: {
          type: "datetime",
          labels: {
            style: {
              color: "#d4d2d2",
            },
          },
        },
        yAxis: {
          title: {
            text: "",
          },
          labels: {
            style: {
              color: "#d4d2d2",
              font: "11px Trebuchet MS, Verdana, sans-serif",
            },
          },
        },
        plotOptions: {
          series: {
            label: {
              connectorAllowed: false,
            },
            pointStart: 2010,
          },
        },
        series: [
          {
            name: "",
            data: [],
            color: "#e14eca",
          },
        ],
        legend: {
          itemStyle: {
            color: "#d4d2d2",
          },
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 500,
              },
              chartOptions: {
                legend: {
                  layout: "horizontal",
                  align: "center",
                  verticalAlign: "bottom",
                },
              },
            },
          ],
        },
      },
    };
  },
  watch: {
    config: {
      immediate: true,
      deep: true,
      handler() {
        setTimeout(() => {
          this.value = 0;
          this.$nuxt.$off(this.topic + this.config.name);
          this.$nuxt.$on(this.topic + this.config.name, this.procesReceivedData);
          this.getChartData();
          this.updateColorClass();
          window.dispatchEvent(new Event("resize"));
        }, 300);
      },
    },
  },
  mounted() {
    this.getNow();
    this.updateColorClass();
  },
  beforeDestroy() {
    this.$nuxt.$off(this.topic + this.config.name);
  },
  methods: {
    updateColorClass() {
      this.chartOptions.series[0].color = "#00f2c3";
      this.chartOptions.series[0].name = this.config.variableTime;
    },
    getChartData() {
      //this.chartOptions.series[0].data = this.config.information;
      //this.isMounted = true;

      if (this.config.variableTime == "Day") {
        var select = 1440;
      }
      if (this.config.variableTime == "Month") {
        var select = 43200;
      }
      if (this.config.variableTime == "Year") {
        var select = 525600;
      }

      const axiosHeaders = {
        headers: {
          token: $nuxt.$store.state.auth.token,
        },
        params: {
          dId: this.config.dId,
          name: this.config.name,
          time: select,
        },
      };
      this.$axios
        .get("/get-small-charts-data", axiosHeaders)
        .then((res) => {
          this.isMounted = false;
          this.dataChart = [];
          const data = res.data.data;
          data.forEach((element) => {
            var aux = [];
            aux.push(
              element.createdTime +
                new Date().getTimezoneOffset() * 60 * 1000 * -1
            );
            aux.push(element.data);
            this.value = element.data;
            this.dataChart.push(aux);
          });
          this.chartOptions.series[0].data = this.dataChart;
          this.isMounted = true;
          return;
        })
        .catch((e) => {
          console.log(e);
          return;
        });
    },
    getIconColorClass() {
      return "text-success";
    },
    procesReceivedData(data) {
      if (this.config.name == data.name.toString()) {
        try {
          this.time = Date.now();
          this.value = data.value;
          setTimeout(() => {
            if (data.save == 1) {
              this.getChartData();
            }
          }, 1000);
        } catch (error) {
          console.log(error);
        }
      }
    },
    getNow() {
      this.nowTime = Date.now();
      setTimeout(() => {
        this.getNow();
      }, 1000);
    },
    getTimeAgo(seconds) {
      if (seconds < 0) {
        seconds = 0;
      }
      if (seconds < 59) {
        return seconds.toFixed() + " secs";
      }
      if (seconds > 59 && seconds <= 3600) {
        seconds = seconds / 60;
        return seconds.toFixed() + " min";
      }
      if (seconds > 3600 && seconds <= 86400) {
        seconds = seconds / 3600;
        return seconds.toFixed() + " hour";
      }
      if (seconds > 86400) {
        seconds = seconds / 86400;
        return seconds.toFixed() + " day";
      }
    },
    updateData() {
      //console.log(this.times[this.selectedIndexTime]);
      if (this.selectedIndexTime != null) {
        this.config.variableTime = this.times[this.selectedIndexTime];
        this.chartOptions.series[0].name = this.config.variableTime;

        this.getChartData();
      } else {
        this.$notify({
          type: "danger",
          message: `You need to make some selection for ` + this.config.name,
          icon: "tim-icons icon-alert-circle-exc",
        });
      }
    },
  },
  components: { BaseButton, [Option.name]: Option, [Select.name]: Select },
};
</script>