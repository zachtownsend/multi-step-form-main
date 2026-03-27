import StyleDictionary from 'style-dictionary';

/** Same as built-in `css` group, but `size/px` instead of `size/rem` so Figma numeric font sizes become `32px`, not `32rem`. */
const cssTransformsPx = [
  'attribute/cti',
  'name/kebab',
  'time/seconds',
  'html/icon',
  'size/px',
  'color/css',
  'asset/url',
  'fontFamily/css',
  'cubicBezier/css',
  'strokeStyle/css/shorthand',
  'border/css/shorthand',
  'typography/css/shorthand',
  'transition/css/shorthand',
  'shadow/css/shorthand',
] as const;

const sd = new StyleDictionary({
  source: ['design-tokens.tokens.json'],
  platforms: {
    css: {
      buildPath: 'src/styles/',
      transforms: [...cssTransformsPx, 'typography', 'css/variables'],
      
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