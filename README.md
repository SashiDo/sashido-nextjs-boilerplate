# SashiDo & NextJS Boilerplate

![](https://media-blog.sashido.io/content/images/2020/08/sashido-love-nextjs.png)

## A flying start for your Next.js SashiDo project!

You're a React and [Next.js](https://nextjs.org/) fan. Awesome, so are we! So the idea to ease the process and offer a starter kit for Next.js lovers came naturally. 

## The Basics

 - **What is SashiDo.io** is a fully-managed serverless API development platform with scalable NodeJS Rest & GraphQL API, easy to use CMS, CRUD, Object and File storage, built-in CDN, User Management, Relations, Push Notifications, System Emails, Cloud functions & Jobs, Real-time messages, and more out of the box.
 
 - **What is Next.js** is a great JavaScript framework that lets you easily build a complete web application with React and server-side rendering.

## How this works

The project is developed to work on SashiDo, which offers developers to implement server-side logic with Simple and Advanced Cloud Code. The platform also has a built-in Express logic which is mounted on the server. We use Express for handling the Next.js and the logic is contained in `cloud/app.js` here.

## Install 

#### Clone the repo:
```
git clone https://github.com/SashiDo/sashido-nextjs-boilerplate.git
cd sashido-nextjs-boilerplate
```
#### Run Locally


1. **Install Dependencies**

All dependencies are present to the package.json, just run:

```npm install```

2. **Customize Local App**

To customize you local app settings use ENV Variables:

- `DATABASE_URI` - Default: 'mongodb://localhost:27017/dev'
- `APP_ID` Default: 'myAppId'
- `MASTER_KEY` : Default: ''
- `SERVER_URL` : Default: http://localhost:1337/1'
- `PORT` : Default: 1337

3. **Start the project**

```npm run dev```

4. **Compiled successfully** If everything is okay you should see an output similar to this one:
```
Running on http://localhost:1337
info: Parse LiveQuery Server starts running
Defining routes from exportPathMap
[ ready ] compiled successfully

```
#### Add your Next.JS code

Go wild and unleash your Next.js creativity into the `./src` folder. 

#### Deploy on SashiDo

Add your new SashiDo app as a remote branch and push changes.

```
git remote add production git@github.com:parsegroundapps/<your-pg-app-your-app-repo>.git
git push -f production master
```

## Contribution


## License

