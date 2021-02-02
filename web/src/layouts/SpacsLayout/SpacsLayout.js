import { useState } from 'react'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { Flash } from '@redwoodjs/web'
import MainLayout from 'src/layouts/MainLayout'
import AdminSearchCell from 'src/components/AdminSearchCell'

const SpacsLayout = (props) => {
  const [stock, setStock] = useState()
  const onSubmit = (data) => {
    setStock(data.stock)
  }
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
          <Form onSubmit={onSubmit}>
            <TextField
              name="stock"
              className="uppercase"
              placeholder="Stock symbol"
              maxLength="5"
              validation={{ required: true }}
            />
            <Submit>Go</Submit>
          </Form>
        </header>
        {stock && <AdminSearchCell symbol={stock} />}
        <main className="rw-main">{props.children}</main>
      </div>
    </MainLayout>
  )
}

export default SpacsLayout
