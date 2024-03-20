# Electron Boilerplate
This projects holds some handful packages that speeds up developing and publishing ElectronJS Projects.

## Features
- `nodemon` to live reloading including electron files.

- `eslint` with `@electron-internal/eslint-config` preset.

- `electron-reload` to live reloading support.

- `electron-builder` with setup `build` and `publish` options.
  - Will need your Github API Key Set under `GH_TOKEN` variable

## `package.json` Scripts
 - `elec`: executes the program with internal live reload.

 - `nodemon`: executes the program with files reloading.

 - `build`: build the app to current OS to `dist` folder.

 - `publish`: same as `build` but uses repo location to publish a new draft release.