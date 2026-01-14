import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"  
import { classNames } from "../util/lang"  
import { pathToRoot, joinSegments } from "../util/path"  // Add joinSegments to import  
  
const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {  
  const title = fileData.frontmatter?.title  
  if (title) {  
    const baseDir = pathToRoot(fileData.slug!)  
    const iconPath = joinSegments(baseDir, "static/icon.png")  
      
    return (  
      <h1 class={classNames(displayClass, "article-title")}>  
        <img src={iconPath} alt="icon" style="width: 16vw; vertical-align: middle; horizontal-align: middle; margin-top: 0;" />
        <br></br>
        {title}  
      </h1>  
    )  
  } else {  
    return null  
  }  
}  

ArticleTitle.css = `
.article-title {
  margin: 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor
