 ![spiin.me logo](https://github.com/odacavo/spiin.me/blob/main/public/favicon-32x32.png?raw=true)

# spiin.me

Can’t decide where to eat? What movie to watch? Or just need a non-sentient being to pick an option at random? Provide [*spiin.me*](https://spiin.me) with the options and let the magic happen!

 ![spiin.me homepage](https://i.imgur.com/WP1Eo5X.jpg)

 *spiin.me* works by using a [URL parameter query string](https://en.wikipedia.org/wiki/Query_string) to fetch options and provide a random result, or, decision. It essentially acts as a very simple but accessible UI for making random selections  - including dice rolls, coinflips, movie/show choices, etc.

 ## cURL
 This app also provides a command-line cURL-able interface for use. Simply by using the `curl` command, inputting a comma-separated query string will return the same result from the terminal. See the follwing example below:

 ```bash
curl spiin.me/the office,seinfeld,mad men,friends
the office
 ```

## Contributing
Pull requests are welcome if you see a way to make this app more efficient and lightweight. For major changes or feature additions, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)