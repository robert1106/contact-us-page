# Test for "Mbunity", "Contact Us" page

The application is deployed on
the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme),
[go here](https://contact-us-page-zeta.vercel.app/contact)

## Quick start

### Runs the app in the development mode.

1. Use `node` version `16.17.0 or higher`

2. Install packages with `yarn`

3. Run `yarn dev`

4. Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### Runs the app in the production mode.

1. Use `node` version `16.17.0 or higher`

2. Install packages with `yarn`

3. Run `yarn build`

4. Run `yarn start`

5. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Technologies Used

| Name              | Tech                                                               |
|-------------------|--------------------------------------------------------------------|
| Framework / Lib   | [Next.js (React)](https://nextjs.org/)                             |
| Forms             | [React Hook Form](https://react-hook-form.com/)                    |
| Schema validation | [Zod](https://zod.dev/)                                            |
| UI                | [Material UI](https://mui.com/)                                    |
| Responsive        | [Material Responsive UI](https://mui.com/guides/responsive-ui/)    |
| CSS               | [Material Styles](https://mui.com/customization/how-to-customize/) |

## Project structure

```code
├─ src/
│  ├─ app/                      # Ready pages
|  |
│  ├─ assets/                   # Assets
│  │  ├─ icons/                 # Icons
│  │  └─ images/                # Raster images
│  │
│  ├─ components/               # Shared / Reusable components
│  │  ├─ forms/                 # Forms
│  │  ├─ layouts/               # Page layouts
│  │  ├─ fields/                # Fields
│  │  └─ …                      # Other entities
|  |
│  ├─ containers/               # Containers (HOC or Providers)
|  |
│  ├─ data/                     # Any static data or mock data
|  |
│  ├─ hooks/                    # Reusable react hooks
|  |
│  ├─ theme/                    # Theme
|  |
│  ├─ types/                    # Common TS types
│  │  └─ models/                # Entity models
|  |     └─ Entity/
|  |        ├─ Entity.model.d.ts
|  |        └─ Entity.interfaces.d.ts
│  │
│  ├─ utils/                    # Utils
│  │  ├─ constants/             # Сonstants are divided into files
│  |  ├─ helpers/               # Helper functions
│  |  └─ …                      # Other utils
|  |
│  ├─ validation/               # Validation
│  │  ├─ schemas/               # Validation schemes
│  |
|  └─ views/                    # Ready views (Page Templates)
|
├─ .eslintrc.json               # Linting preferences for JavasScript
├─ .gitignore                   # Files and folders not tracked by Git
├─ package.json                 # Project manifest
└─ README.md                    # README file
```
