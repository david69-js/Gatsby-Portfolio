import * as prismic from '@prismicio/client'

const repositoryName = 'my-projects-port'

export const client = prismic.createClient(repositoryName, {
  accessToken: import.meta.env.VITE_PRISMIC_ACCESS_TOKEN,
})
