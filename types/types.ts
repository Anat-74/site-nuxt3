interface VisibilityState {
   isAccount: Ref<boolean>
   isContacts: Ref<boolean>
   visibleIsAccount: () => void
   visibleIsContacts: () => void
 }