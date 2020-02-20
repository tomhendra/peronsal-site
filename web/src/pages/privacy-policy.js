/* eslint-disable max-len */
import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Section from '../components/Section';
import Grid from '../components/Grid';
import Item from '../components/Item';
import Heading from '../components/Heading';
import Text from '../components/Text';
import InlineLink from '../components/InlineLink';

import { sizes, variants } from '../assets/styles/style-enums';

const { FOXTROT, GOLF } = sizes;
const { PRIMARY } = variants;

function PrivacyPolicyPage() {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <Section variant={PRIMARY}>
        <Grid>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={GOLF}
          >
            <Heading as="h1" size={FOXTROT} variant={PRIMARY}>
              Privacy Policy.
            </Heading>
            <Text variant={PRIMARY}>
              At tomhendra.dev, accessible from&nbsp;
              <InlineLink externalLink="https://tomhendra.dev">
                https://tomhendra.dev
              </InlineLink>
              , one of our main priorities is the privacy of our visitors. This
              Privacy Policy document contains types of information that is
              collected and recorded by tomhendra.dev and how we use it.
            </Text>
            <Text variant={PRIMARY}>
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" variant={PRIMARY}>
              General Data Protection Regulation (GDPR)
            </Heading>
            <Text variant={PRIMARY}>
              We are a Data Controller of your information.
            </Text>
            <Text variant={PRIMARY}>
              Tom Hendra legal basis for collecting and using the personal
              information described in this Privacy Policy depends on the
              Personal Information we collect and the specific context in which
              we collect the information:
            </Text>
            <Text as="ul" variant={PRIMARY}>
              <li>Tom Hendra needs to perform a contract with you</li>
              <li>You have given Tom Hendra permission to do so</li>
              <li>
                Processing your personal information is in Tom Hendra&apos;s
                legitimate interests
              </li>
              <li>Tom Hendra needs to comply with the law</li>
            </Text>
            <Text variant={PRIMARY}>
              Tom Hendra will retain your personal information only for as long
              as is necessary for the purposes set out in this Privacy Policy.
              We will retain and use your information to the extent necessary to
              comply with our legal obligations, resolve disputes, and enforce
              our policies.
            </Text>
            <Text variant={PRIMARY}>
              If you are a resident of the European Economic Area (EEA), you
              have certain data protection rights. If you wish to be informed
              what Personal Information we hold about you and if you want it to
              be removed from our systems, please contact us.
            </Text>
            <Text variant={PRIMARY}>
              In certain circumstances, you have the following data protection
              rights:
            </Text>
            <Text as="ul" variant={PRIMARY}>
              <li>
                The right to access, update or to delete the information we have
                on you.
              </li>
              <li>The right of rectification.</li>
              <li>The right to object.</li>
              <li>The right of restriction.</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2">Log Files</Heading>
            <Text variant={PRIMARY}>
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
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" variant={PRIMARY}>
              Cookies and Web Beacons
            </Heading>
            <Text variant={PRIMARY}>
              Like any other website, tomhendra.dev uses &apos;cookies&apos;.
              These cookies are used to store information including
              visitors&apos; preferences, and the pages on the website that the
              visitor accessed or visited. The information is used to optimize
              the users&apos; experience by customizing our web page content
              based on visitors&apos; browser type and/or other information.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" variant={PRIMARY}>
              Privacy Policies
            </Heading>
            <Text variant={PRIMARY}>
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of tomhendra.dev.
            </Text>
            <Text variant={PRIMARY}>
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on tomhendra.dev,
              which are sent directly to users&apos; browser. They automatically
              receive your IP address when this occurs. These technologies are
              used to measure the effectiveness of their advertising campaigns
              and/or to personalize the advertising content that you see on
              websites that you visit.
            </Text>
            <Text variant={PRIMARY}>
              Note that tomhendra.dev has no access to or control over these
              cookies that are used by third-party advertisers.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" variant={PRIMARY}>
              Third Party Privacy Policies
            </Heading>
            <Text variant={PRIMARY}>
              tomhendra.dev&apos;s Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options. You may find
              a complete list of these Privacy Policies and their links here:
              Privacy Policy Links.
            </Text>
            <Text variant={PRIMARY}>
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers&apos;
              respective websites. What Are Cookies?
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" variant={PRIMARY}>
              Children&apos;s Information
            </Heading>
            <Text variant={PRIMARY}>
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </Text>
            <Text variant={PRIMARY}>
              tomhendra.dev does not knowingly collect any Personal Identifiable
              Information from children under the age of 13. If you think that
              your child provided this kind of information on our website, we
              strongly encourage you to contact us immediately and we will do
              our best efforts to promptly remove such information from our
              records.
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" variant={PRIMARY}>
              Online Privacy Policy Only
            </Heading>
            <Text variant={PRIMARY}>
              Our Privacy Policy created at&nbsp;
              <InlineLink externalLink="https://GDPRPrivacyPolicy.net">
                GDPRPrivacyPolicy.net
              </InlineLink>
              &nbsp;applies only to our online activities and is valid for
              visitors to our website with regards to the information that they
              shared and/or collect in tomhendra.dev. This policy is not
              applicable to any information collected offline or via channels
              other than this website. Our GDPR Privacy Policy was generated
              from the&nbsp;
              <InlineLink externalLink="https://gdprprivacypolicy.net">
                GDPR Privacy Policy Generator.
              </InlineLink>
              &nbsp;
            </Text>
          </Item>
          <Item
            gridColStart={[1, 1, 2, 3, 4]}
            gridColEnd={[9, 9, 12, 11, 10]}
            spacingBottom={FOXTROT}
          >
            <Heading as="h2" variant={PRIMARY}>
              Consent
            </Heading>
            <Text variant={PRIMARY}>
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
