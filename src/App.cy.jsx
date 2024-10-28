import React from 'react'
import App from './App'

describe('<App />', () => {
  beforeEach(() => {
    cy.mount(<App />)
  })

  describe('If input exists', () => {
    it('checks if input exists', () => {
       // Kontrollera att inputfältet existerar
      cy.get('.input-name').should('exist')
    })
  })

  describe('Button has correct text', () => {
    it('Button text is Spara Namn', () => {
      cy.get('.name-button').should('have.text', 'Spara Namn')
    })
  })

  describe('Display Name when button is pressed', () => {
    it('Types in a name and displays it correctly after button clicked', () => {
      cy.get('.input-name').type('Philip');
      cy.get('.name-button').click();
      cy.get('.displayedName').should('have.text', 'Philip');
  })

})

describe('All calculator components exist and start values are 0', () => {
  it('Checks all button, input and output fields renders', () => {
    cy.get('.input-display').should('exist');
    cy.get('.add').should('exist');
    cy.get('.sub').should('exist');
    cy.get('.multi').should('exist');
    cy.get('.div').should('exist');
    cy.get('.output-display').should('exist');
  })
  
  it('Start values are 0', () => {
    cy.get('.output-display').should('have.text', '0')
  })
})

describe('Test calculator methods working correctly', () => {
  it('Test addition is working', () => {
    cy.get('.input-display').type('1');
    cy.get('.add').click();
    cy.get('.input-display').type('3');
    cy.get('.add').click();
    cy.get('.output-display').should('have.text', '4')
  })

  it('Test subtraction', () => {
    cy.get('.input-display').type('5');
    cy.get('.sub').click();
    cy.get('.input-display').type('5');
    cy.get('.sub').click();
    cy.get('.output-display').should('have.text', '-10')
  })

  it('Test multiplication', () => {
    cy.get('.input-display').type('3');
    cy.get('.multi').click();
    cy.get('.input-display').type('10');
    cy.get('.multi').click();
    cy.get('.output-display').should('have.text', '30')
  })

  it('Test division', () => {
    cy.get('.input-display').type('10');
    cy.get('.div').click();
    cy.get('.input-display').type('5');
    cy.get('.div').click();
    cy.get('.output-display').should('have.text', '2')
  })
})





})
