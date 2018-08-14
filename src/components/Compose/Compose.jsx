import React from 'react'
import PropTypes from 'prop-types'

const IdComponent = ({ children }) => children

const Compose = ({children, components}) => {
  const Composed = components
    .reduceRight((Composed, NextComponent) => ({ children }) => (
        <NextComponent>
          <Composed>
            {children}
          </Composed>
        </NextComponent>
      ),
      IdComponent
    )

  return <Composed children={children} />
}

Compose.propTypes = {
  components: PropTypes.array
}

export default Compose
