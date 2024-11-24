// import LanguageSwitcher from '@/components/atoms/LanguegeSwitcher'
// import ThemeToggleButton from '@/components/atoms/ThemeToggleButton'

interface MenuItem {
  title: string
  linkTo: string
}

const HeaderMenu = () => {
  const menuItems: MenuItem[] = [
    { title: 'Home', linkTo: '' },
    { title: 'Hello', linkTo: '' },
    { title: 'Skills', linkTo: '' },
    { title: 'Projects', linkTo: '' },
    { title: 'Contact', linkTo: '' },
  ]

  return (
    <header className='flex absolute flex-row min-w-fit top-0 right-3'>
        {/* <LanguageSwitcher /> */}
        {/* <ThemeToggleButton /> */}
        {menuItems.map((menuItem, index) => (
          <h1 key={index} 
            className='
            text-lg
            font-mono
            text-gray-700
            mr-1
            md:mr-2
            lg:mr-3
            p-2
            tracking-normal 
            cursor-pointer 
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
        ))}
    </header>
  )
}

export default HeaderMenu