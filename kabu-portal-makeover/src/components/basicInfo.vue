<script setup>
const studentData = localStorage.getItem("studentData")
  ? JSON.parse(localStorage.getItem("studentData"))
  : null;
</script>
<template>
  <div class="bg-gray-100 p-5 mb-5 rounded-lg shadow-md">
    <div class="bg-yellow-600 text-white p-2 rounded-t-lg">
      <h3 class="text-lg font-semibold">Basic Information</h3>
    </div>

    <div class="flex justify-between flex-col lg:flex-row" v-if="studentData">
      <div class="flex items-center justify-center mr-20 mb-4 lg:border-r-2 lg:p-16">
        <img
          src="../assets/img/profile.png"
          alt="Profile Picture"
          class="w-24 h-24 rounded-full border-b border-gray-400 mt-2"
        />
      </div>

      <div class="flex-1 p-5 border-b border-gray-400">
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">Reg. No:</strong>
          <span class="text-brown-700">{{ studentData.reg_no }}</span>
        </p>
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">Name:</strong>
          <span class="text-brown-700">{{ studentData.name }}</span>
        </p>
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">ID No:</strong>
          <span class="text-brown-700">{{ studentData.id_no }}</span>
        </p>
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">Gender:</strong>
          <span class="text-brown-700">{{ studentData.gender }}</span>
        </p>
        <button class="mt-2 bg-red-500 text-white py-2 px-4 rounded">Get Catering Token</button>
      </div>

      <div class="flex-1 p-5 border-b border-gray-400">
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">Address:</strong>
          <span class="text-brown-700">{{ studentData.address }}</span>
        </p>
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">Email:</strong>
          <span class="text-brown-700 block md:inline">{{ studentData.email }}</span>
        </p>
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">Date Of Birth:</strong>
          <span class="text-brown-700">{{ studentData.date_of_birth }}</span>
        </p>
        <p class="mb-2">
          <strong class="font-mono font-bold text-lg">Campus:</strong>
          <span class="text-brown-700">{{ studentData.campus }}</span>
        </p>
        <button class="mt-2 bg-green-600 text-white py-2 px-4 rounded">Get Academic Calendar</button>
      </div>
    </div>
  </div>
</template>