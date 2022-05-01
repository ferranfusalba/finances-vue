<template>
  <footer class="fixed-bottom">
    <div class="d-block d-sm-block d-md-block d-lg-none">
      <ul class="nav nav-pills nav-fill">
        <li class="nav-item">
          <router-link to="/" aria-current="page" class="nav-link text-white"
            ><small>Home</small></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" aria-current="page" class="nav-link text-white"
            ><small>About</small></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#"><small>Three</small></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#"><small>Four</small></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="#"><small>Five</small></a>
        </li>
      </ul>
    </div>
    <div class="d-none d-lg-block d-xl-block d-xxl-block">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <div class="btn-group dropup">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="navbar-brand dropdown-toggle a14 ibmPS"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Username Surname Surname
                </a>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li>
                    <a class="dropdown-item" href="#">Another action</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/settings" class="tdn text-white a14 ibmPM"
                  >Settings</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
nav {
  height: 28px;
}

footer {
  background-color: #2a2a2a;
}

.tdn {
  text-decoration: none;
}

.a14 {
  font-size: 14px;
}
</style>
