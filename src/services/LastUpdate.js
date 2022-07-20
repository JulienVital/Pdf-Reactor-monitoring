export class LastUpdate {
  static from($date) {
    const date = new Date($date);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const diffSeconds = Math.floor(diff / 1000);
    const diffMinutes = Math.floor(diff / 60000);
    const diffHours = Math.floor(diff / 3600000);
    const diffDays = Math.floor(diff / 86400000);
    const diffWeeks = Math.floor(diff / 604800000);
    const diffMonths = Math.floor(diff / 2629800000);
    const diffYears = Math.floor(diff / 31556952000);
    if (diffSeconds < 60) {
      return "recently";
    } else if (diffMinutes < 60) {
      return diffMinutes + " mins";
    } else if (diffHours < 24) {
      return diffHours + " hours";
    } else if (diffDays < 7) {
      return diffDays + " days";
    } else if (diffWeeks < 4) {
      return diffWeeks + " weeks";
    } else if (diffMonths < 12) {
      return diffMonths + " months";
    } else {
      return "recently";
    }
  }
}
