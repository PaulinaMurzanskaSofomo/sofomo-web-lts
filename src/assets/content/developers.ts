import backend from "../icons/outsourcepageIcons/Backend.svg";
import frontend from "../icons/outsourcepageIcons/Frontendi.svg";
import mobile from "../icons/outsourcepageIcons/Mobile.svg";
import magento from "../icons/outsourcepageIcons/Magento.svg";
import salesforce from "../icons/outsourcepageIcons/Salesforce.svg";
import cloud from "../icons/outsourcepageIcons/AWSCloud.svg";

export const developers = [
  {
    type: "backend developers",
    role: [
      "ruby developers",
      "python developers",
      "PHP developers",
      "node.Js developers",
      "java developers",
      "magento developers",
      "golang developers",
    ],
    description: `We support all major backend technologies.`,
    icon: `${backend}`,
    id: 1,
  },
  {
    type: "frontend developers",
    role: ["react developers", "angular developers", "vue.Js developers"],
    description: `We're specialists in React, Angular & Vue.js.`,
    icon: `${frontend}`,
    id: 2,
  },
  {
    type: "mobile developers",
    role: ["IOS developers", "android developers", "react native delevopers"],
    description: `Launching a new app ? Lets's do it! iOS, Android & React Native.`,
    icon: `${mobile}`,
    id: 3,
  },
  {
    type: "AWS Cloud Engineers",
    role: ["AWS Engineers"],
    description: `We've done it all from basic to advanced AWS infranstructure.`,
    icon: `${cloud}`,
    id: 4,
  },
  {
    type: "Salesforce developers",
    role: ["Salesforce Developers"],
    description: `Take advantage of Salesforce, we've got you covered.`,
    icon: `${salesforce}`,
    id: 5,
  },
  {
    type: "Magento",
    role: [".Net Developers"],
    description: `We're experts in .Net framework/Core.`,
    icon: `${magento}`,
    id: 6,
  },
];
