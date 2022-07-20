import axios from "axios";
import { useConfigStore } from "@/store/configStore.js";
const config = useConfigStore();

export class History {
  static async getHistory() {
    const jsonData = require('./historyStore.json');
    // console.log(jsonData);

    // const data = await this.refreshHistory();

    // localStorage.history = JSON.stringify({ date: Date.now(), history: data });
    return jsonData;
  }
  static async refreshHistory() {
    return axios.get(config.pdfReactorLogService + "?apiKey=" + config.apikey);
  }
}
