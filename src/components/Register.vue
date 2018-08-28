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
                                <h6 class="text-muted text-uppercase m-b-0 m-t-0">Sign Up</h6>
                            </div>
                        </div>
                        <form class="m-t-20" action="index.html">
                            <div class="form-group row">
                                <div class="col-12">
                                    <input class="form-control" type="email" required="" placeholder="Email">
                                </div>
                            </div>
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
                                    <div class="checkbox checkbox-primary">
                                        <input id="checkbox-signup" type="checkbox" checked="checked">
                                        <label for="checkbox-signup">I accept <a href="#">Terms and Conditions</a></label>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row text-center m-t-10">
                                <div class="col-12">
                                    <button class="btn btn-success btn-block waves-effect waves-light" type="submit">Join Now</button>
                                </div>
                            </div>
                            <div class="form-group text-center row m-t-10">
                                <div class="col-12">
                                    <button @click="loginBack" class="btn btn-danger btn-block waves-effect waves-light">Go Back</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- end card-box-->

            <div class="m-t-20">
                <div class="text-center">
                    <p class="text-white">Already have account? <a href="#" @click="loginClick" class="text-white m-l-5"><b>Log In</b> </a></p>
                </div>
            </div>

        </div>
        <!-- end wrapper page -->
   </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      showLogin: true,
      showSignUp: false,
      showMains: false,
      showReset: false
    };
  },
  methods: {
    loginBack: function(event) {
      this.showLogin = false;
      this.showSignUp = false;
      this.showMains = false;
      this.showReset = false;
      this.$root.$emit("loginstat", this.showLogin);
      this.$root.$emit("signupstat", this.showSignUp);
      this.$root.$emit("mainsstat", this.showMains);
      this.$root.$emit("resetstat", this.showReset);
    },
    loginClick: function(event) {
      this.showLogin = true;
      this.showSignUp = false;
      this.showMains = true;
      this.showReset = false;
      this.$root.$emit("loginstat", this.showLogin);
      this.$root.$emit("signupstat", this.showSignUp);
      this.$root.$emit("mainsstat", this.showMains);
      this.$root.$emit("resetstat", this.showReset);
    }
  }
};
</script>
