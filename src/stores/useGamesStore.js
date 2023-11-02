import { defineStore } from "pinia";

export const useGamesStore = defineStore("games", {
  state: () => {
    return {
      isLoading: true,
      error: null,
      platform: "all",
      sort: "popularity",
      category: null,
      results: 0,
      allGamesData: undefined,
      specificGameData: undefined,
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
      let category;

      if (state.category === null) {
        category = "";
      } else {
        category = ` ${state.category.toUpperCase().split("-").join(" ")}`;
      }

      if (state.platform === "pc") {
        return [`Best free${category} games for PC in 2023!`, "PC games"];
      } else if (state.platform === "browser") {
        return [
          `Best free${category} games for Browser in 2023!`,
          "browser games",
        ];
      } else {
        return [
          `Best free${category} games for PC and Browser in 2023!`,
          "games",
        ];
      }
    },
    numOfResults: (state) => state.results,
    selectedGame: (state) => state.specificGameData,
    defaultSearchResults: (state) => state.allGamesData.slice(0, 20),
  },
  actions: {
    setFilters(platform, sort = "popularity", category) {
      this.platform = platform;
      this.sort = sort;
      this.category = category;

      console.log(platform);
      console.log(category);

      this.fetchListOfGames();
    },
    // Fetches a list of games
    async fetchListOfGames() {
      // Set loading to true
      this.isLoading = true;
      // Set error to null
      this.error = null;

      const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${
        this.platform
      }&sort-by=${this.sort}${
        this.category !== null ? `&category=${this.category}` : ""
      }`;

      try {
        const response = await fetch(url, this.options);

        if (!response.ok) {
          console.warn(response);
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        // this.allGamesData = { ...responseData };
        this.allGamesData = responseData;
        this.results = responseData.length;
        console.log(responseData);
      } catch (err) {
        console.error(err.message);

        this.error = err.message;
      }

      // Set loading to false
      this.isLoading = false;
    },
    // Fetches a specific game
    async fetchGame(id) {
      // Set loading to true
      this.isLoading = true;
      // Set error to null
      this.error = null;

      try {
        const response = await fetch(
          `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
          this.options
        );

        if (!response.ok) {
          console.warn(response);
          throw new Error("Something went wrong!");
        }

        const responseData = await response.json();

        this.specificGameData = responseData;
        console.log(responseData);
      } catch (err) {
        console.error(err.message);

        this.error = err.message;
      }

      // Set loading to false
      this.isLoading = false;
    },
  },
});
