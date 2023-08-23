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
      id
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
  }
}`