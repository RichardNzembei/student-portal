<script setup>
const studentData = localStorage.getItem("studentData")
  ? JSON.parse(localStorage.getItem("studentData"))
  : null;
</script>
<template>
  <div class="section academic-info">
    <div class="category">
      <h3>Academic Information</h3>
    </div>

    <p>
      <strong class="info-label">Current Programme </strong>
      <span class="info-data">{{ studentData.major }}</span>
    </p>
    <p>
      <strong class="info-label">Attempted Units </strong>
      <span class="info-data">{{ studentData.attemptedUnits }}</span>
    </p>
    <p>
      <strong class="info-label">Registered Units </strong>
      <span class="info-data">0</span>
    </p>
  </div>
</template>
<style scoped>
.category {
  background-color: rgb(139, 137, 12);
  margin: 0;
  top: 0;
  position: relative;
}
.academic-info {
  width: 50%;
}
.info-data {
  color: rgb(170, 109, 34);
}
.info-details {
  flex: 1;
  padding: 30px;
  border-bottom: 1px solid black;
}
.info-label {
  display: inline-block;
  margin-right: 50px;
  font-family: "Courier New", Courier, monospace;
  font-weight: bold;
  font-size: 20px;
}
h2,
h3 {
  margin: 0;
  padding: 10px;
}
.section {
  background-color: hsl(40, 10%, 94%);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 1px;
}
.section.basic-info {
  padding: 20px;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
</style>