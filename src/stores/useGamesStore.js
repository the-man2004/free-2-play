import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => {
    return {
      name: "Free-2-Play",
    };
  },
  getters: {},
  actions: {},
});
