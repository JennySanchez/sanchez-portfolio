import React from 'react';
import Switcher, { SwitcherLink, SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher/Switcher';

const CustomSwitcher = () => <Switcher>
    <SwitcherDivider>Social medias</SwitcherDivider>
    <SwitcherLink href="https://www.linkedin.com/in/jennyhsiaosanchez">
      linkedin
    </SwitcherLink>
    <SwitcherLink href="https://www.instagram.com/theoddestdetail/">
      Instagram
    </SwitcherLink>
    <SwitcherLink href="https://dribbble.com/JennyHsiaoSanchez">
      Dribbble
    </SwitcherLink>
    <SwitcherDivider>Articles</SwitcherDivider>
    <SwitcherLink href="https://medium.com/@jennyhsiao">
      Medium articles
    </SwitcherLink>
</Switcher>;

export { SwitcherLink, SwitcherDivider, CustomSwitcher as default };
// export default CustomSwitcher;
