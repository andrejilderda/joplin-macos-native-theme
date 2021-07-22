# macOS theme for Joplin

Native looking macOS theme for note taking app [Joplin](https://joplinapp.org/) v2.0.2 and above.

![macOS theme for Joplin](/images/macos-theme-for-joplin.png)

- ✨ Completely styled UI, including all controls
- 🌜 Auto light/dark mode based on system theme
- 👌 Native macOS icons
- 👨‍🎨 Easy to customise with CSS custom properties

## Installation

- Download and install SF Pro from the [Apple website here](https://developer.apple.com/fonts/),
- Download the latest zip from [releases](https://github.com/ajilderda/joplin-macos-native-theme/releases) and copy the CSS to the clipboard,
- Open Joplin's preferences (<kbd>cmd</kbd> + <kbd>,</kbd>) and go to the 'Appearance'-tab,
- Make sure Theme is set to 'Light',
- Click on 'Show Advanced Settings' › 'Custom stylesheet for rendered Markdown'. A file named `userstyle.css` should open in a texteditor. Paste in the CSS. Do the same for 'Custom stylesheet for Joplin-wide app styles' (filename `userchrome.css`),
- Restart Joplin. Enjoy!

## Customizing

At the top of the CSS there are a few custom properties prefixed with `--u-` you can use to easily customize the theme. Uncomment and tweak to your liking.

## No icons?

For the icons to work you need to install SF Pro from the [Apple website here](https://developer.apple.com/fonts/).

## Disclaimer
⚠️ Joplin uses styled-components for styling, which makes it incredibly hard to theme the app. A lot of hacky CSS workarounds and `!important`’s were used. These may cause UI issues with future Joplin releases. Since it's just CSS, your data remains safe and you can easily revert the styles.

Feel free to [create an issue](https://github.com/ajilderda/joplin-macos-native-theme/issues) or post a message [on the forum](https://discourse.joplinapp.org/t/joplin-macos-native-theme/16499) if you run into issues.

## Development

The easiest way to tweak the theme is to customize the custom properties in the built CSS. If that's not enough follow the following steps to make your own build.

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
