import Project from './Project'

import { useEffect, useState } from 'react'

const Projects = ({ projects }) => {
  const [filter, setFilter] = useState('toShow')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    console.log(filter)
  }, [filter])

  const filteredArray = (filter) => {
    if (filter === 'toShow') {
      return projects.filter((object) => object.portfolioDisplay === true)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1
        id="projects"
        className="mt-20 w-full border-t-2 border-[#a08540] pt-20 pb-8 text-center text-3xl"
      >
        My projects
      </h1>

      <div className="relative flex hidden items-center justify-center">
        <button
          onClick={() => setOpen(!open)}
          id="dropdownDividerButton"
          className="ml-8 inline-flex items-center rounded-lg bg-blue-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Sort by importance{' '}
          <svg
            className="ml-2 h-4 w-4"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {
          // <!-- Dropdown menu -->
        }

        <div
          id="dropdownDivider"
          className={`${
            open ? '' : 'hidden'
          } absolute  z-10 w-44 divide-y divide-gray-100 rounded bg-white shadow dark:divide-gray-600 dark:bg-gray-700`}
        >
          <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
          </ul>
          <div className="py-1">
            <a
              href="#"
              className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Separated link
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto grid grid-cols-1 content-center justify-center px-4 pt-8 pb-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filter === 'toShow' ? (
          filteredArray(filter).map((project, index) => (
            <Project
              key={index}
              github={project.html_url}
              name={project.name}
              homepage={project.homepage}
              modified={project.pushed_at}
            />
          ))
        ) : (
          <div>Hello there!</div>
        )}
      </div>
    </div>
  )
}

export default Projects
