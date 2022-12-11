# Webpack starter setup

 My Frontend environment for building JavaScipt Web-Applications
#
##### Includes the following features:

- Babel loader
- Sass Compiler (loader)
- HtmlWebpackPlugin
- Webpack Dev Server with HOT reloading
- Font - Image - Json loader
- Source Maps
- Prettier Formatter
- Preconfigured SCSS - Folder
- PurgeCSS Plugin
- SCSS Utility Class Functions

#

## How to Start 
#
```
npm init
```
#### To install all Dependencies
```
npm install
```

#### Activate Webpack watch mode
```
npm run watch 
```

#### To Build the "dist" folder with the Compiled files
```
npm run build
```
#### For deleting the "dist" folder
```
npm run clean
```



## My SCSS Folder Structure


[It's based on the 7 - 1 Pattern](https://sass-guidelin.es/#architecture)

```
scss (Main folder)
|      index.scss
|
|-------Components Folder(empty by default)
          |-buttons.scss
          |-form.scss
|
|-------basegit 
         |-resett.scss
         |-typography.scss
|
|------abstracts
        |-breakpoints.scss
        |-functions.scss
        |-mixins.scss
        |-variables.scss
|
|-------layout
         |-footer.scss
         |-grid.scss
         |-header.scss
         |-navitagtion.scss
        
```