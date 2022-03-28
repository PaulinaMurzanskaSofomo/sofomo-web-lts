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
      {
        rolename: "ruby developers",
        url: "https://www.sofomo.com/developers/ruby",
      },
      {
        rolename: "python developers",
        url: "https://www.sofomo.com/developers/python",
      },
      {
        rolename: "PHP developers",
        url: "https://www.sofomo.com/developers/php",
      },
      {
        rolename: "node.Js developers",
        url: "https://www.sofomo.com/developers/node",
      },
      {
        rolename: "java developers",
        url: "https://www.sofomo.com/developers/java",
      },
      {
        rolename: "magento developers",
        url: "https://www.sofomo.com/developers/magento",
      },
      {
        rolename: "golang developers",
        url: "https://www.sofomo.com/developers/golang",
      },
    ],
    description: `We support all major backend technologies.`,
    icon: `${backend}`,
    id: 1,
  },
  {
    type: "frontend developers",
    role: [
      {
        rolename: "react developers",
        url: "https://www.sofomo.com/developers/react",
      },
      {
        rolename: "angular developers",
        url: "https://www.sofomo.com/developers/angular",
      },
      {
        rolename: "vue.Js developers",
        url: "https://www.sofomo.com/developers/vue",
      },
    ],
    description: `We're specialists in React, Angular & Vue.js.`,
    icon: `${frontend}`,
    id: 2,
  },
  {
    type: "mobile developers",
    role: [
      {
        rolename: "IOS developers",
        url: "https://www.sofomo.com/developers/ios",
      },
      {
        rolename: "android developers",
        url: "https://www.sofomo.com/developers/android",
      },
      {
        rolename: "react native delevopers",
        url: "https://www.sofomo.com/developers/react-native",
      },
    ],
    description: `Launching a new app ? Lets's do it! iOS, Android & React Native.`,
    icon: `${mobile}`,
    id: 3,
  },
  {
    type: "AWS Cloud Engineers",
    role: [
      {
        rolename: "AWS Engineers",
        url: "https://www.sofomo.com/developers/aws",
      },
    ],
    description: `We've done it all from basic to advanced AWS infranstructure.`,
    icon: `${cloud}`,
    id: 4,
  },
  {
    type: "Salesforce developers",
    role: [
      {
        rolename: "Salesforce Developers",
        url: "https://www.sofomo.com/developers/salesforce",
      },
    ],
    description: `Take advantage of Salesforce, we've got you covered.`,
    icon: `${salesforce}`,
    id: 5,
  },
  {
    type: "Magento",
    role: [
      {
        rolename: ".Net Developers",
        url: "https://www.sofomo.com/developers/dot-net",
      },
    ],
    description: `We're experts in .Net framework/Core.`,
    icon: `${magento}`,
    id: 6,
  },
];
