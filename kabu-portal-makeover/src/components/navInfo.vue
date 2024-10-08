<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const studentData = localStorage.getItem("studentData")
  ? JSON.parse(localStorage.getItem("studentData"))
  : null;
const isDropdownVisible = ref(false);
const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};
const logout = () => {
  router.push({ name: "loginCard" });
};
const navToProfile = () => {
  router.push({ name: "dashboardCard" });
};
</script>
<template>
  <div class="bg-green-600 text-white p-4 flex justify-between items-center sticky top-0 z-50">
   
    <span class="h-8 w-8"><img src="../assets/img/menuicon.png" alt=""></span>
  
    <div class="flex items-center">
     
      <div class="relative">
        <input
          class="rounded-full px-4 py-2 bg-green-300 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-200  w-40  lg:w-full"
          type="text"
          placeholder="Search..."
        />
        <span class="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4">
          <img src="../assets/img/search.png" alt="search-icon" class="w-full h-full object-contain" />
        </span>
      </div>

     
      <div class="relative ml-6" @click="toggleDropdown">
        <div class="flex items-center cursor-pointer">
          
          <span class="w-10 h-10 bg-cover bg-center rounded-full overflow-hidden">
            <img src="../assets/img/profile.png" alt="profile-pic" class="w-full h-full object-cover" />
          </span>
          
          
          <span class="ml-2 text-white hidden lg:block">{{ studentData.name }}</span>

        
          <span class="ml-2 w-3 h-3">
            <img src="../assets/img/down-arrow.png" alt="dropdown-arrow" class="w-full h-full object-contain" />
          </span>
        </div>

        
        <div v-if="isDropdownVisible" class="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-50">
          <a
            href="#"
            class="flex items-center px-4 py-2 hover:bg-gray-700 transition duration-150"
            @click="navToProfile"
          >
            <span class="w-5 h-5 mr-2">
              <img src="../assets/img/user.png" alt="user-icon" class="w-full h-full object-contain" />
            </span>
            Profile
          </a>
          <a
            href="#"
            class="flex items-center px-4 py-2 hover:bg-gray-700 transition duration-150"
            @click="logout"
          >
            <span class="w-6 h-6 mr-2">
              <img src="../assets/img/logouticon.png" alt="logout-icon" class="w-full h-full object-contain" />
            </span>
            Logout
          </a>
        </div>
      </div>
    </div>
  </div>
</template>