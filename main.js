// For help writing plugins, visit the documentation to get started:
//   https://docs.insomnia.rest/insomnia/introduction-to-plugins

module.exports.templateTags = [
  {
    name: "randomReference",
    displayName: "Generate random reference",
    description: "Generate random reference",
    args: [
      {
        displayName: "Prefix",
        description: "Prefix",
        type: "string",
        defaultValue: "GM",
      },
      // {
      //   displayName: "Maximum",
      //   description: "Maximum potential value",
      //   type: "number",
      //   defaultValue: 100,
      // },
    ],
    async run(context, prefix) {
      const today = new Date();
      const timeInDay = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`
      const reference = `${prefix}-${today.getFullYear()}${today.getMonth()}${today.getDate()}-${timeInDay}`

      return reference;
    },
  },
  {
    name: "randomInt",
    displayName: "Generate random int",
    description: "Generate random int",
    args: [
      {
        displayName: "min",
        description: "Maximum potential value",
        type: "number",
        defaultValue: 0,
      },
      {
        displayName: "max",
        description: "Maximum potential value",
        type: "number",
        defaultValue: 9999999
      },
    ],
    async run(context, min, max) {
      return Math.round(Math.random() * (max - min) + min);
    },
  },
];
