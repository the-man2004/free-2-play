import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => {
    return {
      platform: "all",
      results: 0,
      allGamesData: null,
      specificGameData: null,
      options: {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "95d5f6cc3dmsh6284e340fd8f262p11e311jsn80b11045f6e9",
          "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        },
      },
    };
  },
  getters: {
    selectedPlatform: (state) => {
      if (state.platform === "pc") {
        return ["Best free games for PC in 2023!", "PC games"];
      } else if (state.platform === "browser") {
        return ["Best free games for Browser in 2023!", "browser games"];
      } else {
        return ["Best free games for PC and Browser in 2023!", "games"];
      }
    },
    numOfResults: (state) => state.results,
  },
  actions: {
    // Fetches a list of games
    async fetchListOfGames(sort = "popularity", category = null) {
      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${
        this.platform
      }&sort-by=${sort}${category !== null ? `&category=${category}` : ""}`;

      try {
        const response = await fetch(url, this.options);

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        this.allGamesData = { ...responseData };
        this.results = responseData.length;
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    },
    // Fetches a specific game
    async fetchGame(id) {
      try {
        const response = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          this.options
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        this.specificGameData = responseData;
        console.log(responseData);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
