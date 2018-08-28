<template>
  <div id="wrapper">
    <top-bar></top-bar>
    <in-fo></in-fo>
  </div>
</template>

<script>
import Topbar from '@/components/Topbar'
import Info from '@/components/InfoContent'

export default {
  name: 'wrapper',
  data () {
    return {
      showLogin: false,
      showSignUp: false,
      showMains: false,
      showReset: false,
      viewinfo: false
    }
  },
  components: {
    'top-bar': Topbar,
    'in-fo': Info
  }
}
</script>
</style>
