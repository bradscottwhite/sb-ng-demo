# sb-ng-demo

### Instructions
#### SETUP NG APP
###### Create Angular app: `ng n sb-ng-demo`
###### Move into root directory: `cd sb-ng-demo`

#### INSTALL TAILWIND
###### Install Tailwind CSS: `npm i -D tailwindcss postcss autoprefixer`
###### Initialize Tailwind: `npx tailwindcss init`
###### Configure content of template paths in `tailwind.config.js`: `content: [ './src/**/*.{html,ts}' ]`
###### Add Tailwind directives to global styles in `src/styles.css`: `@tailwind base; @tailwind components; @tailwind utilities;`

###### Install Storybook.js: `npx sb init`
###### Initialize Storybook: `npm run storybook`
###### ...

##### GENERATE COMPONENTS
###### Generate button component: `ng g c btn`
###### ...

##### RUN APP
###### Serve app: `ng run start`
