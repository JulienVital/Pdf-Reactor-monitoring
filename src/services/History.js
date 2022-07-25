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

  static async getDocumentInfos(documentId) {
    const result = await axios.get(config.pdfReactorWebservice + "/service/rest/document/metadata/" + documentId + ".json" );
    console.log(result)
      return
  }
}
