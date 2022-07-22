import { defineStore } from "pinia";
import { LastUpdate } from "@/services/LastUpdate";
import { History } from "@/services/History";
import { useConfigStore } from "@/store/configStore.js";
import axios from "axios";

const config = useConfigStore();
export const useHistoryStore = defineStore("History Store", {
  state: () => {
    return {
      documents: [],
      date: "",
    };
  },
  actions: {
    async getInfos() {

      if (this.documents.length > 0) {
        return;
      }
      const data = await History.getHistory();
      this.documents = data.documents
      this.date = data.date;
      // console.log(data);
      // data.forEach(async (element) => {
      //   console.log("nouvelle boucle");
      //   try {
      //     const response = await axios.get(
      //       config.pdfreactorWebservice +
      //         "/service/rest/document/metadata/" +
      //         element +
      //         ".json"
      //     );
      //     this.documents.push(response.data);
      //   } catch (e) {
      //     this.documents.push(e.response.data);
      //   }
      // });
      // localStorage.history = JSON.stringify({
      //   date: Date.now(),
      //   documents: documents,
      // });
      // data.array.forEach(async (element) => {
      //   try {
      //   const response = await axios.get(config.pdfreactorWebservice + '/service/rest/document/metadata/' + props.documentPdf.documentId + '.json');
      //   dataResponse = response.data;

      //   } catch (e) {

      //     dataResponse = e.response.data;

      //   }
      //   this.documents.push(dataResponse);
      // });
      // this.documents = data;
      // //   data.map((value) => {
      // //   return { documentId: value };
      // // });

      // this.date = data.date;
    },
  },
  getters: {
    lastUpdate: (state) => LastUpdate.from(state.date),
    getDocumentByid: (state) => (id) => state.documents.find(doc => doc.documentId === id)
  },
});
