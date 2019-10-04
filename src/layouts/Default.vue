<template><div>
<default-header/>
<slot/>
<default-footer/>
</div></template>

<script>
import DefaultHeader from '~/components/DefaultHeader.vue';
import DefaultFooter from '~/components/DefaultFooter.vue';

export default {
  components: {
    DefaultHeader,
    DefaultFooter,
  },
};
</script>
<style>
</style>
