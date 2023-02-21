<template>
  <div
    class="xl:px-[355px] lg:px-[96px] max-w-[1440px] px-6 py-[31px] lg:py-[144px] md:py-[140px] min-h-screen bg-[#f2f2f2] dark:bg-[#141D2F]"
  >
    <div class="flex justify-between items-center mb-9">
      <h3
        class="text-[#222731] dark:text-[#FFFFFF] text-2xl font-bold leading-[38.51px]"
      >
        devfinder
      </h3>
      <button
        @click="toggleMode"
        v-if="light"
        class="text-secondary hover:text-dark flex items-center gap-1"
      >
        DARK <img src="/assets/icon-moon.svg" class="w-4" />
      </button>
      <button
        @click="toggleMode"
        v-else
        class="text-secondary hover:text-dark flex items-center gap-1"
      >
        LIGHT <img src="/assets/icon-sun.svg" class="w-4" />
      </button>
    </div>
    <form
      @submit.prevent="search(username)"
      class="h-[69px] flex items-center rounded-[15px] bg-[#fefefe] dark:bg-[#1E2A47] px-[10px] md:pl-8 pl-2 mb-6 shadow-base"
    >
      <img src="/assets/icon-search.svg" class="mr-2" alt="" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        v-model="username"
        class="bg-transparent dark:bg-[#1E2A47] dark:text-[#FFFFFF] text-xs md:text-[18px] border-[0px] h-full w-full outline-none placeholder:text-xs md:placeholder:text-[18px] placeholder:font-normal placheolder:text-[#4B6A9B] dark:placeholder:text-[#FFFFFF]"
      />
      <button
        class="bg-primary rounded-[10px] h-[50px] font-bold text-base leading-6 px-6 text-white hover:bg-[#60ABFF] disabled:bg-[#60ABFF] disabled:cursor-not-allowed"
        type="submit"
        :disabled="disabled"
      >
        Search
      </button>
    </form>
    <div
      v-if="loading"
      class="flex justify-center items-center h-[100%] w-full gap-2"
    >
      <!-- <div class="h-6 w-6" /> -->
      <p class="dark:text-white text-dark">Loading...</p>
    </div>
    <div
      class="md:p-12 p-6 flex gap-9 rounded-[15px] shadow-base bg-[#FEFEFE] dark:bg-[#1E2A47]"
      v-else-if="devInfo && !error"
    >
      <img
        :src="devInfo.avatar_url"
        :alt="devInfo.name"
        class="md:flex hidden lg:w-[117px] lg:h-[117px] rounded-full w-[70px] h-[70px]"
      />
      <div class="w-full">
        <div class="flex gap-6 md:gap-12">
          <img
            :src="devInfo.avatar_url"
            :alt="devInfo.name"
            class="md:hidden flex lg:w-[117px] lg:h-[117px] rounded-full w-[70px] h-[70px]"
          />
          <div
            class="flex flex-col lg:flex-row gap-2 justify-between w-full mb-[20px]"
          >
            <div>
              <h1
                class="md:text-2xl text-base text-dark dark:text-white font-bold leading-[32px]"
              >
                {{ devInfo.name }}
              </h1>
              <p class="text-base text-primary font-normal">
                @{{ devInfo.login }}
              </p>
            </div>
            <div>
              <p class="text-secondary dark:text-white text-sm leading-[22px]">
                Joined {{ new Date(devInfo.created_at).toDateString() }}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <p
            class="text-secondary text-sm text-[#4B6A9B] dark:text-white font-normal"
          >
            {{ devInfo.bio || "This profile has no bio" }}
          </p>
        </div>
        <div
          class="bg-[#F6F8FF] dark:bg-[#141D2F] rounded-[10px] px-2 md:px-8 py-[15px] grid grid-cols-3 gap-4 md:gap-[80px] h-[85px] mb-[37px]"
        >
          <div>
            <p
              class="text-[#4B6A9B] dark:text-white text-center md:text-left text-[13px] leading-[19.25px]"
            >
              Repos
            </p>
            <h3
              class="font-bold text-lg text-center md:text-left text-dark dark:text-white leading-[33px]"
            >
              {{ devInfo.public_repos }}
            </h3>
          </div>
          <div>
            <p
              class="text-[#4B6A9B] text-center md:text-left dark:text-white text-[13px] leading-[19.25px]"
            >
              Followers
            </p>
            <h3
              class="font-bold text-lg text-center md:text-left dark:text-white text-dark leading-[33px]"
            >
              {{ devInfo.followers }}
            </h3>
          </div>
          <div>
            <p
              class="text-[#4B6A9B] text-center md:text-left dark:text-white text-[13px] leading-[19.25px]"
            >
              Following
            </p>
            <h3
              class="font-bold text-lg text-center md:text-left dark:text-white text-dark leading-[33px]"
            >
              {{ devInfo.following }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-location.svg" />
            <p class="text-sm text-[#4B6A9B] dark:text-white leading-[22px]">
              {{ devInfo.location || "Not Available" }}
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-twitter.svg" />
            <p class="text-sm text-[#4B6A9B] dark:text-white leading-[22px]">
              {{ devInfo.twitter_username || "Not Available" }}
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-website.svg" />
            <a
              :href="devInfo.blog"
              target="_blank"
              class="text-sm text-[#4B6A9B] dark:text-white leading-[22px]"
            >
              {{ devInfo.blog || "Not Available" }}
            </a>
          </div>
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-company.svg" />
            <p class="text-sm text-[#4B6A9B] dark:text-white leading-[22px]">
              {{ devInfo.company || "Not Available" }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="error">
      <p class="text-center dark:text-white">Error - ({{ error }})</p>
    </div>
  </div>
</template>

<script lang="ts">
import { getUserByName } from "../service/user";
export default {
  data() {
    return {
      username: "",
      disabled: true,
      loading: false,
      devInfo: null as any,
      error: "",
      light: localStorage.theme === "light",
    };
  },
  updated() {
    if (!this.username.length) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  },
  methods: {
    toggleMode() {
      if (localStorage.theme === "dark" || !("theme" in localStorage)) {
        localStorage.theme = "light";
        document.documentElement.classList.add("light");
        document.documentElement.classList.remove("dark");

        this.light = true;
      } else {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
        document.documentElement.classList.remove("light");

        this.light = false;
      }
    },
    search(user: string) {
      this.loading = true;
      getUserByName(user)
        .then((res) => {
          if (res?.response?.data?.message === "Not Found") {
            this.error = res?.response?.data?.message;
            return;
          }
          this.devInfo = res;
          this.error = "";
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style></style>
