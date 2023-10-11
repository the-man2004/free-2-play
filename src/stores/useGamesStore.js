import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => {
    return {
      name: "Free-2-Play",
      gameData: null,
    };
  },
  getters: {},
  actions: {
    async fetchListOfGames(
      platform = "pc",
      sort = "popularity",
      category = null
    ) {
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "95d5f6cc3dmsh6284e340fd8f262p11e311jsn80b11045f6e9",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${platform}&sort-by=${sort}${
        category !== null ? `&category=${category}` : ""
      }`;

      try {
        const response = await fetch(url, options);

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const responseData = await response.json();

        this.gameData = { ...responseData };
        console.log(this.gameData);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
