<template>
    <!-- Top Bar Start -->
    <div id="tbar" class="topbar">

        <!-- LOGO -->
        <div class="topbar-left">
          <router-link to="/">
            <a href="" class="logo">
                <i class="zmdi zmdi-group-work icon-c-logo"></i>
                <span>{{msg}}</span>
            </a>
          </router-link>
        </div>

        <nav class="navbar-custom">

            <ul v-if="authentication" class="list-inline float-right mb-0">
                <li class="list-inline-item dropdown notification-list">
                    <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <i class="zmdi zmdi-notifications-none noti-icon"></i>
                        <span class="noti-icon-badge"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-lg" aria-labelledby="Preview">
                        <!-- item-->
                        <div class="dropdown-item noti-title">
                            <h5><small><span class="label label-danger pull-xs-right">7</span>Notification</small></h5>
                        </div>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-success"><i class="icon-bubble"></i></div>
                            <p class="notify-details">Robert S. Taylor commented on Admin<small class="text-muted">1min ago</small></p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-info"><i class="icon-user"></i></div>
                            <p class="notify-details">New user registered.<small class="text-muted">1min ago</small></p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-danger"><i class="icon-like"></i></div>
                            <p class="notify-details">Carlos Crouch liked <b>Admin</b><small class="text-muted">1min ago</small></p>
                        </a>

                        <!-- All-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item notify-all">
                            View All
                        </a>

                    </div>
                </li>

                <li class="list-inline-item dropdown notification-list">
                    <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <i class="zmdi zmdi-email noti-icon"></i>
                        <span class="noti-icon-badge"></span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-arrow-success dropdown-lg" aria-labelledby="Preview">
                        <!-- item-->
                        <div class="dropdown-item noti-title bg-success">
                            <h5><small><span class="label label-danger pull-xs-right">7</span>Messages</small></h5>
                        </div>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-faded">
                                <img src="assets/images/users/avatar-2.jpg" alt="img" class="img-circle img-fluid">
                            </div>
                            <p class="notify-details">
                                <b>Robert Taylor</b>
                                <span>New tasks needs to be done</span>
                                <small class="text-muted">1min ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-faded">
                                <img src="assets/images/users/avatar-3.jpg" alt="img" class="img-circle img-fluid">
                            </div>
                            <p class="notify-details">
                                <b>Carlos Crouch</b>
                                <span>New tasks needs to be done</span>
                                <small class="text-muted">1min ago</small>
                            </p>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <div class="notify-icon bg-faded">
                                <img src="assets/images/users/avatar-4.jpg" alt="img" class="img-circle img-fluid">
                            </div>
                            <p class="notify-details">
                                <b>Robert Taylor</b>
                                <span>New tasks needs to be done</span>
                                <small class="text-muted">1min ago</small>
                            </p>
                        </a>

                        <!-- All-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item notify-all">
                            View All
                        </a>

                    </div>
                </li>

                <li class="list-inline-item dropdown notification-list">
                    <a class="nav-link dropdown-toggle waves-effect waves-light nav-user" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <img src="assets/images/users/avatar-1.jpg" alt="user" class="rounded-circle">
                    </a>
                    <div class="dropdown-menu dropdown-menu-right profile-dropdown " aria-labelledby="Preview">
                        <!-- item-->
                        <div class="dropdown-item noti-title">
                            <h5 class="text-overflow"><small>Welcome ! John</small> </h5>
                        </div>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="zmdi zmdi-account-circle"></i> <span>Profile</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="zmdi zmdi-settings"></i> <span>Settings</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="zmdi zmdi-lock-open"></i> <span>Lock Screen</span>
                        </a>

                        <!-- item-->
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="zmdi zmdi-power"></i> <span>Logout</span>
                        </a>

                    </div>
                </li>

            </ul>

            <ul v-if="!authentication" class="list-inline float-right mb-0">
                <li class="list-inline-item dropdown notification-list">
                  <router-link v-if="viewinfo" to="/info">
                    <a class="nav-link dropdown-toggle arrow-none waves-light waves-effect" data-toggle="dropdown" href="#" role="button"
                        aria-haspopup="false" aria-expanded="false">
                        <i class="zmdi zmdi-notifications-none noti-icon"></i>
                    </a>
                  </router-link>
                </li>
            </ul>

            <ul class="list-inline menu-left mb-0">
                <li class="float-left">
                  <!-- <router-link to="/login"> -->
                    <button @click="loginClick" class="button-menu-mobile open-left waves-light waves-effect">
                        <i class="zmdi zmdi-sign-in"></i>
                    </button>
                  <!-- </router-link> -->
                </li>
            </ul>

        </nav>

    </div>
    <!-- Top Bar End -->
</template>

<script>
export default {
  name: 'tbar',
  data () {
    return {
      msg: 'Type Approval',
      authentication: false,
      showLogin: false,
      showSignUp: false,
      showMains: false,
      viewinfo: true
    }
  },
  methods: {
    loginClick: function (event) {
      this.showLogin = true
      this.showSignUp = false
      this.showMains = true
      this.$root.$emit('loginstat', this.showLogin)
      this.$root.$emit('signupstat', this.showSignUp)
      this.$root.$emit('mainsstat', this.showMains)
    }
  }
}
</script>

<style scoped>
.navbar {
  height: 70px;
}
</style>
