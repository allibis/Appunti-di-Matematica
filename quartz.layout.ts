/* tag utili
  nograph -> esclude il nodo dalla generazione del grafico e nasconde la UI
  noexp -> nasconde l'explorer
  notoc -> nasconde il table of contents
  notags -> nasconde i tags
  nobacklinks -> nasconde i backlinks
  nobread -> nasconde i breadcrumbs
  mainpage -> sposta il TOC a sx e l'Explorer a dx
  index -> fa scomparire il nodo centrale (hub) per pulire il grafico
*/
import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

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

// ============================================================
// LAYOUT PAGINE NORMALI (defaultContentPageLayout)
// ============================================================
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(
      Component.Flex({
        components: [{ Component: Component.Search(), grow: true }, { Component: Component.Darkmode() }],
        direction: "column",
      }),
    ),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("nobread"),
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("notags"),
    }),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(
      Component.Flex({
        components: [{ Component: Component.Search(), grow: true }, { Component: Component.Darkmode() }],
      }),
    ),
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.DesktopOnly(
          Component.Explorer({
            title: "Argomenti", 
            folderClickBehavior: "link", 
            folderDefaultState: "collapsed",
            useSavedState: true, 
            filterFn: (node) => !["tags", "Diagrams", "Attachments", "Excalidraw", ".obsidian"].includes(node.displayName),
          }),
        ),
        condition: (page) => !page.fileData.frontmatter?.tags?.includes("noexp"),
      }),
    ),
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.TableOfContents(),
        condition: (page) => !page.fileData.frontmatter?.tags?.includes("notoc"),
      }),
    ),
  ],
  
  right: [
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: { showTags: false, hideNodesWithTags: ["index"] },
        globalGraph: { showTags: false, hideNodesWithTags: ["index"] },
      }),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("nograph"),
    }),
    Component.ConditionalRender({
      component: Component.Backlinks({ ignoreIndex: true }),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("nobacklinks"),
    }),
  ],
}

// ============================================================
// LAYOUT PAGINE INDICE / CARTELLE (defaultListPageLayout)
// ============================================================
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(
      Component.Flex({
        components: [{ Component: Component.Search(), grow: true }, { Component: Component.Darkmode() }],
        direction: "column",
      }),
    ),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("nobread"),
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("notags"),
    }),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(
      Component.Flex({
        components: [{ Component: Component.Search(), grow: true }, { Component: Component.Darkmode() }],
      }),
    ),
    // Explorer a SINISTRA (scompare se c'è mainpage o noexp)
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.DesktopOnly(
          Component.Explorer({
            title: "Argomenti",
            folderClickBehavior: "link", 
            folderDefaultState: "collapsed", 
            useSavedState: true, 
            filterFn: (node) => !["tags", "Diagrams", "Attachments", "Excalidraw", ".obsidian"].includes(node.displayName),
          }),
        ),
        condition: (page) => {
          const tags = page.fileData.frontmatter?.tags ?? []
          return !tags.includes("mainpage") && !tags.includes("noexp")
        },
      }),
    ),
    // TOC a SINISTRA (appare SOLO se c'è mainpage e non c'è notoc)
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.TableOfContents(),
        condition: (page) => {
          const tags = page.fileData.frontmatter?.tags ?? []
          return tags.includes("mainpage") && !tags.includes("notoc")
        },
      }),
    ),
  ],
  
  right: [
    // Grafico a DESTRA
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: { showTags: false, hideNodesWithTags: ["index"] },
        globalGraph: { showTags: false, hideNodesWithTags: ["index"] },
      }),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("nograph"),
    }),
    // Explorer a DESTRA (appare SOLO se c'è mainpage e non c'è noexp)
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.Explorer({
          filterFn: (f) => !f.slug!.startsWith("Excalidraw/") || !f.slug.includes("index"),
        }),
        condition: (page) => {
          const tags = page.fileData.frontmatter?.tags ?? []
          return tags.includes("mainpage") && !tags.includes("noexp")
        },
      }),
    ),
    // Backlinks a DESTRA
    Component.ConditionalRender({
      component: Component.Backlinks({ ignoreIndex: true }),
      condition: (page) => !page.fileData.frontmatter?.tags?.includes("nobacklinks"),
    }),
  ],
}