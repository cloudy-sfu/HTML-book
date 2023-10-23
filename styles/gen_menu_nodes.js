function generate_node(article, level) {
    let node = `
        <li class="nav-item mb-2">
            <a ${article.filepath ? `href="javascript:article('${article.filepath}')"` : ''} 
                style="padding: 0.5rem ${level}rem;">
                ${article.name}
            </a>
        </li>
    `;
    if (article.sub) {
        level++;
        for (let i = 0; i < article.sub.length; i++) {
            node += generate_node(article.sub[i], level);
        }
    }
    return node;
}

function generate_menu(articles_list) {
    let articles_html = '';
    const level = 0;
    for (let i = 0; i < articles_list.length; i++) {
        articles_html += generate_node(articles_list[i], level);
    }
    return articles_html;
}
