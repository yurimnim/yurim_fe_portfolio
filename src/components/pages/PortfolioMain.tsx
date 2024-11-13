import ContentContainer from "@/components/molecules/ContentContainer"
import ThemeToggleButton from "@/components/atoms/ThemeToggleButton"

const PortfolioMain = () => {
  return (
    <div>
        <ThemeToggleButton />
            <h1>Portfolio</h1>
            <p>Here are some of the projects I have worked on. Click on the image to view the project.</p>
            <ContentContainer />
    </div>
  )
}

export default PortfolioMain