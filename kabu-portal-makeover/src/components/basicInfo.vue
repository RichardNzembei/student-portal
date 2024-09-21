<script setup>
const studentData = localStorage.getItem("studentData")
  ? JSON.parse(localStorage.getItem("studentData"))
  : null;
</script>
<template>
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
          <strong class="info-label">Reg. No </strong>
          <span class="info-data">{{ studentData.reg_no }}</span>
        </p>
        <p>
          <strong class="info-label">Name </strong>

          <span class="info-data">{{ studentData.name }}</span>
        </p>
        <p>
          <strong class="info-label">ID No </strong>
          <span class="info-data">{{ studentData.id_no }}</span>
        </p>
        <p>
          <strong class="info-label">Gender </strong>
          <span class="info-data">{{ studentData.gender }}</span>
        </p>
        <button class="btn-red">Get Catering Token</button>
      </div>
      <div class="info-details">
        <p>
          <strong class="info-label">Address </strong>
          <span class="info-data">{{ studentData.address }}</span>
        </p>
        <p>
          <strong class="info-label">Email </strong>
          <span class="info-data">{{ studentData.email }}</span>
        </p>
        <p>
          <strong class="info-label">Date Of Birth </strong>
          <span class="info-data">{{ studentData.date_of_birth }}</span>
        </p>
        <p>
          <strong class="info-label">Campus </strong>
          <span class="info-data">{{ studentData.campus }}</span>
        </p>
        <button class="btn-green">Get Academic Calendar</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
.info-content {
  display: flex;
  justify-content: space-between;
}
.info-data {
  color: rgb(141, 110, 71);
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
.category {
  background-color: rgb(139, 137, 12);
  margin: 0;
  top: 0;
  position: relative;
}
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
.profile-pic img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 40px;
  border-bottom: 1px solid black;
}
h3 {
  margin: 0;
  padding: 10px;
}
</style>