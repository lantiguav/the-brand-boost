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
  _site {
    favicon {
      url
    }
  }
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
export const linkVariants = {
  'orange' : 'text-orange-dark underline decoration-transparent underline-offset-4 hover:decoration-orange-dark active:decoration-orange-darkest active:text-orange-darkest',
  'orange-darkest' : 'text-orange-darkest underline decoration-transparent underline-offset-4 hover:decoration-orange-darkest active:decoration-orange-darkest',
  'black' : 'text-black hover:text-orange-dark underline decoration-transparent underline-offset-4 hover:decoration-orange-dark active:decoration-orange-darkest active:text-orange-darkest',
  'button-solid' : 'px-4 py-2 rounded bg-orange-dark text-white hover:bg-orange-darkest active:bg-orange-darkest',
  'button-outlined' : 'px-4 py-2 rounded bg-white border border-orange-dark text-orange-dark hover:text-orange-darkest hover:border-orange-darkest hover:bg-pink-light active:text-orange-darkest active:border-orange-darkest active:bg-pink-light' 
}