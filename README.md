# gdsc-uic-web-backend

This repo contains some of the code needed to get data for the GDSC at UIC chapter website. This project requires Node v18 or higher. The LTS version on the [Node.js website](https://nodejs.org/en) should be fine.

## Project Setup

First, clone the repo and install the dependencies:

```bash
git clone https://github.com/gdscuic/gdsc-uic-web-backend.git
cd gdsc-uic-web-backend
npm install
```

Now you can start testing out some code. This project has nodemon setup to watch changes in `scratchpad.js`. Doing the following command will start nodemon and rerun your code when you save changes to `scratchpad.js`:

```bash
npm run dev
```

## Project Structure

Functions for each back end feature are separated into their own files in the `/functions` directory.

`scratchpad.js` is a file you can use to test out code. It's not used in the project, but it's a good place to test out code before adding it to the project.

The `index.js` file in the root directory is the entry point for the project. It contains the code that sets up an Express server and API routes the frontend can use to get data.

Currently the project is set up to use a local snapshot of our event website to test out the web scraping code. This is to prevent spamming requests to the actual site. You can grab the latest HTML by uncommenting the fetch request in `/functions/common.js`.

> [!WARNING]  
> Please do not uncomment the fetch request while running the `npm run dev` command. This will spam requests to the event website and could get you blocked from the site.
