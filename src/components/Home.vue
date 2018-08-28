<template>
  <div id="wrapper">
    <div v-if="!showMains"><top-bar></top-bar></div>
    <div v-if="!showMains"><in-fo></in-fo></div>
    <div v-if="showLogin"><log-in></log-in></div>
    <div v-if="showReset"><re-set></re-set></div>
    <div v-if="showSignUp"><sign-up></sign-up></div>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import HomeInfo from '@/components/HomeContent'
import Login from '@/components/Login'
import Reset from '@/components/ResetPw'
import Signup from '@/components/Register'

export default {
  name: 'wrapper',
  data () {
    return {
      showLogin: false,
      showSignUp: false,
      showMains: false,
      showReset: false,
      viewinfo: true
    }
  },
  components: {
    'top-bar': Topbar,
    'in-fo': HomeInfo,
    'log-in': Login,
    're-set': Reset,
    'sign-up': Signup
  },
  mounted: function () { 
    this.$root.$on('loginstat', (text) => { // here you need to use the arrow function
     this.showLogin = text
    }),
    this.$root.$on('signupstat', (text) => { // here you need to use the arrow function
     this.showSignUp = text
    }),
    this.$root.$on('mainsstat', (text) => { // here you need to use the arrow function
     this.showMains = text
    }),
    this.$root.$on('resetstat', (text) => { // here you need to use the arrow function
     this.showReset = text
    })
  }
}
</script>
