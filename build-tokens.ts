import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['design-tokens.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      transforms: ['typography'],
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
  },
});

sd.registerTransform({
    name: 'typography',
    type: 'name',
    filter: (token) => {
        return token.attributes?.category === 'typography';
    },

    transform: (token) => {
        console.log({ token })
        const prefixMatches = token.name.match(/^typography-text-preset-(\d+)/)
        const id = prefixMatches?.[1]
        return `typography-${id}-${token.attributes?.item}`;
    },
})

await sd.buildAllPlatforms();