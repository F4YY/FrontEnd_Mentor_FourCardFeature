import React from 'react';
import { Container } from './styled/Container.styled';
import { Attribution, AttributionA, Hstackflexi, Styledfourcard } from './styled/Fourcard.styled';
import supervisor from './images/icon-supervisor.svg';
import teambuilder from './images/icon-team-builder.svg';
import karma from './images/icon-karma.svg';
import calculator from './images/icon-calculator.svg';
import { Featurecard } from './Styledcard';

const cards = [
    {
        title: 'Supervisor',
        description: 'Monitors activity to identify project roadblocks',
        icon: supervisor,
    },
    {
        title: 'Team Builder',
        description: 'Scans our talent network to create the optimal team for your project',
        icon: teambuilder,
    },
    {
        title: 'Karma',
        description: 'Regularly evaluates our talent to ensure quality',
        icon: karma,
    },
    {
        title: 'Calculator',
        description: 'Uses data from past projects to provide better delivery estimates',
        icon: calculator,
    },
  ];

export const FourCardFeature = () => {
  return (
    <Container>
        <Styledfourcard>
            <h1>
                Reliable, efficient delivery
            </h1>
            <span>
                Powered by Technology
            </span>
            <h3>
                Our Artificial Intelligence powered tools use millions of project data points
                to ensure that your project is successful
            </h3>
            <Hstackflexi>
                {cards.map((card)=>
                <Featurecard
                    key={card.title}
                    title={card.title}
                    description={card.description}
                    icon={card.icon}
                />
                )}
            </Hstackflexi>
        </Styledfourcard>
        <footer>
            <Attribution>
                <AttributionA>
                    <p>Challenge by<a href="https://www.frontendmentor.io/challenges/four-card-feature-section-weK1eFYK/hub" rel="noreferrer" target="_blank">&nbsp;Frontend Mentor | Four card feature.</a></p>
                </AttributionA>
                <AttributionA>
                    <p>&nbsp;&nbsp;Coded by <a href="https://www.linkedin.com/in/rikiwendri/">&nbsp;Riki Wendri</a></p>
                </AttributionA>
            </Attribution>
          </footer>
    </Container>
  )
}
