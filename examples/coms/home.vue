<template>
  <div>
    <NButton>default</NButton>
    <NButton type="primary">primary</NButton>
    <NButton type="danger">danger</NButton>
    <NButton type="success">success</NButton>
    <NButton type="warning">warning</NButton>
    <NButton type="info">info</NButton>
    <br />
    <NButton type="primary" href="//www.baidu.com">href</NButton>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import url('../../src/styles/base.less');
@import url('../../src/styles/components/button.less');
</style>