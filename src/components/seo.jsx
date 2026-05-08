import { Helmet } from 'react-helmet-async'

function Seo({ description = '', lang = 'en', meta = [], title }) {
  const metaDescription = description || 'Portfolio site'

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | Portfolio`}
      meta={[
        { name: 'description', content: metaDescription },
        { property: 'og:title', content: title },
        { property: 'og:description', content: metaDescription },
        { property: 'og:type', content: 'website' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: metaDescription },
        ...meta,
      ]}
    />
  )
}

export default Seo
