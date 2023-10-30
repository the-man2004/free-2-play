<template>
  <div class="min-h-screen bg-slate-900 text-gray-300">
    <div class="py-12 px-8 max-w-6xl mx-auto md:py-24">
      <div class="grid grid-cols-1 gap-8 sm:grid-cols-5">
        <!-- Slide right element -->
        <h1
          id="slide-right"
          class="col-span-2 order-1 font-semibold text-2xl md:order-first md:text-5xl lg:text-6xl"
        >
          A quick and easy way to find great games for
          <span class="text-blue-500 underline">FREE</span>!
        </h1>
        <!-- Slide left element -->
        <img
          id="slide-left"
          class="col-span-3 order-first border border-slate-700 md:order-1"
          src="../assets/img/desktop.png"
          alt="How the website looks"
        />
      </div>
      <div class="text-center max-w-2xl mx-auto mt-12 md:mt-24">
        <!-- Slide up elements -->
        <h2 id="slide-up-1" class="font-semibold text-lg md:text-xl">
          What is Free-2-play all about?
        </h2>
        <p id="slide-up-2" class="opacity-0 mt-8 text-sm md:text-lg">
          Welcome to Free-2-Play, your ultimate destination for all things free
          gaming! Dive into a world of endless entertainment without spending a
          dime as we bring you the latest and greatest free-to-play games across
          various platforms.
        </p>
        <p id="slide-up-3" class="opacity-0 mt-4 text-sm md:text-lg">
          Discover a treasure trove of gaming options across genres, from
          action-packed shooters and immersive role-playing adventures to
          strategic simulations and casual delights. Free-2-Play is your
          one-stop hub for exploring and enjoying an extensive collection of
          games that won't cost you a penny to play.
        </p>
      </div>
      <div class="text-center mt-12 md:mt-24">
        <h2 class="font-semibold text-lg md:text-xl">Key Features</h2>
        <ol class="mt-8 grid gap-4 grid-cols-1 md:grid-cols-2">
          <li
            class="flex flex-col mt-4 p-6 text-sm rounded-2xl bg-gray-800 md:text-lg"
          >
            <i
              class="fa-solid fa-magnifying-glass text-3xl md:text-5xl mb-4"
            ></i>
            <span class="font-semibold mb-2">Curated Selection</span>
            <p>
              Our team meticulously curates a diverse selection of free games,
              ensuring that you have access to high-quality, engaging titles
              that cater to every gaming preference.
            </p>
          </li>
          <li
            class="flex flex-col mt-4 p-6 text-sm rounded-2xl bg-gray-800 md:text-lg"
          >
            <i class="fa-solid fa-desktop text-3xl md:text-5xl mb-4"></i>
            <span class="font-semibold mb-2">Platform Diversity</span>
            <p>
              Whether you're a PC gamer or prefer gaming on a Browser,
              Free-2-Play covers it all. Discover free games across platforms
              and find the perfect fit for your preferred gaming setup
            </p>
          </li>
        </ol>
        <p class="mt-12 max-w-xl mx-auto text-xs md:text-md">
          At Free-2-Play, we believe that great gaming experiences should be
          accessible to everyone. Explore the world of free games today and
          embark on unforgettable adventures without breaking the bank. It's
          time to play without limits at Free-2-Play!
        </p>
      </div>
      <div
        class="text-center mt-12 md:mt-24 p-4 rounded-2xl border-4 border-green-500 bg-green-800 md:p-8"
      >
        <h2 class="font-bold text-sm md:text-xl">
          All information about FREE games came from the
          <a class="underline" href="https://freetogame.com/api_doc"
            >FreeToGame API</a
          >
        </h2>
      </div>
    </div>
  </div>
</template>

<style scopde>
/* Slide right classes */
#slide-right {
  animation-iteration-count: 1;
  animation: slide-right 0.8s normal forwards ease;
}

@keyframes slide-right {
  from {
    opacity: 0;
    transform: translateX(-100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide left classes */
#slide-left {
  animation-iteration-count: 1;
  animation: slide-left 0.8s normal forwards ease;
}

@keyframes slide-left {
  from {
    opacity: 0;
    transform: translateX(100px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Slide up classes */
#slide-up-1 {
  animation-iteration-count: 1;
  animation: slide-up 0.8s normal forwards ease;
}

#slide-up-2 {
  animation-iteration-count: 1;
  animation: slide-up 0.8s normal forwards ease;
  animation-delay: 0.2s;
}

#slide-up-3 {
  animation-iteration-count: 1;
  animation: slide-up 0.8s normal forwards ease;
  animation-delay: 0.4s;
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(100px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
