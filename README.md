# HTML book
 A static website template to organize HTML books

![](https://shields.io/badge/dependencies-Typora-green)
![](https://shields.io/badge/dependencies-Github_Pages-green)

## Usage

1. Use [Typora](https://typora.io/) or alternative software to export all markdown articles to HTML files.
2. Replace `example/` with these HTML files. It is not necessary to wrap all HTML files in a folder, but should make sure assets (images, file links, medias) are linked with correct relative path.
3. Open `index.html` with text editor.
4. Replace `cloudy-sfu Markdown Book` in line 14 with customized book name.
5. Replace `Book title` in line 41 with customized book name.
6. Edit line 44-78: use a tag similar to line 45-47 to index an article. Use line 45-47 as an example, for each article:
   - Replace `Chapter 1`  with customized article or section title.
   - Replace `example/Lorem Ipsum 1.html` with the relative path against `index.html` of customized article. If the item doesn't have a corresponding article, (For example section 1 manages section 1.1 and section 1.1 is an article, but section 1 itself is just a title and isn't an article.) delete `href=""` attribute.
   - Replace the second argument of `padding: 0.5rem 0;` with $n-1$ rem, where $n$ is the level (depth).
     For example, 0 is section, 1rem is subsection, 2rem is subsubsection.
7. Replace `&copy; cloudy-sfu 2022` in line 82 with customized author and publishing year.
8. Replace `about:blank` in line 89 with customized book cover.
9. To publish, upload this website to GitHub and enable GitHub Pages.

