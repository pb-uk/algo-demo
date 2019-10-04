<template><div>
<button @click="edit">Edit</button>
<button @click="step">Step</button>
<button @click="run">Run</button>

<div class="code" ref="original">
  <h3>Step function</h3>
  <pre>{{ original }}</pre>
</div>

<div class="code" ref="edited" v-if="showEdit">
  <h3>Edited step function</h3>
  <pre>{{ edited }}</pre>
</div>

<div class="code">
  <h3>State</h3>
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
  /* eslint-disable-next-line no-eval */
  eval(`wrapper.fn = ${text}`);
  return wrapper.fn;
}

export default {
  data() {
    return {
      edited: null,
      original: this.$slots.default[0].text,
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
      stepFunction(this.state);
    },

    step() {
      const stepFunction = evalFunction(this.$slots.default[0].text);
      stepFunction(this.state);
    },
  },
};
</script>
