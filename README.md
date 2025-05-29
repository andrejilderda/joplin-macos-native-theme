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

Make sure you set ‘Appearance › Theme’ to either ‘Light’ or ‘Dark’. If you experience a flash when switching notebooks sync the Light/Dark-settings under ‘Appearance › Theme’ with the value selected under ‘macOS theme › Appearance’. For more customisation options see below.

## Customisation

After installing you can find an extra item named 'macOS theme' in Joplin's preferences. You need to restart Joplin for the changes to apply.

**Mac users**: If you want to use the native icons, download and install SF Pro from the [Apple website here](https://developer.apple.com/fonts/).

## No icons?

If you have the 'Icon family'-setting set to 'macOS native (SF Pro)' you need to have SF Pro installed from the [Apple website](https://developer.apple.com/fonts/). Note that this only works on macOS-devices.

## Disclaimer

⚠️ Joplin uses styled-components for styling, which makes it incredibly hard to theme the app. A lot of hacky CSS workarounds and `!important`’s were used. These may cause UI issues with future Joplin releases. Since it's just CSS, your data remains safe and you can easily revert the styles.

Feel free to [create an issue](https://github.com/ajilderda/joplin-macos-native-theme/issues) or post a message [on the forum](https://discourse.joplinapp.org/t/plugin-macos-theme-for-joplin) if you run into issues.

## Help, I get a blank screen after installing the plugin.

If you're experiencing a blank screen after installing the plugin, this is likely due to an issue with emoji handling. Here's how to fix it:

1. First, locate your Joplin config directory:

   - macOS: `~/.config/joplin-desktop`
   - Windows: `%APPDATA%\Joplin`
   - Linux: `~/.config/Joplin`

2. Navigate to the `plugins` folder and delete the `.jpl` file for the macOS theme plugin.
3. Restart Joplin.

### Prevention

To prevent this issue from occurring:

- Instead of using Joplin's "Choose emoji..." dialog, add emojis directly in the notebook title text box (see [this discussion](https://github.com/andrejilderda/joplin-macos-native-theme/issues/96#issuecomment-1553517708) for a visual reference).
- You can now reinstall the plugin.

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

To build the CSS and watch for changes:

```sh
npm run dev
```

The generated CSS will be available at: http://localhost:8080/macos-theme-for-joplin.css

## Contributing

Contributions (especially fixes) are very welcome!

### Development Workflow

Having to restart Joplin on every change is a bit of a pain. To speed things up and shorten the feedback loop:

1. Run `npm run dev`. This will watch for changes to the .scss files and rebuild the CSS.
2. Toggle Joplin's development tools (**Help › Toggle Development Tools**)
3. Choose one of the two refresh methods from [this gist](https://gist.github.com/andrejilderda/f6673f1b1a986b2dc0cd01607acbff26).
4. Paste and run the script in the dev tools console to refresh the CSS automatically.

This works well most of the time, but do note that in some cases the changed styles interfere with the styles from the installed plugin. To check if that's the case you can ensure a clean environment by:

1. Uninstalling the macOS theme plugin if it's already installed.
2. Running a build: `npm run build`
3. In Joplin, go to **Plugins › Show Advanced Settings**.
4. Under **Development plugins**, paste the path to your `dist` folder.
5. Restart Joplin to load your local build of the plugin.
