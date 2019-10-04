<template><div class="code">
  <pre>{{ code }}</pre>
</div></template>

<script>

export default {
  props: {
    code: {
      type: String,
      default: '\n',
    },
  },

  data() {
    return {
    };
  },

  methods: {
  },
};
</script>
