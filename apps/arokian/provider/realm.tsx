import { RealmProvider } from '@realm/react'
import { PropsWithChildren } from 'react'
import { ProductLocal } from '../model'
function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[ProductLocal]}>{children}</RealmProvider>
}

export default RealmCustomProvider
