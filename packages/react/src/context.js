import React from 'react'

const isFunction = obj => typeof obj === 'function'

const MDXContext = React.createContext({})

export const withMDXComponents = Component => props => {
  const allComponents = useMDXComponents(props.components)
  return <Component {...props} components={allComponents} />
}

export const useMDXComponents = components => {
  const contextComponents = React.useContext(MDXContext)

  // Custom merge via a function prop
  if (isFunction(components)) {
    return components(contextComponents)
  }

  return {...contextComponents, ...components}
}

export const MDXProvider = ({
  components,
  children,
  useParentContext = true
}) => {
  let allComponents = useMDXComponents(components)

  if (!useParentContext) {
    allComponents = components
  }

  return (
    <MDXContext.Provider value={allComponents}>{children}</MDXContext.Provider>
  )
}

export default MDXContext
