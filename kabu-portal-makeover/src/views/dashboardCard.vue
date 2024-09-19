<script setup>
import { ref } from "vue";
const isDropdownVisible = ref(false);
function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value;
}
</script>
<template>
  <div class="navbar">
    <h2>Dashboard</h2>
    <div class="search-profile">
      <input class="search" type="text" placeholder="Search..." />
      <div class="profile" @click="toggleDropdown">
        <span class="icon icon-profile"></span>
        <span class="profile-name">REUBEN RICHARD NZEMBEI &#x25BC;</span>
        <div class="dropdown-menu" id="dropdownMenu" v-if="isDropdownVisible">
          <a href="#" class="dropdown-item"> <span class="icon icon-profile"></span>Profile</a>
          <a href="#" class="dropdown-item"> <span class="icon icon-logout"></span>Logout</a>
        </div>
      </div>
    </div>
  </div>

  <div class="dashboard-container">
    <div class="section basic-info">
      <div class="category">
        <h3>Basic Information</h3>
      </div>

      <div class="info-content">
        <div class="profile-pic">
          <img src="../assets/img/profile.png" alt="Profile Picture" />
        </div>
        <div class="info-details">
          <p>
            <strong class="info-label">Reg. No    </strong>
            <span class="info-data">CS/MG/3090/09/22</span>
          </p>
          <p>
            <strong class="info-label">Name  </strong>

            <span class="info-data">REUBEN RICHARD NZEMBEI</span>
          </p>
          <p><strong class="info-label">ID No </strong> <span class="info-data">41333380</span></p>
          <p><strong class="info-label">Gender </strong> <span class="info-data">Male</span></p>
          <button class="btn-red">Get Catering Token</button>
        </div>
        <div class="info-details">
          <p><strong class="info-label">Address </strong> <span class="info-data">263</span></p>
          <p>
            <strong class="info-label">Email </strong>
            <span class="info-data">richardsonreuben78@gmail.com</span>
          </p>
          <p>
            <strong class="info-label">Date Of Birth </strong>
            <span class="info-data">11/01/2004</span>
          </p>
          <p><strong class="info-label">Campus </strong> <span class="info-data">MAIN</span></p>
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
.icon-profile {
    background-image: url("../assets/img/profile.png");
    width: 24px;  /* Adjust size as needed */
    height: 24px; /* Adjust size as needed */
    display: inline-block;
    background-size: contain; /* Ensures the image fits the span */
    background-repeat: no-repeat;
    background-position: center;
}

.icon-logout {
    background-image: url("../assets/img/UI.png");
    width: 24px;  /* Adjust size as needed */
    height: 24px; /* Adjust size as needed */
    display: inline-block;
    background-size: contain; /* Ensures the image fits the span */
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
  background-color: rgb(150, 158, 163); /* Background color for dropdown */
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

.dropdown-item:hover {
  background-color: #3b6b77; /* Hover effect */
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
}
.info-label{
    display: inline-block;
    margin-right: 50px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: bold;
    font-size: 20px;
}
</style>