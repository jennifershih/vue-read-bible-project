describe('Read Bible', () => {
  it('reads a chapter in Chinese', () => {
    cy.intercept('GET', 'https://bible-api.com/data/cuv/**', {
      body: { verses: [{ verse: 1, text: '耶和華是我的牧者，我必不致缺乏。' }] },
    }).as('chapter')

    cy.visit('/')
    cy.get('[data-test="book"]').select('詩篇')
    cy.get('[data-test="chapter"]').select('第 23 章')
    cy.wait('@chapter').its('request.url').should('include', '/data/cuv/PSA/23')
    cy.get('[data-test="passage"]').should('contain', '耶和華是我的牧者')
  })
})
