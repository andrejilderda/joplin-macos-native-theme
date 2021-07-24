# macOS theme for Joplin

Native looking macOS theme for note taking app [Joplin](https://joplinapp.org/) v2.0.2 and above. Also works on non-mac devices.

![macOS theme for Joplin](/images/macos-theme-for-joplin.png)

- ✨ Completely styled UI, including all controls
- 🌜 Auto light/dark mode based on system theme
- 👌 Native icons for macOS users, alternative icons for non-mac users
- 👨‍🎨 Easy to customise with CSS custom properties

## Installation

- Download the latest .css from [releases](https://github.com/ajilderda/joplin-macos-native-theme/releases) and copy the CSS to the clipboard,
- Open Joplin's preferences (<kbd>cmd</kbd> + <kbd>,</kbd>) and go to the 'Appearance'-tab,
- Click on 'Show Advanced Settings' › 'Custom stylesheet for rendered Markdown'. A file named `userstyle.css` should open in a texteditor. Paste in the CSS. Do the same for 'Custom stylesheet for Joplin-wide app styles' (filename `userchrome.css`),
- **Mac users**: Download and install SF Pro from the [Apple website here](https://developer.apple.com/fonts/),
- **Non-mac users**: Download and install the .ttf from the [Phosphor icon family](https://phosphoricons.com/assets/phosphor-icons.zip) ([direct link to .ttf](https://github.com/phosphor-icons/phosphor-icons/raw/master/src/font/phosphor.ttf)). Also make sure to uncomment all the custom properties prefixed with `--u-icon-` & `--u-font-family-icons`.
- Restart Joplin. Enjoy!

## Customizing

At the top of the CSS there are a few custom properties prefixed with `--u-` you can use to easily customize the theme. Uncomment and tweak to your liking.

## No icons?

For the icons to work you need to install the correct icon font. macOS can download and install SF Pro from the [Apple website](https://developer.apple.com/fonts/). Since Apple prohibits SF Pro to be redistributed non-mac users can use the Phosphor icon family as a replacement. How to? See the installation instructions above.

## Disclaimer

⚠️ Joplin uses styled-components for styling, which makes it incredibly hard to theme the app. A lot of hacky CSS workarounds and `!important`’s were used. These may cause UI issues with future Joplin releases. Since it's just CSS, your data remains safe and you can easily revert the styles.

Feel free to [create an issue](https://github.com/ajilderda/joplin-macos-native-theme/issues) or post a message [on the forum](https://discourse.joplinapp.org/t/macos-theme-for-joplin/) if you run into issues.

## Development

The easiest way to tweak the theme is to customize the custom properties in the built CSS. If you want to go all out follow the following steps to make your own build.

Install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build
```

To watch for file changes:

```sh
npm run start
```

Open a second Terminal window for if you want to inject the CSS dynamically while debugging. The generated CSS will be available at: http://localhost:8080/macos-theme-for-joplin.css:

```sh
npm run serve
```

> You may want to refresh the CSS when Joplin gets focus. To do so toggle Joplin's devtools and paste [this script](https://gist.github.com/ajilderda/05caf6385501e1b32202e0414d00ed61) in the console.
