# macOS theme for Joplin

Native looking macOS theme for note taking app [Joplin](https://joplinapp.org/) v2.2.4 and above. Also works on non-macOS devices.

![macOS theme for Joplin](/images/macos-theme-for-joplin.png)

- ✨ Completely styled UI, including all controls,
- 🌜 Choose between light, dark, light with dark sidebar or auto (light/dark based on system preferences),
- 👌 Use native icons (macOS only) or Phosphor icon family,
- 👨‍🎨 Easy to customise via Joplin preferences.

## Installation

- Open Joplin preferences › 'Plugins', search for 'macOS theme' and install the theme.
- Restart Joplin. Enjoy!

## Customization

After installing you can find an extra item named 'macOS theme' in Joplin's preferences. You need to restart Joplin for the changes to apply.

**Mac users**: If you want to use the native icons, download and install SF Pro from the [Apple website here](https://developer.apple.com/fonts/),

## No icons?

If you have the 'Icon family'-setting set to 'macOS native (SF Pro)' you need to have SF Pro installed from the [Apple website](https://developer.apple.com/fonts/). Note that this only works on macOS-devices.

## Disclaimer

⚠️ Joplin uses styled-components for styling, which makes it incredibly hard to theme the app. A lot of hacky CSS workarounds and `!important`’s were used. These may cause UI issues with future Joplin releases. Since it's just CSS, your data remains safe and you can easily revert the styles.

Feel free to [create an issue](https://github.com/ajilderda/joplin-macos-native-theme/issues) or post a message [on the forum](https://discourse.joplinapp.org/t/macos-theme-for-joplin/) if you run into issues.

## Development

You can tweak the theme via Joplin's preferences. If you want to go all out follow the following steps to make your own build.

Install dependencies:

```sh
npm install
```

To build the plugin:

```sh
npm run dist
```

To update the plugin framework:

```sh
npm run update
```

To build just the CSS and watch for changes:

```sh
npm run dev
```

The generated CSS will be available at: http://localhost:8080/macos-theme-for-joplin.css.

> You may want to refresh the CSS when Joplin gets focus. To do so toggle Joplin's devtools and paste [this script](https://gist.github.com/ajilderda/05caf6385501e1b32202e0414d00ed61) in the console.
