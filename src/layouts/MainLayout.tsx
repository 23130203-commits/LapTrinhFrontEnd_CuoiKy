import type {ReactNode} from "react";
import Header from "../components/Header.tsx";
import "./MainLayout.css"


interface MainLayoutProps {
    children: ReactNode
    activeCategory?: string
    goHome?: () => void
    selectCategory?: (category: string) => void
    search?: (keyword: string) => void
}

function MainLayout({ children, activeCategory, goHome, selectCategory, search }: MainLayoutProps) {
    return (
        <div className="main-Layout">
            <Header activeCategory={activeCategory}
                    goHome={goHome}
                    selectCategory={selectCategory}
                    search={search}></Header>
            <main className="main-layout-content">{children}</main>

            <footer></footer>
        </div>
    )
}
export default MainLayout