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
  <div class="navbar">
    <h2>Dashboard</h2>
    <div class="search-profile">
      <input class="search" type="text" placeholder="Search..." />
      <span class="icon icon-search"></span>
      <div class="profile" @click="toggleDropdown">
        <span class="icon icon-profile"></span>
        <span class="profile-name"
          >{{ studentData.name }}  <span class="icon icon-drop-arrow"></span
        ></span>
        <div class="dropdown-menu" id="dropdownMenu" v-if="isDropdownVisible">
          <a href="#" class="dropdown-item">
            <span class="icon icon-user"></span>
            <span class="dropdown-itemA" @click="navToProfile">Profile</span></a
          >
          <a href="#" class="dropdown-item" @click="logout">
            <span class="icon icon-logout"></span>
            <span class="dropdown-itemA">Logout</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.navbar {
  background-color: #61aa61;
  color: white;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.search-profile {
  display: flex;
  align-items: center;
}

.search {
  border-radius: 20px;
  padding: 10px;
  border: none;
  margin-right: 20px;
  color: white;
  background-color: #b9d3b9;
}
.icon-search {
  position: relative;
  right: 60px;
  top: 8px;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background-image: url("../assets/img/search.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.profile {
  display: flex;
  align-items: center;
  color: white;
}

.icon-profile {
  width: 40px;
  height: 40px;
  background-image: url("../assets/img/profile.png");
  background-size: cover;
  border-radius: 50%;
  margin-right: 10px;
}
.icon-user {
  background-image: url("../assets/img/user.png");
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 3px;
}
.icon-logout {
  background-image: url("../assets/img/logout.png");
  width: 20px;
  height: 20px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}
.icon-drop-arrow {
  background-image: url("../assets/img/down-arrow.png");
  width: 13px;
  height: 13px;
  display: inline-block;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  padding: 0 4px;
}
.dropdown-menu {
  display: block;
  position: absolute;
  background-color: rgb(101, 109, 114);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
  right: 0;
  min-width: 150px;
  border-radius: 4px;
  z-index: 1000;
  top: 45px;
}

.dropdown-item {
  padding: 10px;
  text-decoration: none;
  display: block;
  color: white;
}
.dropdown-itemA {
  margin: 5px 10px;
  position: relative;
  top: -4px;
}
.dropdown-item:hover {
  background-color: #12596b;
}
</style>