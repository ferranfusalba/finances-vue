<template>
  <cv-header aria-label="Carbon header">
    <!-- <cv-header-menu-button
          aria-label="Header menu"
          aria-controls="side-nav"
        /> -->
    <cv-skip-to-content href="#main-content">
      Skip to content
    </cv-skip-to-content>
    <cv-header-name to="/">Finances</cv-header-name>
    <cv-header-nav aria-label="Carbon nav">
      <cv-header-menu-item to="/global"> Global </cv-header-menu-item>
      <cv-header-menu aria-label="Accounts" title="Accounts">
        <cv-header-menu-item to="/accounts"> Overview </cv-header-menu-item>
        <cv-header-menu-item to="/accounts/1"> Account 1 </cv-header-menu-item>
        <cv-header-menu-item to="/accounts/2"> Account 2 </cv-header-menu-item>
        <cv-header-menu-item to="/accounts/3"> Account 3 </cv-header-menu-item>
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
    <!-- <template v-slot:header-global>
          <cv-header-global-action
            aria-label="Notifications"
            aria-controls="notifications-panel"
            @click="actionNotifications"
            label="Notifications"
            tipPosition="bottom"
            tipAlignment="end"
          >
            <Notification20 />
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
        <template v-slot:right-panels v-if="areRightPanels"> </template> -->
  </cv-header>
</template>

<script>
// import Notification20 from '@carbon/icons-vue/lib/notification/20'

export default {
  name: "HeaderBar",
  data() {
    return {
      // areLeftPanels: true,
      // areRightPanels: false,
    };
  },
  components: {
    // Notification20,
  },
  methods: {
    /*
    actionNotifications() {
      console.log('actionNotifications');
    }, */
  },
};
</script>
