<script setup>
</script>
<template>
  <div class="section fee-payment">
    <div class="category">
      <h3>Fee Payment</h3>
    </div>

    <p>
      <strong class="info-label">Total Billed </strong>
      <span class="info-data"></span>
    </p>
    <p>
      <strong class="info-label">Total Paid </strong
      ><span class="info-data"></span>
    </p>
    <p>
      <strong class="info-label">Fee Balance </strong>
      <span class="info-data">0.00</span>
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
.fee-payment {
  width: 50%;
  position: relative;
  top: 3;
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