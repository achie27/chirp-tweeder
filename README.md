This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Inspiration
As a freelance SWE who works remotely from a tier 3 Indian city, Twitter is my primary source of learning about new developments in the industry, or the world in general. I usually get this new influx of information from following domain experts I respect for their work. Furthermore, insights from these domain experts help me with ideas for problems I'm facing at my job, planning the next skill I should pick up on, and servicing my clients' business needs better. 

Now, these experts are humans too and have a variety of takes on a variety of topics. Sometimes, however, I realise that I don't see eye-to-eye to some of their takes and trying to engage in a meaningful conversation isn't possible at all or results in a net-negative Twitter experience for me. Most recently, I was disappointed seeing an infosec professional I follow retweet a politician infamous for spreading communal hatred in India.

Then again, that's just me and nothing should stop someone on Twitter for expressing themselves - that's what Twitter is all about and why I love it. But, as a Twitter user myself, I will have relatively more net-positive experiences if there was a way for me to filter out tweets from my timeline on certain topics by certain people I follow where they aren't experts and where we don't agree on - and so, I built Tweeder! 

## What it does
### Tweet filtration
Tweeder has a Twitter-like timeline UX displaying latest tweets from the accounts you follow. Right above the timeline, is a button that lets you create filters. A filter weeds out tweets from your timeline that are about certain topics and authored by certain accounts you follow. You can, for example, create a filter to weed out political tweets from a sportsperson you follow. Post creation, you will see the filter name show up in the left-side menu. Selecting the filter will apply it and purge the Tweeder timeline of tweets that match the filter! There's also a very handy specification that pops up on the right-side after selecting a filter.

### Infinite scrolling
Besides the core filtration feature, the Tweeder timeline is infinitely scrollable, allowing you to view tweets as old as you, and, well, the Twitter API, like. 

### Loading new tweets
There's also a refresh button on top of the timeline which loads newer tweets, if available, whenever you want!

## How we built it
Tweeder uses the Twitter v2 [Timelines API](https://developer.twitter.com/en/docs/twitter-api/tweets/timelines), [Follows API](https://developer.twitter.com/en/docs/twitter-api/users/follows/i), and [context annotations](https://developer.twitter.com/en/docs/twitter-api/annotations/overview). Each filter created by a user is a combination of usernames, of some of the accounts they follow, and domain labels of context annotations. Post fetching a tweets batch from the [reverse chronological timeline endpoint](https://developer.twitter.com/en/docs/twitter-api/tweets/timelines/api-reference/get-users-id-reverse-chronological), tweets with their author and any of the context annotations matching the user selected filter are not displayed on Tweeder. Nevertheless, all the tweets, whether displayed or not, are kept in the app memory as users can create multiple and entirely different filters.

Even though Tweeder keeps all the, potentially thousands, fetched tweets in memory, it's able to stay performant by using virtual scrolling on the timeline with [`tanstack-virtual`](https://tanstack.com/virtual/v3). And thanks to [`react-tweet`](https://github.com/mannynotfound/react-tweet), timeline tweet components look great; almost reminiscent of early-2019 Twitter. 

## Challenges we ran into
### CSS
Enough said.

### Infinite virtual scrolling with dynamic components
Virtual scrolling works by knowing sizes, heights in this case, of sibling components. As such, it was difficult to get it right for the timeline as each tweet component has a dynamic height based on its text, attached media, whether it's a retweet etc. To accommodate dynamic heights, I eventually wrote a bounding-box measuring function and forked over `react-tweet` to make some internal style changes myself.

### The Tweet component 
As Tweeder's UX is largely the timeline, it was important for me to make the tweets look and feel as good as or atleast close to how they do on Twitter. Initially, I planned to use Tweet embeds, as recommended by Twitter, but they turned out to be very slow at rendering. I then looked into other open-source Tweet components out there including [`react-static-tweets`](https://github.com/transitive-bullshit/react-static-tweets), [`tweet-to-html`](https://github.com/blessanm86/tweet-to-html), [`react-tweet-card`](https://github.com/zorapeteri/react-tweet-card), and eventually `react-tweet` - choosing it because how feature rich (in terms of handling retweets, quote tweets, and media) it was for a standalone component only requiring tweet data. The rest either required extra JS/CSS or made API calls during runtime. That said, `react-tweet` came with its own set of challenges since it's not in active development - the major ones being incompatibility with Twitter API v2 and React 18. That's when I had enough and decided to build my own tweet component by taking inspiration from `react-tweet`. 

## Accomplishments that we're proud of
- I'm proud I was able to build something I want to use myself.
- I'm a backend-leaning SWE and hadn't worked on this much front-end in years. I'm glad I was able to design, develop, test, and deploy the web app before the deadline without many hiccups.

## What we learned
This entire hackathon has been a great learning experience; specifically
- The Twitter API and how powerful it is. I am looking forward to using filtered streams now with context annotations.
- The concepts behind virtual scrolling, hydration, SSG, and ISR
- React/Next project structure, tooling, and deployments

## What's next for Tweeder
- [Context annotation entities](https://github.com/twitterdev/twitter-context-annotations) support for more focused filters
- Better mobile device/small screen support
- Auto-expiring filters when you just want to get through a fad
- Filter import/export to sync between multiple devices because I have no plans to save any user data server-side
- Support for viewing threads of reply tweets
- Integrating Twitter Compliance API to only display compliant tweets
- Various minor/QoL optimizations (available as [issues](https://github.com/achie27/chirp-tweeder/issues))