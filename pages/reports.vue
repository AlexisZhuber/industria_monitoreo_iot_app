<template>
  <div>
    <card>
      <div slot="header">
        <h4 class="card-tittle">Report generator</h4>
      </div>
      <div class="row">
        <div class="col-6">
          <base-input>
            <el-date-picker
              type="date"
              placeholder="From date"
              v-model="dateFrom"
            >
            </el-date-picker>
          </base-input>
        </div>

        <div class="col-6">
          <base-input>
            <el-date-picker type="date" placeholder="To date" v-model="dateTo">
            </el-date-picker>
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <slot name="label">
            <label> Maquina </label>
          </slot>
          <el-select
            v-model="selectedIndexMachine"
            placeholder="Select Date"
            class="select-default"
            style="width: 100%"
          >
            <el-option
              v-for="(machine, index) in $store.state.devices"
              :key="index"
              class="text-dark"
              :value="index"
              :label="machine.name"
            ></el-option>
          </el-select>
        </div>
      </div>

      <div class="row"><br /><br /></div>

      <div class="row pull-right">
        <div class="col-12">
          <base-button
            type="blue"
            class="mb-3"
            size="lg"
            @click="descargarExcel()"
            >Descargar reporte</base-button
          >
        </div>
      </div>
    </card>
  </div>
</template>
  
  <script>
import { TimeSelect, DatePicker, Select, Option } from "element-ui";
import exportXlsFile from "export-from-json";

export default {
  middleware: "authenticated",
  name: "extended-forms",
  components: {
    [DatePicker.name]: DatePicker,
    [TimeSelect.name]: TimeSelect,
    [Option.name]: Option,
    [Select.name]: Select,
  },
  data() {
    return {
      selectedIndexMachine: null,
      machines: [],
      dataComplete: [],
      dateFrom: "",
      dateTo: "",
    };
  },
  mounted() {
    this.$store.dispatch("getDevices");
  },
  methods: {
    descargarExcel() {
      if (
        this.dateFrom == "" ||
        this.dateTo == "" ||
        this.dateFrom == null ||
        this.dateTo == null ||
        this.selectedIndexMachine == null
      ) {
        this.$notify({
          type: "danger",
          message: `You need to select both dates and machine`,
          icon: "tim-icons icon-alert-circle-exc",
        });
      } else {
        var infoMachienSelect =
          this.$store.state.devices[this.selectedIndexMachine];
        //console.log(infoMachienSelect.name);
        //console.log(infoMachienSelect.dId);
        var from = this.dateFrom.toLocaleDateString();
        var to = this.dateTo.toLocaleDateString();

        var fromQuery = this.dateFrom.getTime();
        var toQuery = this.dateTo.getTime();

        //console.log("From: " + from + ", To: " + to);

        const axiosHeaders = {
          headers: {
            token: $nuxt.$store.state.auth.token,
          },
          params: {
            dId: infoMachienSelect.dId,
            name: infoMachienSelect.name,
            from: fromQuery,
            to: toQuery,
          },
        };
        this.$axios
          .get("/get-data-reports", axiosHeaders)
          .then((res) => {
            const data = res.data.data;

            const fileName = "From: " + from + ", To: " + to + ", " + infoMachienSelect.name;

            data.forEach((element) => {
              var date = new Date(element.createdTime);
              var d = date.toLocaleDateString();
              var t = date.toLocaleTimeString();
              element.createdTime = "-" + d + " " + t + "-";
              delete element.__v;
              delete element._id;
              delete element.name;
              delete element.dId;
            });

            const exportType = exportXlsFile.types.csv;
            exportXlsFile({ data, fileName, exportType });
            return;
          })
          .catch((e) => {
            console.log(e);
            return;
          });
      }
    },
  },
};
</script>
  <style>
.extended-forms .el-select {
  width: 100%;
  margin-bottom: 30px;
}

.extended-forms .progress {
  margin-bottom: 30px;
}
</style>
  