<template>
  <div id="user">
    <top-bar></top-bar>
    <user-form></user-form>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import UserForm from '@/components/UserForm'

export default {
  name: 'user',
  data () {
    return {
      msg: 'Welcome to Your Vue.js TAMSYS App'
    }
  },
  components: {
    'top-bar': Topbar,
    'user-form': UserForm
  }
}
</script>
