import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'

const SpacsLayout = (props) => {
  return (
    <MainLayout>
      <div className="rw-scaffold">
        <Flash timeout={1000} />
        <header className="rw-header">
          <h1 className="rw-heading rw-heading-primary">
            <Link to={routes.spacs()} className="rw-link">
              Spacs
            </Link>
          </h1>
          <Link to={routes.newSpac()} className="rw-button rw-button-green">
            <div className="rw-button-icon">+</div> New Spac
          </Link>
        </header>
        <main className="rw-main">{props.children}</main>
      </div>
    </MainLayout>
  )
}

export default SpacsLayout
