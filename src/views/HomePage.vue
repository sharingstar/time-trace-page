<template>
  <div>
    <button @click="save">获取数据</button>
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
