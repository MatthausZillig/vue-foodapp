export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as AppLogo } from '../../components/AppLogo.vue'
export { default as AppRestaurantInfo } from '../../components/AppRestaurantInfo.vue'
export { default as AppSelect } from '../../components/AppSelect.vue'
export { default as AppToast } from '../../components/AppToast.vue'
export { default as FooterApp } from '../../components/FooterApp.vue'
export { default as MenuApp } from '../../components/MenuApp.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
