export const pageContentQuery = `
query PageQuery {
  landingPage {
    hero {
      cta {
        text
        url
      }
      image {
        alt
        title
        url
        width
        id
        height
      }
      subcopy
      title
    }
    servicesSection {
      htmlId
      title
      services {
        id
        name
        icon {
          alt
          title
          url
          width
          id
          height
        }
        description
      }
    }
    sections {
      htmlId
      content(markdown: true)
      title
      image {
        alt
        title
        url
        width
        id
        height
      }
    }
  }
}`