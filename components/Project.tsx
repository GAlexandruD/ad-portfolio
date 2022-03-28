import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLaptop } from '@fortawesome/free-solid-svg-icons'

const Project = ({ project }) => {
  const { title, description, image, github, live, tags } = project

  return (
    <div className="project">
      <div className="project__image">
        <img src={image} alt={title} />
      </div>
      <div className="project__info">
        <h2 className="project__title">{title}</h2>
        <p className="project__description">{description}</p>
        <div className="project__links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project__link project__link--github"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="project__link project__link--live"
            >
              <FontAwesomeIcon icon={faLaptop} />
            </a>
          )}
        </div>
        <div className="project__tags">
          {tags.map((tag) => (
            <span key={tag} className="project__tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project
