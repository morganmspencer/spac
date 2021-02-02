import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Private unauthenticated="home">
        <Route path="/favorites" page={FavoritesPage} name="favorites" />
        <Route path="/users/new" page={NewUserPage} name="newUser" />
        <Route path="/users/{id}/edit" page={EditUserPage} name="editUser" />
        <Route path="/users/{id}" page={UserPage} name="user" />
        <Route path="/users" page={UsersPage} name="users" />
        <Route path="/admin/new" page={NewSpacPage} name="newSpac" />
        <Route path="/admin/{id}/edit" page={EditSpacPage} name="editSpac" />
        <Route path="/admin/{id}" page={SpacPage} name="spac" />
        <Route path="/admin" page={SpacsPage} name="spacs" />
      </Private>
      <Route path="/listing" page={ListingPage} name="listing" />
      <Route path="/{symbol}" page={DataPage} name="data" />
      <Route path="/" page={HomePage} name="home" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
