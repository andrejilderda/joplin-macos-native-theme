# Changelog

## [1.3.3] - 2022-04-28

### Fixed

- 'New note' prompt not distinct (#70).

## [1.3.2] - 2022-04-26

### Fixed

- Shortcut to note title scrolls editor pane to right (#68).
- Border color sized incorrectly (#67).
- Table properties options difficult to view (#66).

## [1.3.1] - 2022-03-29

### Fixed

- Remove white background color of sort order button in dark mode.

## [1.3.0] - 2022-03-06

### Added

- Style toggle sort order field (#44).

## [1.2.18] - 2022-03-05

### Added

- Add shared notebook icon in sidebar (#62).

## [1.2.17] - 2022-02-25

### Changed

- Remove Phosphor icons SVG to decrease bundle size (and improve performance?)

## [1.2.16] - 2022-02-25

### Fixed

- Decrease size of emoji in sidebar (#59).
- Fix height of timepicker (#58).
- Improve sizing when sidebar is really small (#57).

## [1.2.15] - 2022-02-18

### Fixed

- Remove background on mermaid diagrams (#55).

## [1.2.14] - 2022-01-08

### Fixed

- Fix grey background to a portion of the toolbar (#47).

## [1.2.13] - 2021-11-30

### Fixed

- Fix synchronisation status hard to read when color scheme is set to light with dark sidebar (#43).

## [1.2.12] - 2021-11-22

### Fixed

- Fix sidebar titles text being cut off (#41).

## [1.2.11] - 2021-11-19

### Fixed

- Fix sidebar titles not visible in v2.6.2 (currently in alpha).

## [1.2.10] - 2021-11-14

### Fixed

- Prevent 'New notebook'-button hover jiggle (#37).
- Fix legibility of table in rendered markdown in dark mode (#36).
- Fix unreadable bold text in dark mode.

## [1.2.9] - 2021-10-15

### Fixed

- Fix collapsing margins for empty sibling heading tags (`##`) in Markdown preview (#28).

## [1.2.8] - 2021-10-15

### Fixed

- Fix horizontal rule icon boldness.

## [1.2.7] - 2021-10-15

### Fixed

- Fix plugin icons not showing (#35).

## [1.2.6] - 2021-09-27

### Fixed

- Improve legibility of highlighted go-to-anything items (#32).

## [1.2.5] - 2021-08-30

### Fixed

- Prevent CSS from leaking into pdf exports (#24).

## [1.2.4] - 2021-08-27

### Fixed

- Fix font issues on Linux (thanks 109767345!).

## [1.2.3] - 2021-08-27

### Fixed

- Phosphor icon font not loading on Windows.

## [1.2.2] - 2021-08-22

### Fixed

- Use correct font-family for notelist items.

## [1.2.1] - 2021-08-21

### Fixed

- Hopefully fixes issue on Linux where Phosphor icons are not displayed.

## [1.2.0] - 2021-08-19

### Added

- Add option to set the alignment of the editor content when a max. width is set.
- Styling for insert hyperlink in both Markdown and wysiwyg-editor (#13).

### Fixed

- Fix panel dividers in front of insert hyperlink modal (#17).
- Fix display of chemical equations (#15).
- Anchor-tags don't have pointer in editor preview (#14).
- Height of go-to-anything modal when no results are shown.
- Clear icon when search bar has value.

### Removed

- Setting for max-width of editor (since this was introduced in the latest Joplin version) (#16)

## [1.1.0] - 2021-08-16

### Added

- This CHANGELOG file.
- Add dividers between horizontal and vertical panels.
- Add missing icon for Outline plugin (#5).
- Add search panel styling (#6).
- Add checkbox styling in Markdown preview.

### Fixed

- Don't unset text colors that were explicitly set by the user (#11).
- Close button text color for note statistics (#7).
- Focus style in template dialog (#8).
- Fix mermaid text color in dark mode (#10).
- Alignment of info-icon in go-to-anything modal for Phosphor icon family.
- Use correct background color for selected notelist item when accent color is blue.
- Fix divider color when editor preview is on the side in dark mode.

### Changed

- Increase margins on headers based on paragraph spacing `--u-editor-paragraph-spacing`.
