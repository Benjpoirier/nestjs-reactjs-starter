module.exports = {
  extends: ['../../.eslintrc.js', 'plugin:react/recommended', 'react-hooks'],
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'react/no-unescaped-entities': 'error',
    'react/prop-types': 'off',
    'react/jsx-no-target-blank': 'error',
    'eslint(react/display-name)': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never' },
    ],
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
  settings: {
    react: {
      version: '17.0.1',
    },
  },
};
