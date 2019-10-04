<template>
  <Layout>
    <VueRemarkContent/>
  </Layout>
</template>

<!-- Front-matter fields can be queried from GraphQL layer -->
<page-query>
query Markdown ($id: ID!) {
  markdown(id: $id) {
    title
    excerpt
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.markdown.title
    };
  },
};
</script>
