import { PropsWithChildren } from 'react'
import { TamaguiProvider } from 'tamagui'
import config from './../tamagui.config'
const TamaguiCustomProvider = ({ children }: PropsWithChildren) => {
  return <TamaguiProvider config={config}>{children}</TamaguiProvider>
}

export default TamaguiCustomProvider
