<template>
  <div class="min-h-screen p-8 bg-slate-900 text-gray-300">
    <div
      class="container mx-auto max-w-6xl grid gap-4 grid-cols-1 md:grid-cols-5"
    >
      <div class="md:sticky md:col-span-2">
        <div class="">
          <div class="relative">
            <img
              class="w-full mb-4"
              :src="thumbnails[currentImageIndex]"
              alt="Game thumbnail"
            />
            <button
              @click="handleImageSlide('prev')"
              class="z-10 text-xl px-2 absolute top-1/2 left-1 -translate-y-1/2 bg-gray-900/10 hover:bg-gray-900/20"
            >
              <i class="fa-solid fa-arrow-left"></i>
            </button>
            <button
              @click="handleImageSlide('next')"
              class="z-10 text-xl px-2 absolute top-1/2 right-1 -translate-y-1/2 bg-gray-900/10 hover:bg-gray-900/20"
            >
              <i class="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div class="py-4 px-2 bg-slate-800">
            <div class="">
              <span
                class="font-semibold py-1 px-4 mr-2 rounded-full bg-gray-700 text-blue-500"
                >FREE</span
              >
              <a
                class="py-1 px-4 rounded-full bg-gray-700 text-gray-300"
                :href="gameUrl"
                >More Info <i class="fa-solid fa-arrow-right-from-bracket"></i
              ></a>
            </div>
          </div>
          <div class="my-4 h-px w-full bg-blue-500"></div>
          <div class="py-4 px-2 bg-slate-800">
            <ul class="grid grid-cols-4">
              <li class="text-center">
                <button>
                  <i
                    class="fa-regular fa-face-smile text-xl text-green-500"
                  ></i>
                  <span class="block">511</span>
                  <span class="block">Like</span>
                </button>
              </li>
              <li class="text-center">
                <button>
                  <i class="fa-regular fa-face-meh text-xl text-gray-500"></i>
                  <span class="block">14</span>
                  <span class="block">Meh</span>
                </button>
              </li>
              <li class="text-center">
                <button>
                  <i class="fa-regular fa-face-frown text-xl text-red-500"></i>
                  <span class="block">23</span>
                  <span class="block">Dislike</span>
                </button>
              </li>
              <li class="text-center">
                <button>
                  <i class="fa-solid fa-plus text-xl text-blue-500"></i>
                  <span class="block">1257</span>
                  <span class="block">Add</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="md:col-span-3">
        <div class="mb-4 py-2 px-2 bg-slate-800">
          <span class="block mb-2"
            ><router-link to="/">Home</router-link> > Game > {{ title }}</span
          >
          <h2 class="text-3xl md:text-5xl">{{ title }}</h2>
        </div>
        <div class="mb-4 py-1 px-2 bg-slate-800 md:py-2 md:px-4">
          <h3 class="text-lg pb-2 md:text-xl">About {{ title }}</h3>
          <p class="text-sm whitespace-pre-line">{{ description }}</p>
        </div>
        <div class="mb-4 py-1 px-2 bg-slate-800 md:py-2 md:px-4">
          <figure>
            <figcaption class="text-lg pb-1 md:text-xl">
              Additional Information
            </figcaption>
            <p class="mb-4 text-sm text-gray-400">
              <i class="fa-solid fa-circle-exclamation"></i> Please note this
              free-2-play game may or may not offer optional in-game purchases.
            </p>
            <ul class="ml-2 text-sm grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
              <li class="mb-1">
                <span class="block text-gray-400">Title </span>{{ title }}
              </li>
              <li class="mb-1">
                <span class="block text-gray-400">Developer </span
                >{{ developer }}
              </li>
              <li class="mb-1">
                <span class="block text-gray-400">Publisher </span
                >{{ publisher }}
              </li>
              <li class="mb-1">
                <span class="block text-gray-400">Realease Date </span
                >{{ release_date }}
              </li>
              <li class="mb-1">
                <span class="block text-gray-400">Genre </span>{{ genre }}
              </li>
              <li class="mb-1">
                <span class="block text-gray-400">Platform </span>{{ platform }}
              </li>
            </ul>
          </figure>
        </div>
        <div class="mb-4 py-1 px-2 bg-slate-800 md:py-2 md:px-4">
          <figure>
            <figcaption class="text-lg pb-2">
              Minimum System Requirements <span>({{ platform }})</span>
            </figcaption>
            <div v-if="platform === 'Windows'">
              <ul class="ml-2 text-sm grid grid-cols-1 sm:grid-cols-2 sm:gap-4">
                <li class="mb-1">
                  <span class="block text-gray-400">OS</span>
                  {{ gamesStore.selectedGame.minimum_system_requirements.os }}
                </li>
                <li class="mb-1">
                  <span class="block text-gray-400">Processor</span>
                  {{
                    gamesStore.selectedGame.minimum_system_requirements
                      .processor
                  }}
                </li>
                <li class="mb-1">
                  <span class="block text-gray-400">Memory</span>
                  {{
                    gamesStore.selectedGame.minimum_system_requirements.memory
                  }}
                </li>
                <li class="mb-1">
                  <span class="block text-gray-400">Graphics</span>
                  {{
                    gamesStore.selectedGame.minimum_system_requirements.graphics
                  }}
                </li>
                <li class="mb-1">
                  <span class="block text-gray-400">Storage</span>
                  {{
                    gamesStore.selectedGame.minimum_system_requirements.storage
                  }}
                </li>
              </ul>
              <p class="text-sm mb-1 md:w-1/2 md:mt-4">
                <span>Additional Notes</span>
                Specifications may change during development
              </p>
            </div>
            <div v-else>
              <p class="text-sm whitespace-pre-line">
                {{ title }} is a browser based game and should run smoothly on
                practically any PC with a updated web-browser. If you have old
                hardware or software, you may still be able to play {{ title }},
                but your game experience may suffer. For the best gameplay
                experience, we recommend the latest versions of Firefox, Chrome,
                or Internet Explorer.
              </p>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useGamesStore } from "../stores/useGamesStore";
import { computed, ref } from "vue";

const gamesStore = useGamesStore();

const currentImageIndex = ref(0);

const thumbnails = computed(() => {
  const thumbailImage = gamesStore.selectedGame.thumbnail;
  const screenshots = gamesStore.selectedGame.screenshots.map((i) => i.image);

  const images = [thumbailImage, ...screenshots];

  return images;
});
const title = computed(() => gamesStore.selectedGame.title);
const gameUrl = computed(() => gamesStore.selectedGame.game_url);
const description = computed(() => gamesStore.selectedGame.description);

const developer = computed(() => gamesStore.selectedGame.developer);
const publisher = computed(() => gamesStore.selectedGame.publisher);
const release_date = computed(() => gamesStore.selectedGame.release_date);
const genre = computed(() => gamesStore.selectedGame.genre);
const platform = computed(() => gamesStore.selectedGame.platform);

// Image slider function
const handleImageSlide = (direction) => {
  const offset = direction === "next" ? 1 : -1;

  let newIndex = (currentImageIndex.value += offset);

  if (newIndex < 0) {
    newIndex = thumbnails.value.length - 1;
  }
  if (newIndex >= thumbnails.value.length) {
    newIndex = 0;
  }

  currentImageIndex.value = newIndex;
};
</script>
