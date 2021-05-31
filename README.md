# Multisite Management Demo using Contentful + Stackbit

Follow the written instructions [here](https://docs.google.com/document/d/1OHkp995puZThdJi_rLUILOpbzq0NMwE-zY6IPbD2oJA) or video tutorial here to demo how multisite management works with Contentful and Stackbit.


## 🏎 Get Started 
Click the button below to create your first site in the demo.

<p align="center">
  <a href="https://app.stackbit.com/create?theme=https://github.com/rylandstackbit/multisite-management-demo-contentful-stackbit&utm_source=contentful&utm_medium=referral&utm_campaign=multisite-management-demo"><img alt="Create with Stackbit" src="https://assets.stackbit.com/badge/create-with-stackbit.svg"/></a>
</p>


## 🕴 Behind the Scenes
This is a starter site is built with [Next.js](https://nextjs.org/), [Contentful](https://www.contentful.com/) and [Kometa UI Kit's
](https://kitwind.io/products/kometa) free [Tailwind](https://tailwindcss.com/) components.

To [create a site](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/tailwind-nextjs-contentful&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes) from this starter using Stackbit you'll need to have a GitHub and a Contentful account and connect them with Stackbit. 

Stackbit will run the following steps for you:

1. Create a new GitHub repository with the contents of this repository.
2. Create a new [Contentful](https://www.contentful.com) project and provision it with the initial contents stored in [export.json](contentful-export/export.json) file.
3. Create a new [Netlify](https://www.netlify.com) site connected to the GitHub repo
4. Deploy the Netlify site.
5. Create a Stackbit project that will allow you to visually edit your website.

Additionally, Stackbit will connect all three services together by:

1. Creating a "commit" webhook in GitHub repository that will trigger Netlify deployment as soon as new commit is pushed to GitHub.
2. Creating a "publish" webhook in Contentful that will trigger Netlify deployment as soon as content is published in Contentful.

## 📚 Learn More

To learn more about Contentful, take a look at the following resources:

- [Contentful Docs](https://www.contentful.com/developers/docs/)
- [Importing and exporting content with the Contentful CLI](https://www.contentful.com/developers/docs/tutorials/cli/import-and-export/)

To learn more about Stackbit, take a look at the following resources:

- [Stackbit Documentation](https://www.stackbit.com/docs/)
- Configure your site using [stackbit.yaml](https://www.stackbit.com/docs/stackbit-yaml/)

To learn more about Sourcebit, take a look at the following resources:

- [Sourcebit](https://github.com/stackbit/sourcebit) - learn how to use Sourcebit with different Headless-CMS and Static Site Generators.
- [sourcebit-source-contentful](https://github.com/stackbit/sourcebit-source-contentful) - learn more about Sourcebit Contentful Plugin.
- [sourcebit-target-next](https://github.com/stackbit/sourcebit-target-next) - learn more about Sourcebit Next.js Plugin.

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

To learn more about Netlify, take a look at the following resources:

- [Netlify Docs](https://docs.netlify.com/)
