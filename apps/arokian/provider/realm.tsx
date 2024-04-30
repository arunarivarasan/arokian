import { RealmProvider } from '@realm/react'
import { PropsWithChildren } from 'react'
import AddProduct from '../model/addProduct'
function RealmCustomProvider({ children }: PropsWithChildren) {
  return <RealmProvider schema={[AddProduct]}>{children}</RealmProvider>
}

export default RealmCustomProvider
