# TruextendExercise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.13

### About Application

The objective of this application is to search collections of albums by different artists, for example, Jack Johnson or Maoon 5.

### Features implemented

The application can:

- Search albums by an input string like the artist's name
- Sort from higher to lower (A-Z)
- Sort from lower to higher (Z-A)
- Implements pagination
- Has responsive behavior supported by bootstrap 4
- Displays or hides pagination depending on the numbers of albums
- See all albums from an artist.
- Reset pagination.
- Control of empty results and not found artist.

### API

To get more information about the iTunes Search API, you can visit:
`https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/.`

### Use notes

When using the searcher be careful with the spelling, scapes, and tildes. For example:

- Incorrect input

```bash
Maroon5, RicardoArjona, Coooldplay, or Renee
```

- Correct input

```
Maroon 5, Ricardo Arjona, Coldplay, or Renée
```

# Technical Notes and Build Process

## Install dependencies

Run `npm install` to install node modules and package to start the project.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Documentation

For more documentation about the implementation, you can visit the next google docs link:
`https://docs.google.com/document/d/10WugXC0KDqKdOxv_Jxc3UxVH3TwhOt3awNLLBNunXpg/edit?usp=sharing`
