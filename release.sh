#!/bin/bash

# Apply changesets to update versions and changelogs
npx changeset version

# Extract new version from package.json
NEW_VERSION=$(npx json -f package.json version)

# Update manifest.json
npx json -I -f ./src/manifest.json -e "this.version='$NEW_VERSION'"

# Git add changes
git add .

# Git commit (Changesets might handle commiting updated package.json and CHANGELOG.md)
git commit -m "chore: apply changesets and update manifest version to $NEW_VERSION"

git push
npx changeset publish
