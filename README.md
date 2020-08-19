# SashiDo & NextJS Boilerplate

![](https://media-blog.sashido.io/content/images/2020/08/sashido-love-nextjs.png)

## A flying start for your Next.js SashiDo project!

You're a React and [Next.js](https://nextjs.org/) fan. Awesome, so are we! Thus the idea to offer a starter kit for Next.js lovers came naturally. 

## The Basics

 - **What is SashiDo.io** is a fully-managed serverless API development platform with scalable NodeJS Rest & GraphQL API, easy to use CMS, CRUD, Object and File storage, built-in CDN, User Management, Relations, Push Notifications, System Emails, Cloud functions & Jobs, Real-time messages, and more out of the box.
 
 - **What is Next.js** is a great JavaScript framework that lets you easily build a complete web application with React and server-side rendering.

## How this works

The project is developed as a Next.js boilerplate for SashiDo applications. The platform has allows implementation of server-side logic and has a built-in Express, which is directly mounted to the server. We use Express for handling the Next.js and you may find the respective logic is in `cloud/app.js` [here](https://github.com/SashiDo/sashido-nextjs-boilerplate/blob/master/cloud/app.js#L18).

## Install 

#### Clone the repo:
```
git clone https://github.com/SashiDo/sashido-nextjs-boilerplate.git
cd sashido-nextjs-boilerplate
```
#### Run Locally

To make sure the project will start on the fly locally, keep your local environment as close to the production one. At the `/health` endpoint of your app's API URL Address you can verify the current Parse Server and Node.JS version of your project. 

1. **Install Dependencies**

All dependencies are present to the package.json, just run:

```npm install```

2. **Customize Local App**

To customize you local app settings, you can use ENV Variables:

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

Don't be shy, share your awesome ideas in a pull request. ;)

## License

