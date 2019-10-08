import React from 'react'
import ReactDOM from 'react-dom'
import { Button, Select } from '@dfds-ui/react-components'
import { SelectField } from '@dfds-ui/react-components'

const App = (
  <div>
    <Button>This is a button</Button>
    <Select name="select">
      <option value="">Pick</option>
      <option>Value</option>
    </Select>
    <SelectField name="select1" label="Label">
      <option value="">Pick</option>
      <option>Value</option>
    </SelectField>
  </div>
)

ReactDOM.render(App, document.getElementById('app'))
