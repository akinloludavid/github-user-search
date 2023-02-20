<template>
  <div
    class="xl:px-[355px] lg:px-[96px] max-w-[1440px] px-6 py-[31px] lg:py-[144px] md:py-[140px] h-screen bg-[#f2f2f2]"
  >
    <div class="flex justify-between items-center mb-9">
      <h3 class="text-[#222731] text-2xl font-bold leading-[38.51px]">
        devfinder
      </h3>
      <button>DARK</button>
    </div>
    <div
      class="h-[69px] flex items-center rounded-[15px] bg-[#fefefe] px-[10px] pl-8 mb-6"
      style="box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567)"
    >
      <img src="/assets/icon-search.svg" class="mr-2" alt="" />
      <input
        type="text"
        placeholder="Search GitHub username…"
        v-model="username"
        class="bg-none border-[0px] h-full w-full outline-none placeholder:text-[18px] placeholder:font-normal placheolder:text-[#4B6A9B]"
      />
      <button
        class="bg-primary rounded-[10px] h-[50px] font-bold text-base leading-6 px-6 text-white disabled:bg-[#60ABFF] disabled:cursor-not-allowed"
        @click="search(username)"
        :disabled="disabled"
      >
        Search
      </button>
    </div>
    <div class="md:p-12 p-6 flex gap-9 rounded-[15px]" v-if="devInfo">
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
                class="md:text-2xl text-base text-dark font-bold leading-[32px]"
              >
                {{ devInfo.name }}
              </h1>
              <p class="text-base text-primary font-normal">
                @{{ devInfo.login }}
              </p>
            </div>
            <div>
              <p class="text-secondary text-sm leading-[22px]">
                Joined {{ new Date(devInfo.created_at).toDateString() }}
              </p>
            </div>
          </div>
        </div>
        <div class="mb-8">
          <p class="text-secondary text-sm text-[#4B6A9B] font-normal">
            {{ devInfo.bio }}
          </p>
        </div>
        <div
          class="bg-[#F6F8FF] rounded-[10px] px-8 py-[15px] grid grid-cols-3 gap-4 md:gap-[80px] h-[85px] mb-[37px]"
        >
          <div>
            <p class="text-[#4B6A9B] text-[13px] leading-[19.25px]">Repos</p>
            <h3 class="font-bold text-lg text-dark leading-[33px]">
              {{ devInfo.public_repos }}
            </h3>
          </div>
          <div>
            <p class="text-[#4B6A9B] text-[13px] leading-[19.25px]">
              Followers
            </p>
            <h3 class="font-bold text-lg text-dark leading-[33px]">
              {{ devInfo.followers }}
            </h3>
          </div>
          <div>
            <p class="text-[#4B6A9B] text-[13px] leading-[19.25px]">
              Following
            </p>
            <h3 class="font-bold text-lg text-dark leading-[33px]">
              {{ devInfo.following }}
            </h3>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-location.svg" />
            <p class="text-sm text-[#4B6A9B] leading-[22px]">
              {{ devInfo.location || "Not Available" }}
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-twitter.svg" />
            <p class="text-sm text-[#4B6A9B] leading-[22px]">
              {{ devInfo.twitter_username || "Not Available" }}
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-website.svg" />
            <a
              :href="devInfo.blog"
              target="_blank"
              class="text-sm text-[#4B6A9B] leading-[22px]"
            >
              {{ devInfo.blog || "Not Available" }}
            </a>
          </div>
          <div class="flex gap-2 items-center">
            <img src="/assets/icon-company.svg" />
            <p class="text-sm text-[#4B6A9B] leading-[22px]">
              {{ devInfo.company || "Not Available" }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserByName } from "../service/user";
export default {
  data() {
    return {
      username: "",
      disabled: true,
      loading: false,
      devInfo: null,
    };
  },
  mounted() {},
  updated() {
    if (!this.username.length) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  },
  methods: {
    search(user) {
      this.loading = true;
      getUserByName(user)
        .then((res) => {
          console.log(res);
          this.devInfo = res;
        })
        .catch((err) => console.log(err))
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<style></style>
