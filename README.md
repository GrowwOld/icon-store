## IconStore

### Publish

For publishing new version, merge new svgs to main branch and increase the version.<br>
We already have prepublishOnly command setup to pack the package for you. <br>

### MI Icons

Filter and copy material icons from Google's official npm package.
(Only if you need to update the material icons)

```bash
node scripts/generateMaterialIcons.js
```

---


### Folder Structure

**dist**: Generated React components using material and custom svgs <br>
**svgs**: Contains material and custom svgs <br>
**scripts**: <br>
&emsp;generateMaterialIcons.js: Script to copy and filter material icons from google's github repo <br>
&emsp;generateTypes.js: Script to generate type for babel transformed svg component's js file <br/>
&emsp;compileComponent.js: Script to transform and minify JS modules code for shipping <br/>
&emsp;helpers/template.js: Custom template for our generated React components<br/>
&emsp;helpers/utils.js: General utility function<br/>


---