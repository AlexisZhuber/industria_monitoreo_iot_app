<template>
  <div>
    <!--<Json :value="$store.state.devices"></Json>-->
    <div class="row" v-if="$store.state.devices.length > 0">
      <div
        v-for="(widget, index) in $store.state.devices"
        :key="index"
        class="col-12"
      >
        <Iotcomplete :config="fixWidget(widget)"></Iotcomplete>
      </div>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";
import Rtnumberchart from "../components/Widgets/Rtnumberchart.vue";
import Iotcomplete from "../components/Widgets/Iotcomplete.vue";
export default {
  middleware: "authenticated",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Option.name]: Option,
    [Select.name]: Select,
    Rtnumberchart,
    Iotcomplete,
  },
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getDevices");
  },
  methods: {
    fixWidget(widget) {
      var widgetCopy = JSON.parse(JSON.stringify(widget));
      return widgetCopy;
    },
  },
};
</script> 