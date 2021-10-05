<template>
  <footer class="fixed-bottom">
    <div class="d-block d-sm-block d-md-block d-lg-none">
      <ul class="nav nav-pills nav-fill bg-white">
        <li class="nav-item">
          <router-link to="/" aria-current="page" class="nav-link"
            ><small>Home</small></router-link
          >
        </li>
        <li class="nav-item">
          <router-link to="/about" aria-current="page" class="nav-link"
            ><small>About</small></router-link
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><small>Three</small></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><small>Four</small></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><small>Five</small></a>
        </li>
      </ul>
    </div>
    <div class="d-none d-lg-block d-xl-block d-xxl-block">
      <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">
        <div class="container-fluid">
          <div class="btn-group dropup">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="navbar-brand dropdown-toggle"
                  href="#"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <small>Username Surname Surname</small>
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
                      <router-link to="/settings" class="tdn"
            ><small class="text-white">Settings</small></router-link
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

.tdn {
    text-decoration: none;
}
</style>
