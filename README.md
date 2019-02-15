# TagTO Website

### https://tagto.org

---

A responsive site built with [React Static](https://github.com/nozzle/react-static) v5.9.12.

### Install
- Install react static with `yarn global add react-static@5.9.12`
- Clone the project `git clone https://github.com/tagto/tagto.org.git`
- Install library dependencies with `yarn install`. If this does not work, then you you can try generating a template with `react-static create` styled components. Then copy over `node_modules` from this folder. Also copy over the lock, lint babel files etc..


### Develop
```
react-static start
```

### Build
```
react-static build
```

### Updating site
- Launch development server with `react-static start`
- Build for production with `react-static build`
- Make copy of dist e.g. `cp dist dist-2018-12-01`
- Delete current bucket (optional) `aws s3 rm s3://tagto.org --recursive --profile tagto.org`
- Update bucket (run from inside `dist`) `aws s3 cp . s3://tagto.org/ --recursive --exclude ".*" --profile tagto.org`
- Update cloudfront cache `aws cloudfront create-invalidation --distribution-id ${CLOUDFRONT_DIST_ID_TAGTO} --paths '/*'`

