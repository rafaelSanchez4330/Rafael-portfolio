# Rafael Sánchez — Software Engineer Portfolio

A responsive personal portfolio focused on backend engineering, APIs, databases,
infrastructure, IoT and software projects. Project content is kept in typed data
files so it can be updated without changing visual components.

## Technologies

- React
- TypeScript
- Vite
- React Router
- CSS

## Development

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Project structure

```text
public/
  images/projects/   Project screenshots
  resume/            Downloadable resume
src/
  components/        Reusable UI and layout components
  data/              Portfolio content
  pages/             Route-level pages
  sections/          Homepage sections
  styles/            Global, layout and responsive CSS
  types/             Shared TypeScript interfaces
```

## Updating portfolio content

- Edit projects in `src/data/projects.ts`.
- Edit skills in `src/data/skills.ts`.
- Edit experience in `src/data/experience.ts`.
- Edit education in `src/data/education.ts`.
- Edit biography and social links in `src/data/site.ts`.

To add a project, create a new object matching the `Project` interface in
`src/types/index.ts`. Its `slug` automatically becomes the route
`/projects/:slug`.

## Adding project images

Place images inside:

```text
public/images/projects/<project-slug>/
```

Then use root-relative paths such as
`/images/projects/smart-power-strip/hardware.webp` in `src/data/projects.ts`.
Missing files display a local styled placeholder; no remote placeholder service
is used.

The Smart Power Strip gallery expects:

```text
public/images/projects/smart-power-strip/
  hardware.webp
  dashboard.webp
  wiring.webp
  demo.webp
```

## Adding the resume

Place the PDF at:

```text
public/resume/resume.pdf
```

The Resume button is already configured for `/resume/resume.pdf`.

## Contact placeholders

Replace `TODO_EMAIL` and `TODO_LINKEDIN_URL` in `src/data/site.ts`. Until then,
the corresponding buttons are visibly marked as `TODO` and are not clickable.

## Deployment

The project is ready for Vercel. `vercel.json` rewrites application routes to
`index.html`, allowing React Router routes such as
`/projects/smart-power-strip` to work when opened directly or refreshed.

For another static host, configure the same single-page application fallback to
`index.html`.
