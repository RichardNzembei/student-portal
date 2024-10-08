<script setup>
import basicInfo from "@/components/basicInfo.vue";
import academicInfo from "@/components/academicInfo.vue";
import feeInfo from "@/components/feeInfo.vue";
import navInfo from "@/components/navInfo.vue";
</script>
<template>
  <navInfo />
  <div class="p-6">
    <basicInfo />
    <div class="flex flex-col lg:flex-row">
      <academicInfo />
      <feeInfo />
    </div>
  </div>
</template>

