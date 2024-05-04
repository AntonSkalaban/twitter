const babel = {};

if (process.env.MIGHTYMELD) {
  babel.plugins = ['@mightymeld/runtime/babel-plugin-mightymeld'];
}

module.exports = babel;