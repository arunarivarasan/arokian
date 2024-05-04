import { RealmProvider } from '@realm/react'
import { PropsWithChildren } from 'react'
import Product from '../model/product'
function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[Product]}>{children}</RealmProvider>
}

export default RealmCustomProvider
