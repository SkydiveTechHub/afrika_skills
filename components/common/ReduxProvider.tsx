'use client'

import { store } from '@/app/store/store'
import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { ContainerProps } from '../Containers'

const ReduxProvider:FC<ContainerProps> = ({children}) => {
  return (
        <Provider store={store}>
          <div className="w-full">{children}</div>
        </Provider>
  )
}

export default ReduxProvider