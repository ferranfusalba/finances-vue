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
        <cv-header-name to="/">Finances</cv-header-name>
        <cv-header-nav aria-label="Carbon nav">
          <cv-header-menu-item to="/global"> Global </cv-header-menu-item>
          <cv-header-menu aria-label="Accounts" title="Accounts">
            <cv-header-menu-item to="/accounts"> Overview </cv-header-menu-item>
            <cv-header-menu-item to="/accounts/1">
              Account 1
            </cv-header-menu-item>
            <cv-header-menu-item to="/accounts/2">
              Account 2
            </cv-header-menu-item>
            <cv-header-menu-item to="/accounts/3">
              Account 3
            </cv-header-menu-item>
          </cv-header-menu>
          <cv-header-menu aria-label="Data" title="Data">
            <cv-header-menu-item to="/data"> Overview </cv-header-menu-item>
            <cv-header-menu-item href="javascript:void(0)">
              by Month
            </cv-header-menu-item>
            <cv-header-menu-item href="javascript:void(0)">
              by Year
            </cv-header-menu-item>
            <cv-header-menu-item href="javascript:void(0)">
              All graphics
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
        <router-link to="/">
          <div>
            <Home20 />
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/global">
          <div>
            <Globe20 />
            <p>Global</p>
          </div>
        </router-link>
        <router-link to="/accounts">
          <div>
            <Currency20 />
            <p>Accounts</p>
          </div>
        </router-link>
        <router-link to="/data">
          <div>
            <ChartLineData20 />
            <p>Data</p>
          </div>
        </router-link>
        <router-link to="/settings">
          <div>
            <Settings20 />
            <p>Settings</p>
          </div>
        </router-link>
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
      height: 60px;
      align-items: center;
      a {
        text-decoration: none;
        color: black;
        height: 100%;
        div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
        p {
          font-size: 11px;
        }
      }
      }
    }
  }
}
</style>
