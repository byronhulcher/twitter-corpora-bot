Create a generative Twitter bot using [Corpora](https://github.com/dariusk/corpora/). 

Corpora has lots of different collections of data, and is a great place to source generative content. For instance, here's a [giant list of dogs](https://github.com/dariusk/corpora/blob/master/data/animals/dogs.json). Some of this bot's source is distantly related to [v21/tracerybot](http://github.com/v21/tracerybot). 


How to build your own bot:
- Click the settings above and "Remix" this project!
- Check out what's [inside of Corpora](https://github.com/dariusk/corpora/blob/master/data/)
- Modify `corpora.js` to pull out the data you want from Corpora, and build Twitter statuses with it. Check out the [Corpora API documentation](https://www.npmjs.com/package/corpora-project).
- Get your [Twitter OAuth tokens](http://botwiki.org/tutorials/how-to-create-a-twitter-app ) and add them to `.env` 
- Modify how frequently it will be allowed to post by settings POST_DELAY_IN_MINUTES in `.env`
- Send a GET or POST request using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en) to `{Glitch Project URL}/tweet` (for instance: `https://twitter-corpora-bot.glitch.me/tweet` for the `twitter-corpora-bot` project)
- Use a cron or uptime service (like [Uptime Robot](http://uptimerobot.com)) to hit the above URL to trigger the bot regularly

Things should try:
- Use a whole different data set from Corpora in `corpora.js`. Did you know there's a [list of Pokemon](https://github.com/dariusk/corpora/blob/master/data/games/pokemon.json)?
- Instead of using Corpora, find a different way to generate text and use that in `generateStatus()` in `bot.js`
- Skydiving! You've already taken one plunge today.

🤖 [Byron Hulcher](http://twitter.com/hypirlink)