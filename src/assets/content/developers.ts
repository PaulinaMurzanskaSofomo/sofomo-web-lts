import { backend, frontend, mobile, magento, salesforce, awsCloud } from "../icons";
import { OUTSOURCE } from "../../routes";
export const developers = [
  {
    type: "backend developers",
    role: [
      {
        title: "ruby developers",
        path: OUTSOURCE,
      },
      {
        title: "python developers",
        path: OUTSOURCE,
      },
      {
        title: "PHP developers",
        path: OUTSOURCE,
      },
      {
        title: "node.Js developers",
        path: OUTSOURCE,
      },
      {
        title: "java developers",
        path: OUTSOURCE,
      },
      {
        title: "magento developers",
        path: OUTSOURCE,
      },
      {
        title: "golang developers",
        path: OUTSOURCE,
      },
    ],
    description: `We support all major backend technologies.`,
    icon: `${backend}`,
    id: "1",
  },
  {
    type: "frontend developers",
    role: [
      {
        title: "react developers",
        path: OUTSOURCE,
      },
      {
        title: "angular developers",
        path: OUTSOURCE,
      },
      {
        title: "vue.Js developers",
        path: OUTSOURCE,
      },
    ],
    description: `We're specialists in React, Angular & Vue.js.`,
    icon: `${frontend}`,
    id: "2",
  },
  {
    type: "mobile developers",
    role: [
      {
        title: "IOS developers",
        path: OUTSOURCE,
      },
      {
        title: "android developers",
        path: OUTSOURCE,
      },
      {
        title: "react native delevopers",
        path: OUTSOURCE,
      },
    ],
    description: `Launching a new app ? Lets's do it! iOS, Android & React Native.`,
    icon: `${mobile}`,
    id: "3",
  },
  {
    type: "AWS Cloud Engineers",
    role: [
      {
        title: "AWS Engineers",
        path: OUTSOURCE,
      },
    ],
    description: `We've done it all from basic to advanced AWS infranstructure.`,
    icon: `${awsCloud}`,
    id: "4",
  },
  {
    type: "Salesforce developers",
    role: [
      {
        title: "Salesforce Developers",
        path: OUTSOURCE,
      },
    ],
    description: `Take advantage of Salesforce, we've got you covered.`,
    icon: `${salesforce}`,
    id: "5",
  },
  {
    type: "Magento",
    role: [
      {
        title: ".Net Developers",
        path: OUTSOURCE,
      },
    ],
    description: `We're experts in .Net framework/Core.`,
    icon: `${magento}`,
    id: "6",
  },
];
