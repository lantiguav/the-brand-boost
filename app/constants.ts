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

export const navigationQuery = `
query NavigationQuery {
  landingPage {
    navigation {
      links {
        id
        text
        url
      }
      logo {
        alt
        url
        title
        width
        height
      }
      cta {
        id
        text
        url
      }
    }
  }
}
`
