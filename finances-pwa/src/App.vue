<template>
  <div id="app">
    <div class="desktop">
      <cv-header aria-label="Carbon header">
        <cv-header-menu-button
          aria-label="Header menu"
          aria-controls="side-nav"
        />
        <cv-skip-to-content href="#main-content">
          Skip to content
        </cv-skip-to-content>
        <cv-header-name to="/"> Finances </cv-header-name>
        <cv-header-nav aria-label="Carbon nav">
          <cv-header-menu-item href="javascript:void(0)">
            Link 1
          </cv-header-menu-item>
          <cv-header-menu-item href="javascript:void(0)">
            Link 2
          </cv-header-menu-item>
          <cv-header-menu-item href="javascript:void(0)">
            Link 3
          </cv-header-menu-item>
          <cv-header-menu aria-label="Link 4" title="Link 4">
            <cv-header-menu-item href="javascript:void(0)">
              Submenu Link 1
            </cv-header-menu-item>
            <cv-header-menu-item href="javascript:void(0)">
              Submenu Link 2
            </cv-header-menu-item>
            <cv-header-menu-item href="javascript:void(0)">
              Submenu Link 3
            </cv-header-menu-item>
          </cv-header-menu>
        </cv-header-nav>
        <template v-slot:header-global>
          <cv-header-global-action
            aria-label="Notifications"
            aria-controls="notifications-panel"
            @click="actionNotifications"
            label="Notifications"
            tipPosition="bottom"
            tipAlignment="start"
          >
            <Notification20 />
          </cv-header-global-action>
          <cv-header-global-action
            aria-label="User avatar"
            @click="actionUserAvatar"
            aria-controls="user-panel"
            label="Log in"
            tipPosition="bottom"
            tipAlignment="center"
          >
            <UserAvatar20 v-if="loggedIn" />
            <Login20 v-else />
          </cv-header-global-action>
          <cv-header-global-action
            aria-label="App switcher"
            aria-controls="switcher-panel"
            @click="actionAppSwitcher"
            label="App switcher"
            tipPosition="bottom"
            tipAlignment="end"
          >
            <AppSwitcher20 />
          </cv-header-global-action>
        </template>
        <template v-slot:left-panels v-if="areLeftPanels">
          <cv-side-nav id="side-nav" fixed>
            <cv-side-nav-items>
              <cv-header-side-nav-items>
                <cv-header-menu-item href="javascript:void(0)">
                  Link 1
                </cv-header-menu-item>
                <cv-header-menu-item href="javascript:void(0)">
                  Link 2
                </cv-header-menu-item>
                <cv-header-menu-item href="javascript:void(0)">
                  Link 3
                </cv-header-menu-item>
                <cv-header-menu
                  aria-label="Link 4"
                  title="Link 4"
                  :hover-toggle="false"
                >
                  <cv-header-menu-item href="javascript:void(0)">
                    Submenu Link 1
                  </cv-header-menu-item>
                  <cv-header-menu-item href="javascript:void(0)">
                    Submenu Link 2
                  </cv-header-menu-item>
                  <cv-header-menu-item href="javascript:void(0)">
                    Submenu Link 3
                  </cv-header-menu-item>
                </cv-header-menu>
              </cv-header-side-nav-items>
            </cv-side-nav-items>
          </cv-side-nav>
        </template>
        <template v-slot:right-panels v-if="areRightPanels"> </template>
      </cv-header>
    </div>
    <router-view />
    <div class="mobile">
      <nav>
        <div>
          <router-link to="/">Home</router-link>
        </div>
        <div>
          <router-link to="/">Accounts</router-link>
        </div>
        <div>
          <router-link to="/">New</router-link>
        </div>
        <div>
          <router-link to="/">This Month</router-link>
        </div>
        <div>
          <router-link to="/">Settings</router-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@media screen and (min-width: 992px) {
  .mobile {
    display: none;
  }
}
@media screen and (max-width: 991px) {
  .desktop {
    display: none;
  }
  .mobile {
    position: absolute;
    bottom: 0;
    width: 100vw;
    background-color: white;
    nav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      border-top: 1px solid black;
      height: 40px;
      align-items: center;
      font-size: 11px;
      a {
        text-decoration: none;
        color: black;
      }
      div:nth-child(n+2) {
        border-left: 1px solid gray;
      }
    }
  }
}
</style>
