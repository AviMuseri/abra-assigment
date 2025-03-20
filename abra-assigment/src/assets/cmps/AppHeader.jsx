import { NavLink } from 'react-router-dom'

export function AppHeader() {

    return (

        <header className="app-header">
            <section className="header-container">
                <h1>React Place App!!!</h1>
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/place" >Places</NavLink>
                    <NavLink to="/place/edit" >Edit Place</NavLink>
                </nav>
            </section>
        </header>

    )
}
