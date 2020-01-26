const searchParamOne = "Apple, lettuce"
const searchParamTwo = "swiss cheese, potato"

describe("Test whole app", () => {
  it("should be able to make multiple searches, search again from last searches and removed items from dropdown" , () => {
    cy.visit('/')
      .findByTestId('searchbar-input')
      .type(searchParamOne)
      .type('{enter}')
      .wait(500)
      .findByTestId('searchbar-input')
      .type(searchParamTwo)
      .type('{enter}')
      .findByTestId("dropdown-icon")
      .click()
      .findByText(searchParamOne)
      .click()
      .findByTestId("dropdown-icon")
      .click()
  })
})

