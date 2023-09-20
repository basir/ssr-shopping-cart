import React from 'react'
import PropTypes from 'prop-types'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import { childrenPropType } from './PropTypeValues'

export { PageShell }

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType,
}
function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        {children}
      </PageContextProvider>
    </React.StrictMode>
  )
}
