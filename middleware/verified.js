export default function ({store, redirect}) {
  if (store.state.auth.loggedIn && store.state.auth.email_verified_at === null) {
    return redirect('account/verify')
  }
}
