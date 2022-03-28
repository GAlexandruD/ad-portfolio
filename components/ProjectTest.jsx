import { XyzTransitionGroup } from '@animxyz/react'
import { interpolate } from 'flubber'
// type Props = {}

const ProjectTest = () => {
  return (
    <div>
      <XyzTransitionGroup
        className="item-group"
        xyz="fade front-3 flip-down-50% duration-10 stagger-5"
        duration={2000}
      >
        <h1>Aici sunt!</h1>
      </XyzTransitionGroup>
    </div>
  )
}

export default ProjectTest
