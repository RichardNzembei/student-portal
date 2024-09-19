<script setup>
import {ref} from 'vue'
const isDropdownVisible=ref(false)
function toggleDropdown(){
    isDropdownVisible.value=!isDropdownVisible.value
}
</script>
<template>
    <div class="navbar">
        <h2>Dashboard</h2>
        <div class="search-profile">
            <input class="search" type="text" placeholder="Search...">
            <div class="profile" @click="toggleDropdown">
                <span class="icon icon-profile"></span>
                <span class="profile-name">REUBEN RICHARD NZEMBEI &#x25BC;</span>
                <div class="dropdown-menu" id="dropdownMenu" v-if="isDropdownVisible">
                    <a href="#" class="dropdown-item">Profile</a>
                    <a href="#" class="dropdown-item">Logout</a>
                </div>
            </div>
        </div>
    </div>

    <div class="dashboard-container">
        <div class="section basic-info">
            <h3>Basic Information</h3>
            <div class="info-content">
                <div class="profile-pic">
                    <img src="../assets/img/profile.png" alt="Profile Picture">
                </div>
                <div class="info-details">
                    <p><strong>Reg. No:</strong> CS/MG/3090/09/22</p>
                    <p><strong>Name:</strong> REUBEN RICHARD NZEMBEI</p>
                    <p><strong>ID No:</strong> 41333380</p>
                    <p><strong>Gender:</strong> Male</p>
                    <button class="btn-red">Get Catering Token</button>
                </div>
                <div class="info-details">
                    <p><strong>Address:</strong> 263</p>
                    <p><strong>Email:</strong> richardsonreuben78@gmail.com</p>
                    <p><strong>Date Of Birth:</strong> 11/01/2004</p>
                    <p><strong>Campus:</strong> MAIN</p>
                    <button class="btn-green">Get Academic Calendar</button>
                </div>
            </div>
        </div>

        <div class="section academic-info">
            <h3>Academic Information</h3>
            <p><strong>Current Programme:</strong> BACHELOR OF SCIENCE IN COMPUTER SCIENCE</p>
            <p><strong>Attempted Units:</strong> 36</p>
            <p><strong>Registered Units:</strong> 0</p>
        </div>

        <div class="section fee-payment">
            <h3>Fee Payment</h3>
            <p><strong>Total Billed:</strong> 193,725.00</p>
            <p><strong>Total Paid:</strong> 193,725.00</p>
            <p><strong>Fee Balance:</strong> 0.00</p>
        </div>
    </div>
 
</template>
<style scoped>
/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f0f0;
}

h2, h3 {
    margin: 0;
    padding: 10px;
}

/* Navbar */
.navbar {
    background-color: #4C974C;
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
    background-image: url('../assets/img/profile.png');
    background-size: cover;
    border-radius: 50%;
    margin-right: 10px;
}

/* Dashboard Container */
.dashboard-container {
    padding: 20px;
}

/* Sections */
.section {
    background-color: #d6d2ca;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
}

.info-content {
    display: flex;
    justify-content: space-between;
}

.profile-pic img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
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
  background-color: white; /* Background color for dropdown */
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
  color: #333; /* Text color */
}

.dropdown-item:hover {
  background-color: #f0f0f0; /* Hover effect */
}
</style>