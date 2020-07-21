import React from 'react';
import { AnchorTag } from '@components/anchorTag/anchorTag';
import Accordian from '@components/accordion';
import Summary from '@components/accordion/Summary';
import Details from '@components/accordion/Details';

export const ActivityAccordion = () => (
  <Accordian>
    <Summary>
      <h4 style={{ margin: 0 }}>Friends of Mercyhurst Rowing Board Activity</h4>
    </Summary>
    <Accordian>
      <Summary>
        <h4 style={{ margin: 0 }}>Board Meeting Notes</h4>
      </Summary>
      <Details>
        <Accordian>
          <Summary>
            <h4 style={{ margin: 0 }}>2020</h4>
          </Summary>
        </Accordian>
      </Details>
    </Accordian>
    <Accordian>
      <Summary>
        <h4 style={{ margin: 0 }}>Articles of Incorporation</h4>
      </Summary>
      <Details>
        <AnchorTag
          href="/static/articles-of-incorporation.pdf"
          newTab
          style={{ textDecoration: 'underline' }}
        >
          FOMR Bylaws
        </AnchorTag>
      </Details>
    </Accordian>
  </Accordian>
);
