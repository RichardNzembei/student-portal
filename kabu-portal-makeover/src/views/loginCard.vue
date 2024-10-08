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
  } 
  
  else {
    alert("Invalid credentials. Please try again.");
  }
};

const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>
<template>
  <div class="min-h-screen flex justify-center items-center bg-gradient-to-r from-red-700 to-red-400">
    <div class="flex justify-center items-center h-full">
      <div class="bg-red-900 p-8 rounded-lg shadow-lg text-center w-80">
        <img src="../assets/img/Kabarak_University_logo.jpeg" alt="Logo" class="w-24 mb-4 rounded-lg" />
        <h2 class="text-white mb-4">KABARAK UNIVERSITY</h2>
        <form @submit.prevent="login">
          <div class="mb-4 relative">
            <label for="reg-number" class="block text-white text-sm">Reg. Number</label>
            <input
              type="text"
              id="reg-number"
              v-model="regNo"
              placeholder="Reg. Number"
              required
              class="w-full p-2 mt-1 rounded border-none"
            />
          </div>
          <div class="mb-4 relative">
            <label for="password" class="block text-white text-sm">Password</label>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Password"
              required
              class="w-full p-2 mt-1 rounded border-none"
            />
            <span class="absolute right-2 top-8 cursor-pointer text-gray-400 border-l-4 p-0.5" @click="togglePassword">
              {{ showPassword ? "🙈" : "👁️" }}
            </span>
          </div>
          <div class="mb-4 flex items-center">
            <input type="checkbox" id="remember-me" class="mr-2" />
            <label for="remember-me" class="text-white text-sm">Remember me</label>
          </div>
          <button type="submit" class="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700">
            Log In
          </button>
          <a href="#" class="block mt-4 text-green-600 text-sm hover:underline">Forgot Your Password?</a>
        </form>
        <footer class="mt-4 text-white text-xs">
          <p>2024 © Designed by Saint@Reuben Devs</p>
        </footer>
      </div>
    </div>
  </div>
</template>
