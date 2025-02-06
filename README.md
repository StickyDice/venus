# This is a Flex Living project repo

## Technologies
- language: [Typescript](about:blank)
- framework: [Next.js](https://nextjs.org/)
- linters: [ESlint](https://eslint.org/) + [prettier](about:blank)
- component library: [shadcn](https://ui.shadcn.com/)
- styles: [tailwind](https://tailwindcss.com/) + css.modules
- package manager: [pnpm](https://pnpm.io/)

## Getting started
- Run dev mode ```pnpm run dev```
- Run linter ```pnpm run lint```
- Run tests ```pnpm run test [filename]```

## Naming convention
1. Folders and files with PascalCase
2. Variables and Functions camelCase
3. Classes with PascalCase

## Startup with Docker
```sh 
$ docker build . -t venus-frontend-app:1.0
$ docker run -d -p 80:80 -p 443:443 venus-frontend-app:1.0 
```
