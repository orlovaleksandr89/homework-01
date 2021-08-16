import React from 'react'
import ReactDom from 'react-dom'
import classes from './index.module.css'

const student = {
  name: 'Alex',
  lastName: 'Orlov',
}

const element = (
  <h1 className={classes.h1}>
    Hello world, меня зовут {student.name + ' ' + student.lastName}
  </h1>
)

ReactDom.render(element, document.getElementById('root'))
