import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  source: ['design-tokens.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/styles/',
      transforms: ['typography', 'css/variables'],
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
        const prefixMatches = token.name.match(/^typography-text-preset-(\d+)/)
        const id = prefixMatches?.[1]
        return `typography-${id}-${token.attributes?.item}`;
    },
})

sd.registerTransform({
    name: 'css/variables',
    type: 'name',
    filter: (token) => {
        return (
            token.type === 'color' ||
            (token.type === 'dimension' &&
                /^variable-collection-spacing-/.test(token.name))
        );
    },
    transform: (token) => {
        return token.name.replace(/^variable-collection-/, '');
    },
})
await sd.buildAllPlatforms();