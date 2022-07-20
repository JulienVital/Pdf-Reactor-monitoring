import { defineStore } from "pinia";
import { useConfigStore } from "@/store/configStore.js";
import { LastUpdate } from "@/services/LastUpdate";
import { ServerInfos } from "@/services/ServerInfos";
const config = useConfigStore();
export const useinfoServerStore = defineStore("infoServer", {
  state: () => {
    return {
      date: 0,
      id: "",
      name: "",
      parameters: [],
      plugins: [],
      serverInfo: {},
      state: "",
      version: {},
    };
  },
  actions: {
    async getInfos() {
      if (!config.getConfig()) {
        return;
      }

      const data = await ServerInfos.getServerInfo();

      this.date = data.date;
      this.id = data.id;
      this.name = data.name;
      this.parameters = data.parameters;
      this.plugins = data.plugins;
      this.serverInfo = data.serverInfo;
      this.state = data.state;
      this.version = data.version;
    },

    refreshInfos() {
      ServerInfos.refreshServerInfo().then(() => {
        this.getInfos();
      });
    },
  },
  getters: {
    lastUpdate: (state) => LastUpdate.from(state.date),
  },
});
