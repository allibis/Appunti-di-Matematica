/* tag utili
  nograph -> esclude il nodo dalla generazione del grafico
  noexp -> nasconde l'explorer
  notoc -> nasconde il table of contents
  notags -> nasconde i tags
  nobacklinks -> nasconde i backlinks
*/
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
    Component.MobileOnly(
      Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
        ],
        direction: "column",
      }),
    ),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => {
        const tags = page.fileData.frontmatter?.tags ?? []
        return !tags.includes("nobacklinks")
      },
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => {
        const tags = page.fileData.frontmatter?.tags ?? []
        return !tags.includes("notags")
      },
    }),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(
      Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
        ],
      }),
    ),

    // mostra la lista delle note se mi trovo in una nota, altrimenti mostra l'indice se mi trovo in sulla pagina principale
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.DesktopOnly(
          Component.Explorer({
            title: "Materie", // Titolo sopra il menu
            folderClickBehavior: "link", // IMPORTANTE: Se clicchi la cartella, apre la nota dentro (se ha lo stesso nome)
            folderDefaultState: "collapsed", // Tiene tutto chiuso per ordine
            useSavedState: true, // Si ricorda cosa avevi aperto
            // Filtro per nascondere cartelle tecniche o vuote
            filterFn: (node) => {
              // Escludi cartelle di sistema, tag e la cartella immagini
              const exclude = ["tags", "Diagrams", "Attachments", "Excalidraw", ".obsidian"]
              return !exclude.includes(node.displayName)
            },
          }),
        ),
        condition: (page) => {
          const tags = page.fileData.frontmatter?.tags ?? []

          return !tags.includes("noexp")
        },
      }),
    ),
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.TableOfContents(),
        condition: (page) => {
          const tags = page.fileData.frontmatter?.tags ?? []
          return !tags.includes("notoc")
        },
      }),
    ),
  ],
  right: [
    Component.Graph({
      localGraph: {
        showTags: false,
        defaultCentralSlug: "Topologia",
      },
      globalGraph: {
        showTags: false,
        defaultCentralSlug: "Topologia",
      },
    }),
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.Explorer({
          filterFn: (f) => !f.slug!.startsWith("Excalidraw/") || !f.slug.includes("index"),
        }),
        condition: (page) => {
          // 3. Gestione sicura dei tag: se non ci sono tag, usa una lista vuota []
          const tags = page.fileData.frontmatter?.tags ?? []
          return !tags.includes("noexp")
        },
      }),
    ),
    Component.Backlinks({
      ignoreIndex: true,
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.MobileOnly(
      Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
        ],
        direction: "column",
      }),
    ),
    Component.ArticleTitle(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => {
        const tags = page.fileData.frontmatter?.tags ?? []
        return !tags.includes("nobacklinks")
      },
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => {
        const tags = page.fileData.frontmatter?.tags ?? []
        return !tags.includes("notags")
      },
    }),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.DesktopOnly(
      Component.Flex({
        components: [
          {
            Component: Component.Search(),
            grow: true,
          },
          { Component: Component.Darkmode() },
        ],
      }),
    ),

    // mostra la lista delle note se mi trovo in una nota, altrimenti mostra l'indice se mi trovo in sulla pagina principale
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.DesktopOnly(
          Component.Explorer({
            title: "Materie", // Titolo sopra il menu
            folderClickBehavior: "link", // IMPORTANTE: Se clicchi la cartella, apre la nota dentro (se ha lo stesso nome)
            folderDefaultState: "collapsed", // Tiene tutto chiuso per ordine
            useSavedState: true, // Si ricorda cosa avevi aperto
            // Filtro per nascondere cartelle tecniche o vuote
            filterFn: (node) => {
              // Escludi cartelle di sistema, tag e la cartella immagini
              const exclude = ["tags", "Diagrams", "Attachments", "Excalidraw", ".obsidian"]
              return !exclude.includes(node.displayName)
            },
          }),
        ),
        condition: (page) => {
          const tags = page.fileData.frontmatter?.tags ?? []

          return !tags.includes("mainpage")
        },
      }),
    ),
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.TableOfContents(),
        condition: (page) => {
          const tags = page.fileData.frontmatter?.tags ?? []
          return tags.includes("mainpage")
        },
      }),
    ),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.Graph({
        localGraph: {
          showTags: false,
          defaultCentralSlug: "Teoria-di-Topologia-Generale/Topologia",
        },
        globalGraph: {
          showTags: false,
          defaultCentralSlug: "Teoria-di-Topologia-Generale/Topologia",
        },
      }),
      condition: (page) => {
        const tags = page.fileData.frontmatter?.tags ?? []
        return tags.includes("Topologia")
      },
    }),
    Component.Graph({
      localGraph: {
        showTags: false,
        defaultCentralSlug: "Teoria-di-Topologia-Generale/Topologia",
      },
      globalGraph: {
        showTags: false,
        defaultCentralSlug: "Teoria-di-Topologia-Generale/Topologia",
      },
    }),
    Component.DesktopOnly(
      Component.ConditionalRender({
        component: Component.Explorer({
          filterFn: (f) => !f.slug!.startsWith("Excalidraw/") || !f.slug.includes("index"),
        }),
        condition: (page) => {
          // 3. Gestione sicura dei tag: se non ci sono tag, usa una lista vuota []
          const tags = page.fileData.frontmatter?.tags ?? []
          return tags.includes("mainpage")
        },
      }),
    ),
    Component.Backlinks({
      ignoreIndex: true,
    }),
  ],
}
