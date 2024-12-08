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

# create PR (pull request)/MR (merge request)
- click Pull Request -> click New Pull Request
```


## Coding convention
### Naming convention

```bash
# camelCase
Eg: sortByTitle, product, productList ...
Used: name function, name variables, name file ...

# kebeb-case
Eg: product-list, product, product-add ...
Used: route (path name), name file

# snake_case
Eg: first_name, last_name, name ...
Used: name variables, define schema ...

# PascalCase
Eg: ProductItem, ProductForm, Product ...
Used: name react component.

# UPPERCASE
Eg: THEME, COLORS, URL ...
Used: constant variable ...

```

# Authenticate & Authorize

### Define
CRUD -> create (post), read (get), update (patch/post), delete (delete)
FE
HR dashboard ()
role
- member: read/view (view show data)
- manager: read/view, update, create
- admin: CRUD

// member A -> registered HR system -> login HR system -> no access permission

BE:
- read list: GET /products
- read one: GET /product/1
- update product: POST /product/1 
- delete product: DELETE /product/1


### Flow authenticate

Login
option 1:user A -> submit login -> call api BE -> BE return access_token -> go to pages
option 2:user A -> submit login -> call api BE -> BE return access_token -> FE call api get user from access_token -> go to pages
