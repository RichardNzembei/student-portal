<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const message = ref("");
const regNo = ref("");
const password = ref("");
const showPassword = ref(false);
const router = useRouter();

const fetchStudentData = async () => {
  try {
    const response = await fetch("/students.json");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.students;
  } catch (error) {
    console.error("Error fetching student data:", error);
    message.value = "Error fetching student data. Please try again later.";
    return [];
  }
};

const login = async () => {
  if (!regNo.value || !password.value) {
    alert("Please enter both registration number and password.");
    return;
  }

  const students = await fetchStudentData();
  const student = students.find(
    (s) =>
      s.reg_no.toLowerCase() === regNo.value.toLowerCase() &&
      s.password === password.value
  );

  if (student) {
    alert("Login successful");
    console.log(student);
    localStorage.setItem("studentData", JSON.stringify(student));
    router.push({ name: "dashboardCard" });
  } else {
    alert("Invalid credentials. Please try again.");
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
<template>
  <div class="login-body">
    <div class="login-container">
      <div class="login-box">
        <img src="../assets/img/Kabarak_University_logo.jpeg" alt="" class="logo" />
        <h2>KABARAK UNIVERSITY</h2>
        <form @submit.prevent="login">
          <div class="input-group">
            <label for="reg-number">Reg.Number</label>
            <input
              type="text"
              id="reg-number"
              name="reg-number"
              v-model="regNo"
              placeholder="Reg. Number"
              required
            />
          </div>
          <div class="input-group">
            <label for="password">password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              name="password"
              v-model="password"
              placeholder="password"
              required
            />
            <span class="show-password" @click="togglePassword">{{
              showPassword ? "🙈" : "👁️"
            }}</span>
          </div>
          <br />
          <div class="remember-me">
            <input type="checkbox" id="remember-me" name="remember-me" />
            <label for="remember-me">Remember me</label>
          </div>
          <br />
          <button type="submit" class="login-btn">Log In</button><br /><br />
          <a href="" class="forgor-password">Forgot Your Password?</a>
        </form>
        <footer>
          <p>2024 © Designed by Saint@Reuben Devs</p>
        </footer>
      </div>
    </div>
  </div>
</template>
<style scoped>
.login-body {
  background-color: red;
  background-image: linear-gradient(
    to right,
    rgb(243, 136, 13),
    rgb(180, 180, 124)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  font-family: Arial, sans-serif;
}
.login-container {
  justify-content: center;
  display: flex;
  height: 100%;
  align-items: center;
}

.login-box {
  background-color: #8b0000;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 350px;
}

.logo {
  width: 100px;
  margin-bottom: 10px;
  border-radius: 10px;
}

h2 {
  color: #ffffff;
  margin: 10px 0;
}
.input-group {
  margin: 15px 10px;
  position: relative;
}
label {
  display: block;
  color: #ffffff;
  font-size: 14px;
  text-align: left;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: none;
  border-radius: 4px;
}

.show-password {
  position: absolute;
  right: 4px;
  top: 32px;
  cursor: pointer;
  color: #a87070;
}

.remember-me {
  display: flex;
  align-items: center;
  color: #ffffff;
  font-size: 14px;
  margin-top: 10px;
}

.remember-me input {
  margin-right: 5px;
}

.login-btn {
  background-color: #00bfff;
  color: #ffffff;
  padding: 10px;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-btn:hover {
  background-color: #0080ff;
}

.forgot-password {
  display: block;
  margin-top: 10px;
  color: #269e1b;
  font-size: 14px;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

footer {
  margin-top: 20px;
  color: #ffffff;
  font-size: 12px;
}
</style>