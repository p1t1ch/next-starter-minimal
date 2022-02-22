/* eslint-disable import/export */

// Use this file as @testing-library/react import replacement with all needed context providers
// https://testing-library.com/docs/react-testing-library/setup#custom-render
import { render, RenderOptions } from '@testing-library/react'
import RootWrapper from '~containers/RootWrapper'

const customRender = (ui: React.ReactElement, { ...options }: RenderOptions = {}) =>
  render(ui, { wrapper: ({ children }) => <RootWrapper>{children}</RootWrapper>, ...options })

export * from '@testing-library/react'
export { customRender as render }
