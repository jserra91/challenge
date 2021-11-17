# Set up

## Vue CLI

**Project setup**
```
yarn install
```

**Compiles and hot-reloads for development**
```
yarn serve
```

**Run Storybook**
```
yarn storybook
```

## Project structure (updates)
- .storybook: storybook configuration
- public: All static imaes
- src/components/*: Contains all compoments. I'm using Atomic Design System pattern.

### Vue Router
I have implemented vue routing but it is static. To make it really work we should set the menu to root level and the router-view to show the page (upcoming without the menu, topbar, etc.).

## Styles
I'm using tailwindcss library. Honestly is my first time that I'm using this library. At the same time I'm using BEM pattern.

## Storybook
I have configured Storybook (and the Babel) so that all components can be displayed. They are showcase, they do not have information on how to use the component.

## Axios (http request)
I have not implemented the Axios library (no time... T.T) but all the data is mocketed but I have private projects on how to use this library.