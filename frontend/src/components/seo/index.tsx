import Head from 'next/head'

export const SEO = ({ pageTitle, font, metaDesc }: { pageTitle?: string; font?: string; metaDesc?: string }) => (
  <Head>
    <title>{pageTitle ? `${pageTitle} || Digikids inspiring innovation` : 'Digikids inspiring innovation'}</title>
    <meta
      name="description"
      content={
        metaDesc ||
        'Digikids is a leading educational platform that offers fun and interactive courses for kids to learn coding, robotics, and digital skills. Our courses are designed by experts in child development and technology, and are tailored to engage and inspire young minds. Join our community and give your child the tools to thrive in the digital age.'
      }
    />
    {font && <link href={font} rel="stylesheet" />}
  </Head>
)
