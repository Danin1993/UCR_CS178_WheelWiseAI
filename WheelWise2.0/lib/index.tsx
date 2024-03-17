import * as Clerk from '@clerk/nextjs'

// ----------------------------------------
// Provider
// ----------------------------------------

import { ClerkProvider } from '@clerk/nextjs'
import { Theme as Radix } from '@radix-ui/themes'

export const Provider = { Clerk: ClerkProvider, Radix }

// ----------------------------------------
// Functions
// ----------------------------------------

// #1 - Util
export { Util, Do } from '@/lib/do'
// #2 - Do

// ----------------------------------------
// Components - Ui
// ----------------------------------------

// #1 - ui_shadcn
import * as Dropd from '@/lib/components/ui/ui_shadcn/dropdown-menu'
import { Button } from '@/lib/components/ui/ui_shadcn/button'

// #2 - ui_danin

import { default as Flex } from '@/lib/components/ui/ui_danin/flex'
import { default as Icon } from '@/lib/components/ui/ui_danin/icon'
import { default as Style } from '@/lib/components/ui/ui_danin/style'
import { default as Logo } from '@/lib/components/ui/ui_danin/logo'
import { default as Loading } from '@/lib/components/ui/ui_danin/loading'
import { default as Copy } from '@/lib/components/ui/ui_danin/copy'

export const Ui = { Flex, Icon, Style, Logo, Loading, Copy, Dropd, Button }

// ----------------------------------------
// Components - Comp
// ----------------------------------------

// #2.1 Auth
import { default as Signin } from '@/lib/components/comp/auth/signin'
import { default as Signup } from '@/lib/components/comp/auth/signup'
import { default as UserProfile } from '@/lib/components/comp/auth/userProfile'

// #2.2 Private
import { default as Nav } from '@/lib/components/comp/private/navigation'
import { default as Footer } from '@/lib/components/comp/private/footer'
import { default as Leads } from '@/lib/components/comp/private/lead/table'

// #2.3 Public
import { default as Navigation_Pub } from '@/lib/components/comp/public/nav'
import { default as Intro_Pub } from '@/lib/components/comp/public/intro'
import { default as Footer_Pub } from '@/lib/components/comp/public/footer'

export const Comp = {
  Auth: {
    Signin,
    Signup,
    UserProfile,
  },
  Public: {
    Nav: Navigation_Pub,
    Intro: Intro_Pub,
    Footer: Footer_Pub,
  },
  Private: {
    Nav,
    Footer,
    Leads,
  },
}
