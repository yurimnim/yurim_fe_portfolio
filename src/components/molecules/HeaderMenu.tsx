import TitleText from '@/components/atoms/TitleText'

const HeaderMenu = () => {
  return (
    <div className=" absolute flex-row min-w-fit'>
        <div className='w-full flex justify-start'>
            <TitleText titleText='Hello!' onClick={
                () => {
                    return console.log('Hello!')
                }
            } />
        </div>
        <div className='w-full flex justify-end'>
            <TitleText titleText='Skills' />
        </div>
        <div className='w-full flex'>
            <TitleText titleText='Projects' />
        </div>
        <div className='w-full flex '>
            <TitleText titleText='Contact' />   
        </div>
    </div>
  )
}

export default HeaderMenu