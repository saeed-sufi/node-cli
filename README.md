# node-cli
Node-cli course by ahmad awais

* Here's the Hashbang you need to use at the top of your `index.js` file to be able to run js on command line without needing to prefix your commands with `node`: `#!/usr/bin/env node`
* After creating `index.js` and `package.json`, run `npm link` to install your package globally. You can uninstall it by running `npm uninstall -g <packagename>`.

* Run `npm publish` publish your program to npm.

* Use this shortcut to get to your package url: `npm.im/sufi`.

* Regarding versioning: "Major.Minor.Patch". When there is non-breaking minimal change, use Patch to increment verisioning. When you added a feature which is non-breaking, use Minor and when you add a major feature which is breaking the current installations or if it has a lot of new features, then you need to add up Major.
