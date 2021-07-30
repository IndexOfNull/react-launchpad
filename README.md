# React Launchpad

Here lives my personal React launchpad. I made this out of pure frustration with getting boilerplate setup for React projects: I just want to code! Furthermore, solutions like create-react-app did not provide me with my desired level of control and ejecting produced seemingly verbose configs and scripts.

As a result, this repository comes prepackaged and preconfigured with the following:

- React (with react-dom)
- TypeScript
- TailwindCSS
- styled-components
- twin.macro (configured for use with TypeScript and styled-components)
- Prettier
- Webpack (preconfigured with dev server and HMR)
  - Babel and babel-loader for transpilation and macros.
  - PostCSS, css-loader, and postcss-loader for compiling basic CSS.

In addition, as many configuration options have been commented with what they do and their reasoning. For example, the hope is that swapping styled-components for emotion should be no more difficult than following the docs for emotion and twin.macro.

# Explanations

Explanations for notable inclusions.

## tsconfig.json

```json
    ...
    "noEmit": false, //babel will do the emitting
    "jsx": "react", //tell it we're using react
    "moduleResolution": "node",
    "esModuleInterop": true, //apparently helps with babel (though it wasn't required for me)
    ...
```

## src/twin.d.ts

This is included so that `css` and `tw` props can be used on React components. If VSCode or TypeScript gives you crap about it, try adding the file to the `rootTypes` section of the tsconfig.json file.

## src/style.css

```css
/* this is required for tailwind to work */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

# Staying with the times

The JavaScript community/ecosystem moves at break-neck speed, so there's no guarantee these settings will remain good or even work (funny enough, microsoft had a typescript starter repo). I'll try to update this as I learn more about setting up React toolchains, but I make no guarantees. As always, you should carefully vet your code and configs.
