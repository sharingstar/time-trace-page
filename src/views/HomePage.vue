<template>
  <div>
    <h1>问禅App</h1>
  </div>
</template>
<script>
import { getdata } from '@/api/user.js'
export default {
  name: 'HomePage',
  methods: {
    async save() {
      const res = await getdata()
      console.log(res)
    }
  }
}
</script>
