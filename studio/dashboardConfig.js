export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e8ae1c14587b61958a891e9',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-n4w5te4o',
                  apiId: 'e81b116f-0142-4144-838b-0c0215e09822'
                },
                {
                  buildHookId: '5e8ae1c15ab22f12ab2782b3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-den5b2e2',
                  apiId: '7a9b4c12-ca2e-49d0-98d8-49c35ed3ba63'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/siddharthsharma94/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-den5b2e2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
