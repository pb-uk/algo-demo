<template><div>
<button @click="edit">Edit</button>
<button @click="step">Step</button>
<button @click="run">Run</button>

<div class="code" ref="original">
  <pre>{{ original }}</pre>
</div>

<div class="code" ref="edited" v-if="showEdit">
  <pre>{{ edited }}</pre>
</div>

<div class="code">
  <pre>
state: {
  t: {{ state.t }}
}
  </pre>
</div>

</div></template>

<script>

function evalFunction(text) {
  const wrapper = {};
  eval(`wrapper.fn = ${text}`);
  return wrapper.fn;
}

export default {
  data() {
    return {
      editedCode: null,
      originalCode: this.$slots.default[0].text,
      showEdit: false,
      state: {
        t: 0,
      },
    };
  },

  methods: {
    edit() {
      this.showEdit = true;
      this.editCode = this.originalCode;
    },

    run() {
      const stepFunction = evalFunction(this.$slots.default[0].text);
    },

    step() {
      const stepFunction = evalFunction(this.$slots.default[0].text);
      stepFunction(this.state);
    },
  },
};
</script>
