<template>
  <div id="wrapper">
    <top-bar></top-bar>
    <in-fo></in-fo>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Info from '@/components/Info'

export default {
  name: 'wrapper',
  data () {
    return {
    //   msg: 'Welcome to Your Vue.js TAMSYS App'
    }
  },
  components: {
    'top-bar': Topbar,
    'in-fo': Info
  }
}
</script>
