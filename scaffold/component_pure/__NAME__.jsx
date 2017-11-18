// @flow

import React from 'react'

import './styles.css'

type Props = {
  children?: React.Children
}

const __NAME__ = ({ children }: Props) => (
  <div className='__ROOT_CLASS__'>
    {children}
  </div>
)

export default __NAME__
