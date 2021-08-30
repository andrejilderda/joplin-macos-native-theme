# Changelog

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
