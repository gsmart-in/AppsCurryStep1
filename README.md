# AppsCurryStep1
This is an example project where we use ES6 features in [Google Apps Script](https://en.wikipedia.org/wiki/Google_Apps_Script)

This project uses webpack and babel to bundle ES6 code and then use the [clasp command line tool](https://github.com/google/clasp) to upload the project to your Google Account.

See the [full article here](http://blog.gsmart.in/es6-and-npm-modules-in-google-apps-script/)

## Usage

Install clasp command line tool 

```bash
npm install @google/clasp -g
```

Then login to your Google account

```bash
clasp login
```

Open terminal and clone this project.

Then run this to create an Apps Script project 

```bash
clasp create --type standalone --title "Apps Script with Webpack and babel"
```

Then run

```bash
npm install
npm run deploy
```

## Approach

Google Apps Script expects to have some global functions in your code. For a standalone web app project, it is the doGet()
function. you can see this function in server/api.js

In server/lib.js, we have the advanced ES6 code. we use babel and webpack to cross compile lib.js and place it in the distribution. (see the webpack configutaion file) 
We upload only the compiled bundle and api.js (api.js is uploaded unmodified)

## Next steps

See [AppsCurry Step 2](https://github.com/gsmart-in/AppsCurryStep2) where we add npm modules (momentjs and lodash) to the project. 

See the [complete article series here](http://blog.gsmart.in/es6-and-npm-modules-in-google-apps-script/).

