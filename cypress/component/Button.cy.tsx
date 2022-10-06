import Button from 'ui-library/Button';

const text = 'Sample Button';
const containerID = '[data-testid="button"]';

describe('UI Library - Button', () => {
  it('renders', () => {
    const onClick = cy.spy().as('onClick');
    cy.mount(<Button onClick={onClick}>{text}</Button>);

    cy.get(containerID).should('have.text', text);

    cy.get(containerID).click();

    cy.get('@onClick').should('have.been.calledOnce');
  });
});
