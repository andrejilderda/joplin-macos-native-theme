# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add option to set the alignment of the editor content when a max. width is set
- Styling for insert hyperlink in both Markdown and wysiwyg-editor (#13)

### Fixed

- Fix panel dividers in front of insert hyperlink modal (#17)
- Theme doesn't take into account max-width introduced in latest joplin version (#16)
- Fix display of chemical equations (#15)
- Anchor-tags don't have pointer in editor preview (#14)
- Height of go-to-anything modal when no results are shown

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
