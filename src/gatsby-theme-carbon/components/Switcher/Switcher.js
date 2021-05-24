import React from 'react';
import Switcher, { SwitcherLink, SwitcherDivider } from 'gatsby-theme-carbon/src/components/Switcher/Switcher';

const CustomSwitcher = () => <Switcher>
    <SwitcherDivider>LinkedIn</SwitcherDivider>
    <SwitcherLink href="#">
      Article name one
    </SwitcherLink>
    <SwitcherLink href="#">
      Article name two
    </SwitcherLink>
    <SwitcherLink href="#">
      Article name three
    </SwitcherLink>
    <SwitcherDivider>Medium articles</SwitcherDivider>
    <SwitcherLink href="#">
      Article name one
    </SwitcherLink>
    <SwitcherLink href="#">
      Article name two
    </SwitcherLink>
    <SwitcherLink href="#">
      Article name three
    </SwitcherLink>
</Switcher>;

export { SwitcherLink, SwitcherDivider, CustomSwitcher as default };
// export default CustomSwitcher;
