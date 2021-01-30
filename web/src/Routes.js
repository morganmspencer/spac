// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/spacs/new" page={NewSpacPage} name="newSpac" />
      <Route path="/spacs/{id}/edit" page={EditSpacPage} name="editSpac" />
      <Route path="/spacs/{id}" page={SpacPage} name="spac" />
      <Route path="/spacs" page={SpacsPage} name="spacs" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
