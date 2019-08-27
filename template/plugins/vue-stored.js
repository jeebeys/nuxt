import createVuexShare from 'vuex-shared-mutations'
import createVuexState from 'vuex-persistedstate'
import createVuexCache from 'vuex-cache'

export default ({ store }) => {
  createVuexState({ key: 'local_storage' })(store)
  createVuexCache({ timeout: 2 * 1000 })(store)
  createVuexShare({
    sharingKey: 'share_sharing',
    storageKey: 'share_storage',
    predicate: (mutation, state) => {
      const predicate = ['increment']
      return predicate.includes(mutation.type)
    }
  })(store)
}
