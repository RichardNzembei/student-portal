<script setup>
import basicInfo from "@/components/basicInfo.vue";
import academicInfo from "@/components/academicInfo.vue";
import feeInfo from "@/components/feeInfo.vue";
import navInfo from "@/components/navInfo.vue";
</script>
<template>
  <navInfo />
  <div class="dashboard-container">
    <basicInfo />
    <div class="academic-fee-container">
      <academicInfo />
      <feeInfo />
    </div>
  </div>
</template>
<style scoped>
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f1f0ee;
}
.dashboard-container {
  padding: 20px;
}
.academic-fee-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
}
</style>