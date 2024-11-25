// import LanguageSwitcher from '@/components/atoms/LanguegeSwitcher'
// import ThemeToggleButton from '@/components/atoms/ThemeToggleButton'

import { ContactRound, Hand, Presentation, RotateCcw } from "lucide-react"

interface MenuItem {
  title: string
  linkTo: string
  icon: JSX.Element
}

const HeaderMenu = () => {
  const menuItems: MenuItem[] = [
    { title: 'Home', linkTo: '', icon: <RotateCcw strokeWidth={1} /> },
    { title: 'Hello', linkTo: '',icon:<Hand strokeWidth={1} />, },
    { title: 'Projects', linkTo: '', icon: <Presentation strokeWidth={1} /> },
    { title: 'Contact', linkTo: '', icon: <ContactRound strokeWidth={1} />},
  ]

  return (
    <header className='flex absolute flex-row min-w-fit top-0 right-3 mr-8  cursor-pointer '>
        {/* <LanguageSwitcher /> */}
        {/* <ThemeToggleButton /> */}
        {menuItems.map((menuItem, index) => (
            <div className='flex items-center text-emerald-600'>
                <div className='mr-1 ml-2 lg:ml-5'>
            {menuItem.icon}
          </div>
          <h1 key={index} 
            className='
            text-lg
            font-mono
            text-gray-800
            tracking-normal 
          hover:bg-lime-200
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-lime-800
            rounded-sm
            transition-all
            duration-100
            z-10
          '
          onClick={() => console.log(menuItem.linkTo)}
          >{menuItem.title}</h1>
        
          </div>
        ))}
    </header>
  )
}

export default HeaderMenu