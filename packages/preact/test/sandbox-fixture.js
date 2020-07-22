/* @jsx mdx */
import {mdx, MDXProvider} from '../src'

const MDXSandbox = props => <MDXProvider useParentContext={false} {...props} />

export default () => (
  <wrapper>
    <MDXSandbox>
      <h1 />
    </MDXSandbox>
  </wrapper>
)
