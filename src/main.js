// ./src/main

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import AppCodeBin from '~/components/AppCodeBin.vue';

// export default function (Vue, { router, head, isClient }) {
export default function (Vue) {
  // Set default layout as a global component.
  Vue.component('Layout', DefaultLayout);

  // Set application components as global.
  Vue.component('AppCodeBin', AppCodeBin);
}
