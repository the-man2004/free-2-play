<template>
  <teleport to="body">
    <!-- Modal -->
    <div
      class="z-40 mx-auto bg-slate-900 text-gray-300 max-w-4xl absolute top-4 left-4 right-4 md:top-28 md:left-8 md:right-8"
    >
      <nav class="p-8 relative">
        <div class="mb-24">
          <div class="mb-4">
            <figure>
              <figcaption class="mb-2 text-2xl font-semibold">Genre</figcaption>
              <ul class="grid grid-cols-2 md:grid-cols-3">
                <li><button>MMO</button></li>
                <li><button>MMORPG</button></li>
                <li><button>Shooter</button></li>
                <li><button>Strategy</button></li>
                <li><button>Battle Royale</button></li>
                <li><button>racing</button></li>
                <li><button>Sports</button></li>
                <li><button>Fighting</button></li>
                <p>Popular</p>
                <li><button>MMOFPS</button></li>
                <li><button>Action RPG</button></li>
                <li><button>Sandbox</button></li>
                <li><button>Open World</button></li>
                <li><button>Survival</button></li>
                <li><button>Battle Royale</button></li>
                <li><button>Anime</button></li>
                <li><button>PvP</button></li>
                <li><button>PvE</button></li>
                <li><button>Fantasy</button></li>
                <li><button>Sci-Fi</button></li>
                <li><button>Action</button></li>
                <li><button>Zombie</button></li>
                <li><button>Turn Based</button></li>
                <li><button>First Person View</button></li>
                <li><button>Third Person View</button></li>
                <li><button>Space</button></li>
              </ul>
            </figure>
          </div>
          <div class="h-px my-2 bg-gray-800"></div>
          <div class="grid grid-cols-2 md:grid-cols-3">
            <div>
              <figure>
                <figcaption class="mb-2 text-2xl font-semibold">
                  Platform
                </figcaption>
                <ul>
                  <li><button>PC</button></li>
                  <li><button>Browser</button></li>
                  <li><button>All</button></li>
                </ul>
              </figure>
            </div>
            <div>
              <figure>
                <figcaption class="mb-2 text-2xl font-semibold">
                  Relevance
                </figcaption>
                <ul>
                  <li><button>Relevance</button></li>
                  <li><button>Popularity</button></li>
                  <li><button>Release Date</button></li>
                  <li><button>Alphabetical</button></li>
                </ul>
              </figure>
            </div>
          </div>
        </div>
        <div class="font-semibold absolute bottom-8">
          <button class="py-1 px-4 mr-2 rounded-full bg-blue-500 md:text-xl">
            APPLY
          </button>
          <button class="py-1 px-4 rounded-full bg-red-500 md:text-xl">
            CANCEL
          </button>
        </div>
      </nav>
    </div>
    <!-- Backdrop -->
    <div class="z-20 absolute inset-0 bg-black opacity-40"></div>
  </teleport>
</template>
