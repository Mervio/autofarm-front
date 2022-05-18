export default ({ route, redirect }) => {
  if (!route.query.token || !route.query.email) {
    return redirect('/forgotPassword')
  }
}
