/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';

import { sizes } from '../assets/styles/style-enums';

const { FOXTROT, GOLF, INDIA } = sizes;

function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <Section>
        <Grid>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingTop={[GOLF, INDIA]}
            spacingBottom={GOLF}
          >
            <Heading as="h1" size={FOXTROT}>
              Privacy Policy.
            </Heading>
            <Text>
              At tomhendra.dev, accessible from https://www.tomhendra.dev, one
              of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by tomhendra.dev and how we use it.
            </Text>
            <Text>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </Text>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">General Data Protection Regulation (GDPR)</Heading>
            <Text>We are a Data Controller of your information.</Text>
            <Text>
              Tom Hendra legal basis for collecting and using the personal
              information described in this Privacy Policy depends on the
              Personal Information we collect and the specific context in which
              we collect the information:
            </Text>
            <ul>
              <li>
                <Text>Tom Hendra needs to perform a contract with you</Text>
              </li>
              <li>
                <Text>You have given Tom Hendra permission to do so</Text>
              </li>
              <li>
                <Text>
                  Processing your personal information is in Tom Hendra&apos;s
                  legitimate interests
                </Text>
              </li>
              <li>
                <Text>Tom Hendra needs to comply with the law</Text>
              </li>
            </ul>
            <Text>
              Tom Hendra will retain your personal information only for as long
              as is necessary for the purposes set out in this Privacy Policy.
              We will retain and use your information to the extent necessary to
              comply with our legal obligations, resolve disputes, and enforce
              our policies.
            </Text>
            <Text>
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights. If you wish to be informed
              what Personal Information we hold about you and if you want it to
              be removed from our systems, please contact us.
            </Text>
            <Text>
              In certain circumstances, you have the following data protection
              rights:
            </Text>
            <ul>
              <li>
                <Text>
                  The right to access, update or to delete the information we
                  have on you.
                </Text>
              </li>
              <li>
                <Text>The right of rectification.</Text>
              </li>
              <li>
                <Text>The right to object.</Text>
              </li>
              <li>
                <Text>The right of restriction.</Text>
              </li>
              <li>
                <Text>The right to data portability</Text>
              </li>
              <li>
                <Text>The right to withdraw consent</Text>
              </li>
            </ul>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">Log Files</Heading>
            <Text>
              tomhendra.dev follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services&apos; analytics.
              The information collected by log files include internet protocol
              (IP) addresses, browser type, Internet Service Provider (ISP),
              date and time stamp, referring/exit pages, and possibly the number
              of clicks. These are not linked to any information that is
              personally identifiable. The purpose of the information is for
              analyzing trends, administering the site, tracking users&apos;
              movement on the website, and gathering demographic information.
            </Text>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">Cookies and Web Beacons</Heading>
            <Text>
              Like any other website, tomhendra.dev uses &apos;cookies&apos;.
              These cookies are used to store information including
              visitors&apos; preferences, and the pages on the website that the
              visitor accessed or visited. The information is used to optimize
              the users&apos; experience by customizing our web page content
              based on visitors&apos; browser type and/or other information.
            </Text>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">Privacy Policies</Heading>
            <Text>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of tomhendra.dev.
            </Text>
            <Text>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on tomhendra.dev,
              which are sent directly to users&apos; browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </Text>
            <Text>
              Note that tomhendra.dev has no access to or control over these
              cookies that are used by third-party advertisers.
            </Text>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">Third Party Privacy Policies</Heading>
            <Text>
              tomhendra.dev&apos;s Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options. You may find
              a complete list of these Privacy Policies and their links here:
              Privacy Policy Links.
            </Text>
            <Text>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers&apos;
              respective websites. What Are Cookies?
            </Text>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">Children&apos;s Information</Heading>
            <Text>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </Text>
            <Text>
              tomhendra.dev does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </Text>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">Online Privacy Policy Only</Heading>
            <Text>
              Our Privacy Policy created at GDPRPrivacyPolicy.net) applies only
              to our online activities and is valid for visitors to our website
              with regards to the information that they shared and/or collect in
              tomhendra.dev. This policy is not applicable to any information
              collected offline or via channels other than this website. Our
              GDPR Privacy Policy was generated from the &nbsp;
              <a href="https://gdprprivacypolicy.net">
                GDPR Privacy Policy Generator.
              </a>
              &nbsp;
            </Text>
          </Item>
          <Item
            gridColStart={1}
            gridColEnd={[9, 9, 11, 11]}
            spacingBottom={GOLF}
          >
            <Heading as="h2">Consent</Heading>
            <Text>
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </Text>
          </Item>
        </Grid>
      </Section>
    </Layout>
  );
}

export default PrivacyPolicyPage;
