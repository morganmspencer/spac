import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'
import { useParams } from '@redwoodjs/router'
import { formatDateOnSubmit } from 'src/utils/forms'

const SpacForm = (props) => {
  const { symbol } = useParams()
  const onSubmit = (data) => {
    data.mergerDate = formatDateOnSubmit(data.mergerDate)
    props.onSave(data, props?.spac?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="symbol"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Symbol
        </Label>
        <TextField
          name="symbol"
          defaultValue={props.spac?.symbol || symbol}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="symbol" className="rw-field-error" />

        <Label
          name="ipoSymbol"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ipo symbol
        </Label>
        <TextField
          name="ipoSymbol"
          defaultValue={props.spac?.ipoSymbol}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ipoSymbol" className="rw-field-error" />

        <Label
          name="ipoPrice"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Ipo price
        </Label>
        <TextField
          name="ipoPrice"
          defaultValue={props.spac?.ipoPrice}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="ipoPrice" className="rw-field-error" />

        <Label
          name="mergerDate"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Merger date
        </Label>
        <TextField
          name="mergerDate"
          defaultValue={props.spac?.mergerDate}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="mergerDate" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default SpacForm
