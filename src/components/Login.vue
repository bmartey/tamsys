<template>
  <div>
      <div class="account-pages"></div>
        <div class="clearfix"></div>
        <div class="wrapper-page">
            <div class="account-bg">
                <div class="card-box mb-0">
                    <div class="text-center m-t-20">
                        <a href="#" class="logo">
                            <i class="zmdi zmdi-group-work icon-c-logo"></i>
                            <span>Type Approval</span>
                        </a>
                    </div>
                    <div class="m-t-10 p-20">
                        <div class="row">
                            <div class="col-12 text-center">
                                <h6 class="text-muted text-uppercase m-b-0 m-t-0">Log In</h6>
                            </div>
                        </div>
                        <form class="m-t-20" action="index.html">

                            <div class="form-group row">
                                <div class="col-12">
                                    <input class="form-control" type="text" required="" placeholder="Username">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-12">
                                    <input class="form-control" type="password" required="" placeholder="Password">
                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-12">
                                    <div class="checkbox checkbox-custom">
                                        <input id="checkbox-signup" type="checkbox">
                                        <label for="checkbox-signup">
                                            Remember me
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group text-center row m-t-10">
                                <div class="col-12">
                                    <button class="btn btn-success btn-block waves-effect waves-light" type="submit">Log In</button>
                                </div>
                            </div>

                            <div class="form-group text-center row m-t-10">
                                <div class="col-12">
                                    <button @click="loginBack" class="btn btn-danger btn-block waves-effect waves-light">Go Back</button>
                                </div>
                            </div>

                            <div class="form-group row m-t-30 mb-0">
                                <div class="col-12">
                                    <a href="#" @click="resetClick" class="text-muted"><i class="fa fa-lock m-r-5"></i> Forgot your password?</a>
                                </div>
                            </div>

                        </form>

                    </div>

                    <div class="clearfix"></div>
                </div>
            </div>
            <!-- end card-box-->

            <div class="m-t-20">
                <div class="text-center">
                    <p class="text-white">Don't have an account? <a href="#" class="text-white m-l-5"  @click="signUpClick"><b>Sign Up</b></a></p>
                </div>
            </div>

        </div>
        <!-- end wrapper page -->
   </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      showLogin: true,
      showSignUp: false,
      showMains: false,
      showReset: false
    }
  },
  methods: {
    loginBack: function (event) {
      this.showLogin = false
      this.showSignUp = false
      this.showMains = false
      this.showReset = false
      this.$root.$emit('loginstat', this.showLogin)
      this.$root.$emit('signupstat', this.showSignUp)
      this.$root.$emit('mainsstat', this.showMains)
      this.$root.$emit('resetstat', this.showReset)
    },
    resetClick: function (event) {
      this.showLogin = false
      this.showSignUp = false
      this.showMains = true
      this.showReset = true
      this.$root.$emit('loginstat', this.showLogin)
      this.$root.$emit('signupstat', this.showSignUp)
      this.$root.$emit('mainsstat', this.showMains)
      this.$root.$emit('resetstat', this.showReset)
    },
    signUpClick: function (event) {
      this.showLogin = false
      this.showSignUp = true
      this.showMains = true
      this.showReset = false
      this.$root.$emit('loginstat', this.showLogin)
      this.$root.$emit('signupstat', this.showSignUp)
      this.$root.$emit('mainsstat', this.showMains)
      this.$root.$emit('resetstat', this.showReset)
    }
  }
}
</script>
