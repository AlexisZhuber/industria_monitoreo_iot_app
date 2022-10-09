<template>
  <div>
    <!-- FORM ADD DEVICE -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card-title">Add new Device</h4>
        </div>

        <div class="row">
          <div class="col-6">
            <base-input
              label="Device name"
              type="text"
              placeholder="Ex: Maquina 1, Maquina mantenimiento..."
              v-model="newDevice.name"
            >
            </base-input>
          </div>

          <div class="col-6">
            <base-input
              label="Device Id"
              type="text"
              placeholder="Ex: 4324"
              v-model="newDevice.dId"
            >
            </base-input>
          </div>
        </div>

        <div class="row pull-right">
          <div class="col-12">
            <base-button
              type="blue"
              class="mb-3"
              size="lg"
              @click="createNewDevice()"
              >Add</base-button
            >
          </div>
        </div>
      </card>
    </div>

    <!-- DEVICES TABLE -->
    <div class="row">
      <card>
        <div slot="header">
          <h4 class="card-tittle">Devices</h4>
        </div>

        <el-table class="table-striped" :data="$store.state.devices">
          <el-table-column type="index" label="#" min-width="50" align="center">
            <div slot-scope="{ $index }">
              {{ $index + 1 }}
            </div>
          </el-table-column>

          <el-table-column prop="name" label="Name"></el-table-column>

          <el-table-column prop="dId" label="Device Id"></el-table-column>

          <el-table-column label="Actions">
            <div slot-scope="{ row, $index }">
              <el-tooltip
                content="Delete"
                effect="light"
                :open-delay="300"
                placement="top"
              >
                <base-button
                  type="danger"
                  icon
                  size="sm"
                  class="btn-link"
                  @click="deleteDevice(row, $index)"
                >
                  <i class="tim-icons icon-simple-remove"></i>
                </base-button>
              </el-tooltip>
            </div>
          </el-table-column>
        </el-table>
      </card>
    </div>

    <!--<Json :value="$store.state.devices"></Json>-->
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";
export default {
  middleware: "authenticated",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Option.name]: Option,
    [Select.name]: Select,
  },
  data() {
    return {
      texto: "",
      newDevice: {
        name: "",
        dId: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch("getDevices");
  },
  methods: {
    deleteDevice(device, index) {
      var valor = prompt("Type the password");
      this.texto = valor;

      if (this.texto == "123123") {
        const axiosHeaders = {
          headers: {
            token: this.$store.state.auth.token,
          },
          params: {
            dId: device.dId,
          },
        };

        this.$axios
          .delete("/device", axiosHeaders)
          .then((res) => {
            if (res.data.status == "success") {
              this.$notify({
                type: "success",
                icon: "tim-icons icon-check-2",
                message: device.name + " deleted!",
              });
              this.$store.dispatch("getDevices");
            }
            $nuxt.$emit("time-to-get-devices");
            return;
          })
          .catch((e) => {
            console.log(e);
            this.$notify({
              type: "danger",
              icon: "tim-icons icon-alert-circle-exc",
              message: " Error deleting " + device.name,
            });
            return;
          });
      } else {
        this.$notify({
          type: "danger",
          icon: "tim-icons icon-alert-circle-exc",
          message: " Error deleting " + device.name,
        });
      }
    },
    createNewDevice() {
      if (this.newDevice.name == "") {
        this.$notify({
          type: "warning",
          icon: "tim-icons icon-alert-circle-exc",
          message: " Device Name is Empty :(",
        });
        return;
      }
      if (this.newDevice.dId == "") {
        this.$notify({
          type: "warning",
          icon: "tim-icons icon-alert-circle-exc",
          message: " Device ID is Empty :(",
        });
        return;
      }
      const axiosHeaders = {
        headers: {
          token: this.$store.state.auth.token,
        },
      };
      const toSend = {
        newDevice: this.newDevice,
      };
      this.$axios
        .post("/device", toSend, axiosHeaders)
        .then((res) => {
          if (res.data.status == "success") {
            this.newDevice.name = "";
            this.newDevice.dId = "";
            this.$notify({
              type: "success",
              icon: "tim-icons icon-check-2",
              message: "Success! Device was added",
            });
            this.$store.dispatch("getDevices");
            return;
          }
        })
        .catch((e) => {
          if (
            e.response.data.status == "error" &&
            e.response.data.error.errors.dId.kind == "unique"
          ) {
            this.$notify({
              type: "warning",
              icon: "tim-icons icon-alert-circle-exc",
              message:
                "The device is already registered in the system. Try another device",
            });
            return;
          } else {
            this.showNotify("danger", "Error");
            return;
          }
        });
    },
  },
};
</script>