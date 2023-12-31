# Nodejs-Typescript-Template
## use this as a Template repository for other Projects



>## Directory Structure
>
```pre├── **src**
├── .husky
│   │    ├── pre-commit
├── index.ts
├── jest.config.json
├── LICENSE
├── nodemon.json
├── package.json
├── package-lock.json
├── README.md
└── tsconfig.json
```


package.json
```json
{
  "name": "apollo-graphql-template",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/src/index.js",
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint . --fix --ext .ts",
    "lint-staged": "lint-staged",
    "test": "jest",
    "test:coverage": "jest --coverage",
    "build": "tsc",
    "start": "npm run build && node --require dotenv/config ./dist/src/index.js",
    "start:dev": "nodemon --require dotenv/config index.ts",
    "prepare": "husky install"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/amalu-sajeev-me/Apollo-GraphQL-Template.git"
  },
  "keywords": [
    "template"
  ],
  "author": "Amalu Sajeev",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/amalu-sajeev-me/Apollo-GraphQL-Template/issues"
  },
  "homepage": "https://github.com/amalu-sajeev-me/Apollo-GraphQL-Template#readme",
  "devDependencies": {
    "@types/jest": "^29.5.5",
    "@types/node": "^20.7.0",
    "@typescript-eslint/eslint-plugin": "^6.7.3",
    "@typescript-eslint/parser": "^6.7.3",
    "eslint": "^8.50.0",
    "husky": "^8.0.3",
    "jest": "^29.7.0",
    "lint-staged": "^14.0.1",
    "nodemon": "^3.0.1",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.2.2"
  },
  "dependencies": {
    "dotenv": "^16.3.1"
  },
  "type": "module",
  "husky": {
    "hooks": {
      "pre-commit": "npm run lint-staged"
    }
  }
}
```
