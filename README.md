# SashiDo & NextJS Boilerplate

# ТУК ИМА IMG NEXT.JS LOGO + SASHIDO LOGO

## A flying start for your Next.Js Sashido project!

So, you're a React and Next.Js fan. Awesome, so are we! You may have already developed your Next.Js application and wondering how to mak it work with your SashiDo App. No worries, this repo aims to ease the process for you. Clone the repo, push it to your SashiDo application GitHub and add the React code. Simple as that.

## What is this

 - **SashiDo.io** is a fully-managed serverless API development platform with with scalable NodeJS Rest & GraphQL API, easy to use CMS, CRUD, Object and File storage, built-in CDN, User Management, Relations, Push Notifications, System Emails, Cloud functions & Jobs, Real-time messages, and more out of the box.
 
 - **Next.js** is a great JavaScript framework that lets you easily build a complete web application with React and server-side rendering.

## Structure

We've kept the basic Parse Specific structure, with default entry point for Cloud Code at `./cloud/main.js`.

All Next.JS code for yor app should be placed at the `./src` folder.

Additional details about how SashiDo works with Cloud Code, you may find in our [docs](https://blog.sashido.io/tag/cloud-code/).

## How this works

`cloud/app.js`contains all logic for handling the next.JS 

```
const next = require("next");
const nextJS = next({ dev });
const handle = nextJS.getRequestHandler();

nextJS
  .prepare()
  .then(() => {
    app.get(/^(?!(\/1))/, (req, res) => {
      return handle(req, res)
    });
  }).catch((ex) => {
    console.error(ex.stack);
  });
```
## Install 

#### Requirements:

 - Node.JS = 10.2.1

 - Mongo DB

#### Clone the repo:
```
git clone https://github.com/SashiDo/sashido-nextjs-boilerplate.git
cd sashido-nextjs-boilerplate
```
#### Run Locally

1. **Install Dependencies**
As this is a full-featured example, all dependencies are present to the packege.json. You only need to run:

```npm install```

2. **Start the project**

```npm run dev```

3. **Compiled successfully** If everything is okay you should see an output similar to this one:
```
Running on http://localhost:1337
info: Parse LiveQuery Server starts running
Defining routes from exportPathMap
[ ready ] compiled successfully

```
#### Add your Next.JS code

Go wild and unleash your Next.JS creativity into the `./src` folder. 

#### Deploy on SashiDo

Add your new SashiDo app as a remote branch and push changes.

```
git remote add production git@github.com:parsegroundapps/<your-pg-app-your-app-repo>.git
git push -f production master
```


## License

