import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", {
  state: () => {
    return {
      apikey: "",
      pdfreactorWebservice: "",
      pdfReactorLogService: "",
    };
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    saveConfigInlocalStorage(config) {
      localStorage.config = JSON.stringify(config);
    },
    getConfig() {
      if (localStorage.config) {
        const config = JSON.parse(localStorage.config);
        this.apikey = config.apikey;
        this.pdfreactorWebservice = config.pdfreactorWebservice;
        this.pdfReactorLogService = config.pdfReactorLogService;
        return true;
      }
      return false;
    },
  },
});
