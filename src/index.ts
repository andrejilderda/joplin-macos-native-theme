import joplin from "api";
import { SettingItemType } from "api/types";
import { generateUserCSS } from "./generateUserCSS";

export type AppearanceSetting =
  | "auto"
  | "light"
  | "light-with-dark-sidebar"
  | "dark";

export type ThemeSettings = {
  baseFontSize: number;
  iconFamily: "phosphor" | "macos";
  appearance: AppearanceSetting;
  accentColor:
    | "blue"
    | "graphite"
    | "green"
    | "indigo"
    | "orange"
    | "pink"
    | "purple"
    | "red"
    | "teal"
    | "yellow";
  hideSyncStatus: boolean;
  notelistSeparators: "dividers" | "zebraStripes" | "none";
  editorParagraphSpacing: number;
  editorAlignment: "left" | "center" | "right";
};

joplin.plugins.register({
  onStart: async function () {
    const installDir = await joplin.plugins.installationDir();
    const cssFilePath = installDir + "/dist/macos-theme-for-joplin.css";
    await (joplin as any).window.loadChromeCssFile(cssFilePath);
    await (joplin as any).window.loadNoteCssFile(cssFilePath);

    await joplin.settings.registerSection("macOSThemeSection", {
      label: "macOS theme",
      iconName: "fas fa-palette",
      description: `🔄 Please note that you have to restart Joplin for the changes to take effect.

			Feel free to show some ⭐-love, create an issue (https://github.com/ajilderda/joplin-macos-native-theme) or post a message on the forum (https://discourse.joplinapp.org/t/macos-theme-for-joplin/) if you run into issues.`,
    });

    await joplin.settings.registerSettings({
      baseFontSize: {
        label: "Base font size",
        value: 100,
        type: SettingItemType.Int,
        section: "macOSThemeSection",
        public: true,
      },

      iconFamily: {
        label: "Icon family",
        value: "phosphor",
        type: SettingItemType.String,
        section: "macOSThemeSection",
        isEnum: true,
        public: true,
        options: {
          phosphor: "Phosphor",
          macos: "macOS native (SF Pro)",
        },
        description:
          "Please note that native macOS icons only work on macOS devices with SF Pro installed. For more information read this plugins installation instructions.",
      },

      appearance: {
        label: "Appearance",
        value: "auto",
        type: SettingItemType.String,
        section: "macOSThemeSection",
        isEnum: true,
        public: true,
        options: {
          auto: "Auto (light/dark based on system preference)",
          light: "Light",
          "light-with-dark-sidebar": "Light with dark sidebar",
          dark: "Dark",
        },
      },

      accentColor: {
        label: "Accent color",
        value: "blue",
        type: SettingItemType.String,
        section: "macOSThemeSection",
        isEnum: true,
        public: true,
        options: {
          blue: "Blue",
          purple: "Purple",
          pink: "Pink",
          red: "Red",
          orange: "Orange",
          yellow: "Yellow",
          green: "Green",
          indigo: "Indigo",
          teal: "Teal",
          graphite: "Graphite",
        },
      },

      hideSyncStatus: {
        label: "Hide sync status",
        value: false,
        type: SettingItemType.Bool,
        section: "macOSThemeSection",
        public: true,
        description:
          "⚠️ IMPORTANT: When enabled the sync status is only shown after a timeout after hovering. Any sync errors are easily overlooked.",
      },

      notelistSeparators: {
        label: "Note list separators",
        value: "dividers",
        type: SettingItemType.String,
        section: "macOSThemeSection",
        isEnum: true,
        public: true,
        options: {
          dividers: "Dividers",
          zebraStripes: "Zebra stripes",
          none: "None",
        },
      },

      editorParagraphSpacing: {
        label: "Editor paragraph spacing",
        description: "Vertical space between paragraphs",
        value: 15,
        type: SettingItemType.Int,
        section: "macOSThemeSection",
        public: true,
      },

      editorAlignment: {
        label: "Editor alignment",
        value: "left",
        type: SettingItemType.String,
        section: "macOSThemeSection",
        isEnum: true,
        public: true,
        options: {
          left: "Left",
          center: "Center",
          right: "Right",
        },
        description: `Alignment of the editor content when a maximum width is set on the editor (under 'Appearance')`,
      },
    });

    const fs = joplin.require("fs-extra");

    const baseFontSize = await joplin.settings.value("baseFontSize");
    const iconFamily = await joplin.settings.value("iconFamily");
    const appearance = await joplin.settings.value("appearance");
    const accentColor = await joplin.settings.value("accentColor");
    const hideSyncStatus = await joplin.settings.value("hideSyncStatus");
    const notelistSeparators = await joplin.settings.value(
      "notelistSeparators"
    );
    const editorParagraphSpacing = await joplin.settings.value(
      "editorParagraphSpacing"
    );
    const editorAlignment = await joplin.settings.value("editorAlignment");

    const settings: ThemeSettings = {
      baseFontSize,
      iconFamily,
      appearance,
      accentColor,
      hideSyncStatus,
      notelistSeparators,
      editorParagraphSpacing,
      editorAlignment,
    };

    const generatedCSS = await generateUserCSS(settings);
    await fs.writeFile(installDir + "/user-settings.css", generatedCSS, "utf8");
    await (joplin as any).window.loadChromeCssFile(
      installDir + "/user-settings.css"
    );
    await (joplin as any).window.loadNoteCssFile(
      installDir + "/user-settings.css"
    );
  },
});
