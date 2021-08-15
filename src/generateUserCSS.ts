import joplin from 'api';
import { AppearanceSetting, ThemeSettings } from 'src';
import { hexToHSL } from './utils/color';

const accentColorMap = {
	light: {
		blue: '#007AFF',
		graphite: '#8E8E93',
		green: '#28CC41',
		indigo: '#5856D6',
		orange: '#FF9500',
		pink: '#FF2D55',
		purple: '#AF52DE',
		red: '#FF3B30',
		teal: '#55BEF0',
		yellow: '#FFCC00',
	},
	dark: {
		blue: '#0A84FF',
		graphite: '#98989D',
		green: '#32D74B',
		indigo: '#5E5CE6',
		orange: '#FF9F0A',
		pink: '#FF375F',
		purple: '#BF5AF2',
		red: '#FF453A',
		teal: '#5AC8F5',
		yellow: '#FFD60A',
	},
};

// Dynamic system colors
const lightTheme = `
  /* Labels */
  --g-labelColor: rgba(0, 0, 0, 0.847);
  --g-secondaryLabelColor: rgba(0, 0, 0, 0.498);
  --g-tertiaryLabelColor: rgba(0, 0, 0, 0.259);
  --g-quaternaryLabelColor: rgba(0, 0, 0, 0.098);

  /* Text */
  --g-textColor: rgba(0, 0, 0, 1);
  --g-placeholderTextColor: rgba(0, 0, 0, 0.247);
  --g-selectedTextColor: rgba(0, 0, 0, 1);
  --g-textBackgroundColor: rgba(255, 255, 255, 1);
  --g-selectedTextBackgroundColor: rgba(179, 215, 255, 1);
  --g-keyboardFocusIndicatorColor: rgba(0, 103, 244, 0.247);
  --g-unemphasizedSelectedTextColor: rgba(0, 0, 0, 1);
  --g-unemphasizedSelectedTextBackgroundColor: rgba(220, 220, 220, 1);

  /* Content */
  --g-alternatingContentBackgroundColorsEven: rgba(255, 255, 255, 1);
  --g-alternatingContentBackgroundColorsOdd: rgba(244, 245, 245, 1);
  --g-linkColor: rgba(0, 104, 218, 1);
  --g-separatorColor: rgba(0, 0, 0, 0.098);
  --g-selectedContentBackgroundColor: rgba(0, 99, 225, 1);
  --g-selectedContentBackgroundColor--h: 214;
  --g-selectedContentBackgroundColor--s: 100%;
  --g-selectedContentBackgroundColor--l: 44%;
  --g-unemphasizedSelectedContentBackgroundColor: rgba(220, 220, 220, 1);

  /* Menus */
  --g-selectedMenuItemTextColor: rgba(255, 255, 255, 1);

  /* Tables */
  --g-gridColor: rgba(230, 230, 230, 1);
  --g-headerTextColor: rgba(0, 0, 0, 0.847);

  /* Controls */
  --g-controlAccentColor--h: 211;
  --g-controlAccentColor--s: 100%;
  --g-controlAccentColor--l: 50%;
  --g-controlAccentColor--hsl: var(--g-controlAccentColor--h), var(--g-controlAccentColor--s), var(--g-controlAccentColor--l);
  --g-controlAccentColor: hsla(var(--g-controlAccentColor--hsl), 1);
  --g-controlColor--rgb: 255, 255, 255;
  --g-controlColor: rgba(var(--g-controlColor--rgb), 1);
  --g-controlColor--hsl: 0, 0%, 100%;
  --g-controlBackgroundColor: rgba(255, 255, 255, 1);
  --g-controlTextColor: rgba(0, 0, 0, 0.847);
  --g-disabledControlTextColor: rgba(0, 0, 0, 0.247);
  --g-scrubberTexturedBackground: rgba(255, 255, 255, 1);
  --g-selectedControlColor: rgba(179, 215, 255, 1);
  --g-selectedControlTextColor: rgba(0, 0, 0, 0.847);
  --g-alternateSelectedControlTextColor--rgb: 255, 255, 255;
  --g-alternateSelectedControlTextColor: rgba(
    var(--g-alternateSelectedControlTextColor--rgb),
    1
  );

  /* Windows */
  --g-windowBackgroundColor: rgba(236, 236, 236, 1);
  --g-windowFrameTextColor: rgba(0, 0, 0, 0.847);
  --g-underPageBackgroundColor: rgba(150, 150, 150, 0.898);
  --g-underPageBackgroundColor--rgb: 150, 150, 150;

  /* Highlights & Shadows */
  --g-findHighlightColor: rgba(255, 255, 0, 1);
  --g-highlightColor: rgba(255, 255, 255, 1);
  --g-highlightColor--rgb: 255, 255, 255;
  --g-shadowColor: rgba(0, 0, 0, 1);
  --g-shadowColor--rgb: 0, 0, 0;
`;

const darkTheme = `
	--g-systemBlue: rgba(10, 132, 255, 1);
	--g-systemBrown: rgba(172, 142, 104, 1);
	--g-systemGray: rgba(152, 152, 157, 1);
	--g-systemGreen: rgba(50, 215, 75, 1);
	--g-systemIndigo: rgba(94, 92, 230, 1);
	--g-systemOrange: rgba(255, 159, 10, 1);
	--g-systemPink: rgba(255, 55, 95, 1);
	--g-systemPurple: rgba(191, 90, 242, 1);
	--g-systemRed: rgba(255, 69, 58, 1);
	--g-systemTeal: rgba(90, 200, 245, 1);
	--g-systemYellow: rgba(255, 214, 10, 1);

	/* Labels */
	--g-labelColor: rgba(255, 255, 255, 0.847);
	--g-secondaryLabelColor: rgba(255, 255, 255, 0.549);
	--g-tertiaryLabelColor: rgba(255, 255, 255, 0.247);
	--g-quaternaryLabelColor: rgba(255, 255, 255, 0.098);

	/* Text */
	--g-textColor: rgba(255, 255, 255, 1);
	--g-placeholderTextColor: rgba(255, 255, 255, 0.247);
	--g-selectedTextColor: rgba(255, 255, 255, 1);
	--g-textBackgroundColor: rgba(30, 30, 30, 1);
	--g-selectedTextBackgroundColor: rgba(63, 99, 139, 1);
	--g-keyboardFocusIndicatorColor: rgba(26, 169, 255, 0.298);
	--g-unemphasizedSelectedTextColor: rgba(255, 255, 255, 1);
	--g-unemphasizedSelectedTextBackgroundColor: rgba(70, 70, 70, 1);

	/* Content */
	--g-alternatingContentBackgroundColorsEven: rgba(30, 30, 30, 1);
	--g-alternatingContentBackgroundColorsOdd: rgba(255, 255, 255, 0.047);
	--g-linkColor: rgba(65, 156, 255, 1);
	--g-separatorColor: rgba(255, 255, 255, 0.098);
	--g-selectedContentBackgroundColor: rgba(0, 88, 208, 1);
	--g-selectedContentBackgroundColor--h: 215;
	--g-selectedContentBackgroundColor--s: 100%;
	--g-selectedContentBackgroundColor--l: 41%;
	--g-unemphasizedSelectedContentBackgroundColor: rgba(70, 70, 70, 1);

	/* Menus */
	--g-selectedMenuItemTextColor: rgba(255, 255, 255, 1);

	/* Tables */
	--g-gridColor: rgba(26, 26, 26, 1);
	--g-headerTextColor: rgba(255, 255, 255, 1);

	/* Controls */
	--g-controlAccentColor--h: 211;
	--g-controlAccentColor--s: 100%;
	--g-controlAccentColor--l: 50%;
	--g-controlAccentColor--hsl: var(--g-controlAccentColor--h), var(--g-controlAccentColor--s), var(--g-controlAccentColor--l);
	--g-controlAccentColor: hsla(var(--g-controlAccentColor--hsl), 1);
	--g-controlColor: rgba(255, 255, 255, 0.247);
	--g-controlColor--rgb: 255, 255, 255;
	--g-controlColor--hsl: 0, 0%, 100%;
	--g-controlBackgroundColor: rgba(30, 30, 30, 1);
	--g-controlTextColor: rgba(255, 255, 255, 0.847);
	--g-disabledControlTextColor: rgba(255, 255, 255, 0.247);
	--g-scrubberTexturedBackground: rgba(255, 255, 255, 1);
	--g-selectedControlColor: rgba(63, 99, 139, 1);
	--g-selectedControlTextColor: rgba(255, 255, 255, 0.847);
	--g-alternateSelectedControlTextColor: rgba(255, 255, 255, 1);
	--g-alternateSelectedControlTextColor--rgb: 255, 255, 255;

	/* Windows */
	--g-windowBackgroundColor: rgba(50, 50, 50, 1);
	--g-windowFrameTextColor: rgba(255, 255, 255, 0.847);
	--g-underPageBackgroundColor: rgba(40, 40, 40, 1);
	--g-underPageBackgroundColor--rgb: 40, 40, 40;

	/* Highlights & Shadows */
	--g-findHighlightColor: rgba(255, 255, 0, 1);
	--g-highlightColor: rgba(180, 180, 180, 1);
	--g-highlightColor--rgb: 180, 180, 180;
	--g-shadowColor: rgba(0, 0, 0, 1);
	--g-shadowColor--rgb: 0, 0, 0;
`;

const darkSidebar = `
	--u-sidebar-note-count-label-color: hsla(0, 0%, 100%, 0.55);
	--u-sidebar-background-color: hsl(0, 0%, 20%);
	--u-sidebar-label-color: hsla(0, 0%, 100%, 0.25);
	--u-sidebar-item-color: hsla(0, 0%, 100%, 0.85);
	--u-sidebar-icon-color: hsl(var(--s-accentColor--h), var(--s-accentColor--s), var(--s-accentColor--l));
	--u-sidebar-chevron-color: hsla(0, 0%, 100%, 0.55);
	--u-sidebar-synchronise-color: hsla(0, 0%, 100%, 0.55);
	--u-sidebar-selected-item-color: hsl(0, 0%, 27%);
`;

export const generateUserCSS = async (settings: ThemeSettings) => {
	const fs = joplin.require('fs-extra');

	const {
		baseFontSize,
		iconFamily,
		appearance,
		accentColor,
		hideSyncStatus,
		notelistSeparators,
		editorParagraphSpacing,
		editorMaxCharactersPerLine,
		editorMarkdownThemeLight,
		editorMarkdownThemeDark,
	} = settings;

	const installDir = await joplin.plugins.installationDir();
	const cmThemeLight = await fs.readFile(installDir + `/css/codemirror/${editorMarkdownThemeLight}.css`, 'utf-8');
	const cmThemeDark = await fs.readFile(installDir + `/css/codemirror/${editorMarkdownThemeDark}.css`, 'utf-8');
	const strippedCmThemeLight = cmThemeLight
		.replaceAll(`.cm-s-${editorMarkdownThemeLight}`, '.CodeMirror.CodeMirror.CodeMirror'); // increase specificity
	const strippedCmThemeDark = cmThemeDark
		.replaceAll(`.cm-s-${editorMarkdownThemeDark}`, '.CodeMirror.CodeMirror.CodeMirror');


	const { h: accentColorH, s: accentColorS, l: accentColorL } = hexToHSL(accentColorMap.light[accentColor]);
	const { h: accentColorDarkH, s: accentColorDarkS, l: accentColorDarkL } = hexToHSL(accentColorMap.dark[accentColor]);

	return /* css */`
		${iconFamily === 'phosphor' ? `
			@font-face {
				font-family: "Phosphor";
				src: url("${installDir}/webfont/Phosphor.ttf") format("truetype");
				font-weight: normal;
				font-style: normal;
				font-display: block;
			}
		`: ''}

		:root {
			/* General --------------------------------- */
			--u-base-font-size: ${baseFontSize}%;

			--u-accentColor--h: ${accentColorH};
			--u-accentColor--s: ${accentColorS}%;
			--u-accentColor--l: ${accentColorL}%;

			/* Icons -------------------------------- */
			${iconFamily === 'phosphor' ? `
				--u-font-family-icons: 'Phosphor';
				--u-icon-size-factor: 1.25;

				--u-icon-alarm: '';
				--u-icon-arrow-triangle-2-circlepath: '';
				--u-icon-arrow-up-forward-app: '';
				--u-icon-arrow-up-right-square-fill: '';
				--u-icon-bold: '';
				--u-icon-checkmark-circle: '';
				--u-icon-checkmark: '';
				--u-icon-chevron-backward: '';
				--u-icon-chevron-down: '';
				--u-icon-chevron-forward: '';
				--u-icon-chevron-left-slash-chevron-right: '';
				--u-icon-chevron-right: '';
				--u-icon-chevron-up-chevron-down: '';
				--u-icon-clock: '';
				--u-icon-curlybraces: '';
				--u-icon-doc-on-clipboard: '';
				--u-icon-doc-richtext: '';
				--u-icon-ellipsis: '';
				--u-icon-folder: '';
				--u-icon-highlighter: '';
				--u-icon-info-circle: '';
				--u-icon-italic: '';
				--u-icon-link: '';
				--u-icon-list-bullet: '';
				--u-icon-list-bullet-rectangle: '';
				--u-icon-list-number: '';
				--u-icon-minus: '';
				--u-icon-magnifyingglass: '';
				--u-icon-paperclip: '';
				--u-icon-plus-circle: '';
				--u-icon-square-and-arrow-down: '';
				--u-icon-square-and-pencil: '';
				--u-icon-square-split-2x1: '';
				--u-icon-strikethrough: '';
				--u-icon-tablecells-badge-ellipsis: '';
				--u-icon-tag: '';
				--u-icon-text-badge-checkmark: '';
				--u-icon-text-below-photo: '';
				--u-icon-text-quote: '';
				--u-icon-textformat-abc-dottedunderline: '';
				--u-icon-xmark-circle-fill: '';
				--u-icon-xmark: '';
				` : ''
		}

			/* Sidebar --------------------------------- */
			${hideSyncStatus ? '' : `--u-sidebar-synchronise-label: '';`}

			/* Note list ----------------------------- */
			${notelistSeparators === 'none' ? '--u-note-list-dividers: none;' : ''}
			${notelistSeparators === 'zebraStripes' ? `
				--u-note-list-dividers: none;
			` : `
				--u-note-list-zebra-color-odd: transparent;
				--u-note-list-zebra-color-even: transparent;
			`}

			/* Editor -------------------------------- */
			--u-editor-paragraph-spacing: ${editorParagraphSpacing / 10}rem;
			--u-editor-max-width: ${editorMaxCharactersPerLine === 0 ? 'none' : `${editorMaxCharactersPerLine}ch`};

			/*
				properties that currently can't be selected via the UI, but maybe should...

				--u-font-family-system: 'Segoe UI', sans-serif;
				--u-font-family-system-rounded: 'Segoe UI', sans-serif;
				--u-sidebar-label-font-size: 1.5rem;
				--u-sidebar-synchronise-label-color: hsl(0, 0%, 50%);
			*/
		}

			${appearance === 'auto' ? `
				@media(prefers-color-scheme: light) {
					:root { ${lightTheme} }
					${strippedCmThemeLight}
				}

				@media(prefers-color-scheme: dark) {
					:root {
						${darkTheme}

						--u-accentColor--h: ${accentColorDarkH};
						--u-accentColor--s: ${accentColorDarkS}%;
						--u-accentColor--l: ${accentColorDarkL}%;
					}

					${strippedCmThemeDark}
				`
			: ''}
			${appearance === 'light' ? `
				:root { ${lightTheme} }
				${strippedCmThemeLight}
			` : ''}
			${appearance === 'light-with-dark-sidebar' ? `
				:root {
					${lightTheme}
					${darkSidebar}
				}
				${strippedCmThemeLight}
				` : ''}
			${appearance === 'dark' ? `
				:root {
					${darkTheme}
				}
				${strippedCmThemeDark}
			` : ''}
	`
}