export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da67aa034b0d8d8aad8755d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-rwqfwe2s',
                  apiId: 'ea43ea40-99da-4a62-832e-f2f0aca318ff'
                },
                {
                  buildHookId: '5da67aa1f4ee60dc4f2b7dc2',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9xasf4w4',
                  apiId: '41bea73e-8b04-45a5-b047-bf093968ec02'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ayenzky/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9xasf4w4.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
