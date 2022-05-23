<script lang="ts" setup>
import { onMessage } from 'webext-bridge'
let visiable = $ref(false)
const target= ref<HTMLDivElement>()
onMounted(() => {
  onMessage("clipper-awake", () => {
    console.log(visiable)
    visiable = true
  })
  onClickOutside(target,()=>{
    visiable=false;
  })
})
</script>
<template>
  <div v-if="visiable" ref="target" class="pos">
    测试使用2343s
    <div>111</div>
    <div>
    classss
  </div>
  </div>
  
</template>

<style>
.pos {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
