import { mapState, mapGetters, mapActions } from 'vuex'

export const auditMethods = mapActions('audit', [
  'getAuditResources',
  'getAuditResourcesByID',
  'getAuditResourcesBySearch',
])
