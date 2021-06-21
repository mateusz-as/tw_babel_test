module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "tailwind-rn-classname",
      {
        "tailwindRNExportPath": "./tailwindRN",
        "tailwindRNExportName": "tw"
      }
    ]
  ]
};
