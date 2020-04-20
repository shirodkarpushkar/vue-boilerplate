#!/usr/bin/env bash

# Shell configuration
set -euo pipefail
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

# Make Build
cd $DIR; node_modules/@vue/cli-service/bin/vue-cli-service.js build --modern

# Go to dist folder

# Run Build
node node_modules/serve/bin/serve.js -s dist -l 8080
