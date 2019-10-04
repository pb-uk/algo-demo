// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Algorithms in JS',

  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Markdown', // Required
        baseDir: './content/md', // Where .md files are located
        // pathPrefix: '/docs', // Add route prefix. Optional
        template: './src/templates/Default.vue', // Optional
      },
    },
  ],
};
