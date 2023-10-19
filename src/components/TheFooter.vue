<template>
  <div
    class="bg-black text-gray-300 border-t-blue-800 border-b-0 border-x-0 border-t-2"
  >
    <div class="container mx-auto max-w-6xl py-12 px-8 leading-8 bg-black">
      <div
        class="text-center grid gap-6 grid-cols-1 md:text-left md:grid-cols-4 pb-12"
      >
        <div>
          <ul>
            <li><router-link to="/about">About Us</router-link></li>
            <li><a href="#">API</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies Policy</a></li>
            <li><a href="#">Terms of Use</a></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div>
          <h2 class="font-semibold text-3xl text-center md:text-right my-auto">
            Free-2-Play
          </h2>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row">
        <p>
          © 2023 Free-2-Play Media, all rights reserved. All trademarks are
          property of their respective owners.
        </p>
        <div class="flex gap-2 lg:ml-auto">
          <a href="#"><i class="fa-brands fa-facebook"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>
