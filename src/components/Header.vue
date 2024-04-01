<template>
  <div>
    <div class="nav">
      <nav>
        <ul>
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/add" class="nav-link">Add</router-link>

          <router-link to="/about" class="nav-link">About</router-link>
          <router-link @click="logout" to="#" class="nav-link">Logout</router-link>
        </ul>
      </nav>
    </div>
    <!-- Add padding to prevent content from being hidden -->
    <div class="content">
      <!-- Your content goes here -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
  
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: 'Login' })
    }
  }
};
</script>

<style scoped>
/* Nav styling */
.nav {
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 40px;
  display: flex;
  align-items: center;
  box-shadow: 0 0 25px 0 black;
}

.nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-link,
.nav-link:hover,
.nav-link:visited {
  color: black;
  text-decoration: none;
  margin: 20px;
}

/* Content padding */
.content {
  padding-top: 60px; /* Adjust as needed based on the navbar height */
}
</style>
