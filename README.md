# sb-ng-demo

### Instructions

###### SETUP NG APP
- Create Angular app:
`ng n sb-ng-demo`
- Move into root directory:
`cd sb-ng-demo`

###### INSTALL TAILWIND
- Install Tailwind CSS:
`npm i -D tailwindcss postcss autoprefixer`
- Initialize Tailwind:
`npx tailwindcss init`
- Configure content of template paths in `tailwind.config.js`:
`content: [ './src/**/*.{html,ts}' ]`
- Add Tailwind directives to global styles in `src/styles.css`:
`@tailwind base;
@tailwind components;
@tailwind utilities;`

###### SETUP STORYBOOK
- Install Storybook.js:
`npx sb init`
- Initialize Storybook:
`npm run storybook`

###### CREATE COMPONENT
- Generate button component:
`ng g c btn`
- Add color param to button in `src/app/btn/btn.component.ts`:
`import { Component, Input } from '@angular/core'; // Import input
decorator

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css']
})
export class BtnComponent {

  // Add input decorator
  @Input()
  color?: string; // Color param

}`
- Add a simple button template in `src/app/btn/btn.component.html`:
```<button
    class='text-lg rounded-xl px-4 py-2 mx-6 my-4 text-white shadow-xl border-slate-400/50 border-2'
    [ngClass]="color === 'primary' ? 'bg-blue-700 hover:bg-blue-800' : 'bg-slate-500 hover:bg-slate-600'"
>
  <ng-content></ng-content>
</button>```

###### CREATE STORY FOR COMPONENT

###### RUN APP
- Serve app:
`ng run start`
