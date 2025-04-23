import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../../components/Card';

export default function SearchPage() {
  return (
    <>
      <div className="flex flex-row justify-center mb-10 ">
        <div className="dropdown dropdown-start">
          <button
            type="button"
            tabIndex={0}
            className="btn m-1 shadow-xl border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
          >
            Type de plat{' '}
            <FontAwesomeIcon
              icon={faChevronDown}
              size="lg"
              style={{ color: 'var(--button-color)' }}
            />
          </button>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
              />
              <li>
                <a>Item 1</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="dropdown dropdown-start">
          <button
            type="button"
            tabIndex={0}
            className="btn m-1 shadow-xl border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
          >
            Serie ou Film{' '}
            <FontAwesomeIcon
              icon={faChevronDown}
              size="lg"
              style={{ color: 'var(--button-color)' }}
            />
          </button>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl ">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
              />
              <li>
                <a>Item 1</a>
              </li>
            </div>
          </ul>
        </div>
        <div className="dropdown dropdown-start">
          <button
            type="button"
            tabIndex={0}
            className="btn m-1 shadow-xl border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
          >
            Genre{' '}
            <FontAwesomeIcon
              icon={faChevronDown}
              size="lg"
              style={{ color: 'var(--button-color)' }}
            />
          </button>
          <ul className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-xl">
            <div className="flex flex-row items-center">
              <input
                type="checkbox"
                className="checkbox border-gray-300 focus:outline-none focus:border-[var(--button-color)]"
              />
              <li>
                <a>Item 1</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-gray-200 p-6 rounded-lg shadow-xl mb-10">
        <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-3 md:gap-18">
          {Array.from({ length: 12 }).map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      </div>
    </>
  );
}
