import type {ReactNode} from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import "./MainLayout.css"


interface MainLayoutProps {
    content: ReactNode
    activeCategory?: string
    goHome?: () => void
    selectCategory?: (category: string) => void
    search?: (keyword: string) => void
}

function MainLayout({ content, activeCategory, goHome, selectCategory, search }: MainLayoutProps) {
    return (
        <div className="main-Layout">
            <Header activeCategory={activeCategory}
                    goHome={goHome}
                    selectCategory={selectCategory}
                    search={search}></Header>
            <main className="main-layout-content">{content}</main>

            <Footer
                goHome={goHome}
                selectCategory={selectCategory}
            />
        </div>
    )
}
export default MainLayout