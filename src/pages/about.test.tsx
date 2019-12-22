import * as React from "react";
import * as renderer from "react-test-renderer";
import { StaticQuery } from "gatsby";
import About from '../components/about/about';
import { IAboutProps} from '../models/about.types';

beforeEach(() => {
  // @ts-ignore
  StaticQuery.mockImplementationOnce(({ render }: IAboutProps) =>
    render({
      site: {
        children: null,
        data: {
          allMarkdownRemark: {
            edges: null
          },
          allFile: null
        },
        location: null,
        pageContext: {
          isCreatedByStatefulCreatePages: null
        },
        path: null,
        pathContext: {
          isCreatedByStatefulCreatePages: null
        },
        uri: null
      },
    })
  )
});

describe("Index", () =>
  it("renders correctly", () => {
    const aboutData = {
      data: {
        "allFile":{
          "edges":[{
            "node":{
              "id":"a2035ede-68a3-5582-9d7e-85ff5b260658",
              "childSiteJson":{
                "id":"64a22821-0894-5392-b2d0-485a03f86a0d",
                "header": "",
                "about":{
                  "paraOne":"Hello, Elliot here. Thanks for checking out my website. I will hopefully be updating the site bit by bit over the year.",
                  "paraTwo":"the next few months. In the meantime please checkout some of the blog posts I have made and if you need to contact me then feel free.",
                  "paraThree":"I am a software developer at bet365 where I have been mainly working of the sports/main site on web and mobile using typescript but I am always trying new languages and frameworks in my spare time.",
                  "paraFour":"Also play hockey every week and make music in between."}
              }
            }
            },
            {
              "node":{
                "id":"2cb785bb-6c88-559b-b4ae-f8279db235ff","childSiteJson":{
                  "id":"e5d6c80b-ea1b-5dca-a9b5-17dc6da60568","header":{
                    "icon":"../assets/images/header-icon.webp",
                    "heading":"Elliot Evans",
                    "subHeading":"Software Developer at Bet365"
                  },
                  "about": ""
                }
              }
            }]
        }
      }
    };

    const tree = renderer.create(<About about={aboutData} />).toJSON();
    expect(tree).toMatchSnapshot()
  }));
