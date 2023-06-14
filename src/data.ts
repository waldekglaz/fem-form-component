export const addOns = [
  { name: 'Online service', label: 'onlineService', description: 'Access to multiplayer games', monthlyCost: 1, anuallyCost: 10 },
  { name: 'Larger storage', label: 'largerStorage', description: 'Extra 1TB of cloud save', monthlyCost: 2, anuallyCost: 20 },
  { name: 'Customizable profile', label: 'customizableProfile', description: 'Custom theme on your profile', monthlyCost: 2, anuallyCost: 20 },
]
import ArcadeLogo from './assets/icon-arcade.svg'
import AdvancedLogo from './assets/icon-advanced.svg'
import ProLogo from './assets/icon-pro.svg'
export const plans = [
  { name: 'arcade', monthly: 9, annually: 90, logo: ArcadeLogo },
  { name: 'advanced', monthly: 12, annually: 120, logo: AdvancedLogo },
  { name: 'pro', monthly: 15, annually: 150, logo: ProLogo },
]
