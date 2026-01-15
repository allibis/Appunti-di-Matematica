import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/allibis",

    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    
    // Component.ContentMeta(),
    // Component.TagList(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        // { Component: Component.ReaderMode() },
      ],
    }),
    
    // mostra la lista delle note se mi trovo in una nota, altrimenti mostra l'indice se mi trovo in sulla pagina principale
    Component.DesktopOnly(Component.ConditionalRender({
      component: Component.Explorer({
        filterFn: (f) => !f.slug!.startsWith("Excalidraw/")
      }),
      condition: (page) => page.fileData.slug !== "index",
    })),
    Component.DesktopOnly(Component.ConditionalRender({
      component: Component.TableOfContents(),
      condition: (page) => page.fileData.slug === "index",
    }))
    

  ],
  right: [
    Component.Graph({
      localGraph:{
        showTags: false,
        defaultCentralSlug: "Topologia",
      },
      globalGraph:{
        showTags: false,
        defaultCentralSlug: "Topologia",
      }
    }
    ),
    Component.Backlinks(),
  ],
  

}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),

  ],
  right: [],
}
