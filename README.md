# Nightwatch Sample Project

## Project Setup
1. Install [pnpm](https://pnpm.io/)
```bash
npm i -g pnpm
```

2. Install Dependencise
```bash
pnpm i 
```
```bash
safaridriver --enable
```


## Running Tests
All test commands are defined in the [package.json](/package.json) inside the "scripts" property.

To kick off any test, just prepend the command with `pnpm` and the respective test will run.

Examples:

To run tests on local chrome:
```bash
pnpm test:chrome
```

To run tests on selenium chrome:
```bash
pnpm test:selenium:chrome
```

To run tests on browserstack chrome:
```bash
pnpm test:browserstack:chrome
```