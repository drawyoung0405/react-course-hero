# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## npm

packge.json
```bash

# install libs
# package-lock.json
$ npm install 

# yarn.lock
$ yarn install

# install more package (dependencies)
$ npm install {name packge} -> npm install is-odd
$ yarn add {name packge} -> yarn add is-odd


# install more package (devdependencies)
$ npm install --save-dev {name packge} -> npm install --save-dev is-odd
$ yarn add --D {name packge} -> yarn add --D is-odd
```

## git flow

### Branch
- main/master: live to PRODUCTION
- qc: for Tester
- develop: for dev

```bash
# checkout new branch from current branch
$ git checkout -b {name branch}

# switch branch
$ git checkout {name branch}
```
### Step to step to implement

```bash
# get lasted code from remote branch
$ git pull

# checkout new branch from current branch
$ git checkout -b feature/{name ticket}

# check status branch
$ git status

# add file staged changed
$ git add .

# commit code
$ git commit -m "comment"

# push code
$ git push
```

