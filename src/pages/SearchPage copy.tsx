import { useState } from 'react';

export default function SearchPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`dropdown ${isActive ? 'is-active' : ''}`}>
      <div className="dropdown-trigger">
        <button
          type="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
          onClick={() => setIsActive(!isActive)}
        >
          <span>Type de plat</span>
          <span className="icon is-small">
            {/* biome-ignore lint/a11y/noAriaHiddenOnFocusable: <explanation> */}
            <i className="fas fa-angle-down" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <button
            type="button"
            className="dropdown-item"
            onClick={(e) => e.preventDefault()}
          >
            <input
              type="checkbox"
              id="blabla"
              onClick={(e) => e.stopPropagation()} // empêche le clic de fermer un dropdown par exemple
              aria-label="Activer blablabla"
              style={{ marginRight: '8px' }}
            />
            type de plat 1
          </button>
        </div>
      </div>
    </div>
  );
}
