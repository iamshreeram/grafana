import { e2e } from '../index';

export const logout = () => {
  e2e().logToConsole('Logging out');

  e2e.pages.Home.visit();
  e2e()
    .contains('.sidemenu-item', 'Sign out')
    // @todo START -- use `hover()` when possible: https://github.com/cypress-io/cypress/issues/10
    .find('.dropdown-menu')
    .then($el => $el.css('display', 'block'))
    // @todo END
    .contains('a', 'Sign out')
    .click();

  e2e()
    .get('.login-page')
    .should('exist');

  e2e().logToConsole('Logged out');
};
