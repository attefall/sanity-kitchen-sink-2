export default {
  widgets: [
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
                  buildHookId: '5fb507b65074c317c4248572',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-2-studio-ahqn2nb3',
                  apiId: '5b70f401-e1bb-403f-a671-bf9cc88bf07a'
                },
                {
                  buildHookId: '5fb507b6cc1d0318502947e4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-2-web-f6puxfz8',
                  apiId: 'cfec17b1-5ae1-476b-b4c5-f159f47aeb09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/attefall/sanity-kitchen-sink-2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-2-web-f6puxfz8.netlify.app', category: 'apps'}
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
