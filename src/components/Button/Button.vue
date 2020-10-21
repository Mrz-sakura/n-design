<template>
  <component
    :is="isLink"
    :class="classNames"
    @click="onClick"
    v-bind="btnProps"
  >
    <span v-if="$slots.default"><slot></slot></span>
  </component>
</template>

<script>
const prefixCls = 'nd-btn'
export default {
  name: 'NButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    loading: {
      type: Boolean,
      default: false
    },
    href: {
      type: String
    },
    target: {
      type: String
    },
    replace: {
      type: Boolean,
      default: false
    },
    htmlType: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    classNames() {
      const { type } = this
      return [`${prefixCls}`, `${prefixCls}-${type}`]
    },
    isLink() {
      return this.href ? 'a' : 'button'
    },
    btnProps() {
      return this.isLink === 'button' ? { type: this.htmlType } : { href: this.href }
    }
  },
  methods: {
    onClick(ev) {

      this.$emit('click', ev)
    }
  }
}
</script>

<style lang='less'>
</style>