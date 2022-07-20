import './style.css'
import data from './dataset.json'


// document.head.querySelector('meta[name="description"]') = `${data.page_meta.meta_description}`
// document.createElement('meta').innerHTML = `${data.page_meta.meta_keywords}`
// document.createElement('meta'[name="description"]) = `${data.page_meta.meta_description}`

function navItems(nav) { 
  return`<li><a href = "${nav.href}">${nav.text}</a></li>`
};


function breadcrumbsItems(breadcrumbs) {
  return`<li><a href = "${breadcrumbs.href}">${breadcrumbs.text}</a></li>`
}

function tagItem(tag){
  return `${tag}`
}
document.title = `${data.page_meta.title}`

// document.createElement('p') = data.page_text
document.querySelector('#app').innerHTML = `
<nav>
<ul class="nav">
 ${data.nav.map(navItems).join("")}
</ul>
</nav>

<h1>${data.page_meta.h1}</h1>
<div>
<ul class="breadcrumbs">
 ${data.breadcrumbs.map(breadcrumbsItems).join("")}
</ul>
</div>


${data.page_text.map(tagItem).join("")}
<${tagItem}>
</${tagItem}>
`
