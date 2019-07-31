import { configure, getStorybook, setAddon } from '@storybook/angular';
import createPercyAddon from '@percy-io/percy-storybook';
const { percyAddon, serializeStories } = createPercyAddon();
setAddon(percyAddon);

// automatically import all files ending in *.stories.ts
const req = require.context('../src', true, /\.stories\.ts$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
// NOTE: if you're using the Storybook options addon, call serializeStories *BEFORE* the setOptions call
serializeStories(getStorybook);
