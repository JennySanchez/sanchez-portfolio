import React from 'react';
import { ImageCard, Row, Column } from 'gatsby-theme-carbon';
import HomepageTemplate from 'gatsby-theme-carbon/src/templates/Homepage';

function Leadspace () {
    return (
        <div class="leadspace" style={{background: "url('./images/poster.png')"}}>
            <div className="bx--grid">
                <Row className="image-card-group">
                  <Column colMd={4} colLg={4} noGutterSm />
                  <Column colMd={4} colLg={4} noGutterSm>
                    <ImageCard
                      title="Work"
                      aspectRatio="1:2"
                      href="/work/case-study"
                      className="leadspace__cta"
                      actionIcon="arrowRight" />
                  </Column>
                  <Column colMd={4} colLg={4} noGutterSm>
                    <ImageCard
                        title="Info"
                        aspectRatio="1:1"
                        href="/info/about-me"
                        className="leadspace__cta"
                        actionIcon="arrowRight" />
                    <ImageCard
                        title="Contact"
                        aspectRatio="1:1"
                        actionIcon="arrowRight"
                        className="leadspace__cta"
                        href="/contact" />
                  </Column>
                </Row>
            </div>
        </div>
    );
}

const customProps = {
  Banner: <Leadspace />,
  FirstCallout: null,
  SecondCallout: null,
};

// spreading the original props gives us props.children (mdx content)
function ShadowedHomepage(props) {
  return <HomepageTemplate {...props} {...customProps} />;
}

export default ShadowedHomepage;
