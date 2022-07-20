export class Config {
  static getConfig() {
    if (localStorage.server) {
      return JSON.parse(localStorage.server);
    }

    return;
  }
}
