export default function({
  isHMR,
  app,
  store,
  route,
  params,
  query,
  error,
  redirect
}) {
  if (isHMR) return
  const locale = query.lang || params.lang || app.$cookies.get('_lang') || 'cn'
  store.commit('language', locale)
  app.$cookies.set('_lang', locale)
  app.i18n.locale = locale
}
