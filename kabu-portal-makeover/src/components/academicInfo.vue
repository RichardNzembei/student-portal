<script setup>
const studentData = localStorage.getItem("studentData")
  ? JSON.parse(localStorage.getItem("studentData"))
  : null;
</script>
<template>
  <div class="bg-gray-100 p-5 mb-5 rounded-lg shadow-md w-full mr-2">
    <div class="bg-yellow-600 text-white p-2 rounded-t-lg">
      <h3 class="text-lg font-semibold">Academic Information</h3>
    </div>

    <div class="mt-5">
      <p class="mb-2">
        <strong class="font-mono font-bold text-lg">Current Programme:</strong>
        <span class="text-brown-700">{{ studentData.major }}</span>
      </p>
      <p class="mb-2">
        <strong class="font-mono font-bold text-lg">Attempted Units:</strong>
        <span class="text-brown-700">{{ studentData.attemptedUnits }}</span>
      </p>
      <p class="mb-2">
        <strong class="font-mono font-bold text-lg">Registered Units:</strong>
        <span class="text-brown-700">0</span>
      </p>
    </div>
  </div>
</template>


