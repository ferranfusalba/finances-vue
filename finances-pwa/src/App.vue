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
      <cv-content-switcher :light="light" :size="size">
          <cv-content-switcher-button owner-id="csb-1" :icon="icon"
            >1</cv-content-switcher-button
          >
        <cv-content-switcher-button owner-id="csb-2" :icon="icon"
          >2</cv-content-switcher-button
        >
        <cv-content-switcher-button owner-id="csb-1" :icon="icon"
          >3</cv-content-switcher-button
        >
        <cv-content-switcher-button owner-id="csb-2" :icon="icon"
          >4</cv-content-switcher-button
        >
        <cv-content-switcher-button owner-id="csb-1" :icon="icon"
          >5</cv-content-switcher-button
        >
      </cv-content-switcher>

      <!--
      <cv-content-switcher :light="light" :size="size">
        <cv-content-switcher-button
          owner-id="csb-1"
          :selected="isSelected(0)"
          :icon="icon"
          >Button Name 1</cv-content-switcher-button
        >
        <cv-content-switcher-button
          owner-id="csb-2"
          :selected="isSelected(1)"
          :icon="icon"
          >Button Name 2</cv-content-switcher-button
        >
        <cv-content-switcher-button
          owner-id="csb-3"
          :selected="isSelected(2)"
          v-if="toggle3"
          :toggle3="toggle3"
          :disabled="disabled3"
          :icon="icon"
          >Button Name 3</cv-content-switcher-button
        >
      </cv-content-switcher>

      <section style="margin: 10px 0">
        <cv-content-switcher-content owner-id="csb-1">
          <p>This is the content for option 1</p>
        </cv-content-switcher-content>
        <cv-content-switcher-content owner-id="csb-2">
          <p>This is the content for option 2</p>
        </cv-content-switcher-content>
        <cv-content-switcher-content owner-id="csb-2">
          <p>This is more content for option 2</p>
        </cv-content-switcher-content>
        <cv-content-switcher-content owner-id="csb-3">
          <p>This is the content for option 3</p>
        </cv-content-switcher-content>
      </section> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
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
  }
}
</style>
