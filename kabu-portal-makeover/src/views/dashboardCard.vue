<script setup>

import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const isDropdownVisible = ref(false);
function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}
const router=useRouter()
const route=useRoute()
const studentData = localStorage.getItem('studentData')
      ? JSON.parse(localStorage.getItem('studentData'))
      : null; // Parse the student data from localStorage

const logout=()=>{
  router.push({name:'loginCard'})
}
</script>
<template>
  <div class="navbar">
    <h2>Dashboard</h2>
    <div class="search-profile">
      <input class="search" type="text" placeholder="Search..." />
      <span class="icon icon-search"></span>
      <div class="profile" @click="toggleDropdown">
        <span class="icon icon-profile"></span>
        <span class="profile-name">{{ studentData.name }} <span class="icon icon-drop-arrow"></span></span>
        <div class="dropdown-menu" id="dropdownMenu" v-if="isDropdownVisible">
          <a href="#" class="dropdown-item"> <span class="icon icon-user"></span> <span class="dropdown-itemA">Profile</span></a>
          <a href="#" class="dropdown-item"> <span class="icon icon-logout"></span> <span class="dropdown-itemA" @click="logout">Logout</span></a>
        </div>
      </div>
    </div>
  </div>

  <div class="dashboard-container">
    <div class="section basic-info">
      <div class="category">
        <h3>Basic Information</h3>
      </div>

      <div class="info-content" v-if="studentData">
        <div class="profile-pic">
          <img src="../assets/img/profile.png" alt="Profile Picture" />
        </div>
        <div class="info-details">
          <p>
            <strong class="info-label">Reg. No    </strong>
            <span class="info-data">{{ studentData.reg_no }}</span>
          </p>
          <p>
            <strong class="info-label">Name  </strong>

            <span class="info-data">{{ studentData.name }}</span>
          </p>
          <p><strong class="info-label">ID No </strong> <span class="info-data">{{ studentData.id_no }}</span></p>
          <p><strong class="info-label">Gender </strong> <span class="info-data">{{ studentData.gender }}</span></p>
          <button class="btn-red">Get Catering Token</button>
        </div>
        <div class="info-details">
          <p><strong class="info-label">Address </strong> <span class="info-data">{{ studentData.address }}</span></p>
          <p>
            <strong class="info-label">Email </strong>
            <span class="info-data">{{ studentData.email }}</span>
          </p>
          <p>
            <strong class="info-label">Date Of Birth </strong>
            <span class="info-data">{{ studentData.date_of_birth }}</span>
          </p>
          <p><strong class="info-label">Campus </strong> <span class="info-data">{{ studentData.campus }}</span></p>
          <button class="btn-green">Get Academic Calendar</button>
        </div>
      </div>
    </div>
    <div class="academic-fee-container">
      <div class="section academic-info">
        <div class="category">
          <h3>Academic Information</h3>
        </div>

        <p>
          <strong class="info-label">Current Programme </strong>
          <span class="info-data">BACHELOR OF SCIENCE IN COMPUTER SCIENCE</span>
        </p>
        <p>
          <strong class="info-label">Attempted Units </strong>  <span class="info-data">43</span>
        </p>
        <p>
          <strong class="info-label">Registered Units </strong> <span class="info-data">0</span>
        </p>
      </div>

      <div class="section fee-payment">
        <div class="category">
          <h3>Fee Payment</h3>
        </div>

        <p><strong class="info-label">Total Billed </strong> <span class="info-data"></span></p>
        <p><strong class="info-label">Total Paid </strong><span class="info-data"></span></p>
        <p><strong class="info-label">Fee Balance </strong> <span class="info-data">0.00</span></p>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* General Styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f1f0ee;
}

h2,
h3 {
  margin: 0;
  padding: 10px;
}

/* Navbar */
.navbar {
  background-color: #4c974c;
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
  background-image: url("../assets/img/search.png"); /* Replace with your search icon */
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
.icon-user{
    background-image: url("../assets/img/user.png");
    width: 20px;
    height: 20px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 3px;;
}
.icon-logout{
  background-image: url("../assets/img/logout.png");
  width: 20px;
    height: 20px;
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
.icon-drop-arrow{
  background-image: url("../assets/img/down-arrow.png");
  width: 13px;
  height: 13px;
  display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
/* Dashboard Container */
.dashboard-container {
  padding: 20px;
}

/* Sections */
.section {
  background-color: hsl(40, 10%, 94%);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 1px;
}
.section.basic-info {

  padding: 20px ; /* Adds padding around the section */
 
  
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  margin-top: 20px; /* Space at the top */
 
}
.info-content {
  display: flex;
  justify-content: space-between;
 
}

.profile-pic img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 40px;
  border-bottom: 1px solid black;
}

/* Buttons */
.btn-red {
  background-color: #ff4d4d;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.btn-green {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
/* Dropdown styles */
.dropdown-menu {
  display: block;
  position: absolute;
  background-color: rgb(101, 109, 114); /* Background color for dropdown */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 5px;
  right: 0; /* Align to the right */
  min-width: 150px;
  border-radius: 4px;
  z-index: 1000;
  top: 45px;
}

/* Dropdown items */
.dropdown-item {
  padding: 10px;
  text-decoration: none;
  display: block;
  color: white; /* Text color */
}
.dropdown-itemA{
  margin: 5px 10px ;
  position: relative;
  top: -4px;
}
.dropdown-item:hover {
  background-color: #12596b; /* Hover effect */
}
.category {
  background-color: rgb(139, 137, 12);
  margin: 0;
  top: 0;
  position: relative;
}
.academic-info {
  width: 50%;
}
.fee-payment {
  width: 50%;
  position: relative;
  top: 3;
}
.academic-fee-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
}
.info-data {
  color: rgb(170, 109, 34);
}
.info-details {
  flex: 1; /* Allows the details sections to grow */
  padding: 30px ; /* Inner padding */
  border-bottom: 1px solid black;
}
.info-label{
    display: inline-block;
    margin-right: 50px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 20px;
}
</style>