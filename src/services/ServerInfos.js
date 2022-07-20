import axios from "axios";
import { useConfigStore } from "@/store/configStore.js";
const config = useConfigStore();
export class ServerInfos {
  static async getServerInfo() {
    if (localStorage.server) {
      return JSON.parse(localStorage.server);
    }
    const data = await this.refreshServerInfo();

    localStorage.server = JSON.stringify(data.data);
    return data.data;
  }
  static async refreshServerInfo() {
    const data = await axios.get(
      config.pdfreactorWebservice +
        "/service/monitor/server?adminKey=" +
        config.apikey
    );
    localStorage.server = JSON.stringify(data.data);
    return data;
  }
}
