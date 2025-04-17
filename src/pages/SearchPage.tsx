import { type Dispatch, type SetStateAction, useState } from 'react';

export default function SearchPage() {
  const [isActive1, setIsActive1] = useState<boolean>(false);
  const [isActive2, setIsActive2] = useState<boolean>(false);
  const [isActive3, setIsActive3] = useState<boolean>(false);

  const _handleCheckboxClick = (e) => {
    e.stopPropagation(); // Empêche le clic de fermer le dropdown
  };
  interface DropdownProps {
    label: string;
    isActive: boolean;
    setIsActive: Dispatch<SetStateAction<boolean>>;
    checkboxLabel: string;
    checkboxId: string;
  }
  const Dropdown: React.FC<DropdownProps> = ({
    label,
    isActive,
    setIsActive,
    checkboxLabel,
    checkboxId,
  }) => (
    <div
      className={`dropdown ${isActive ? 'is-active' : ''}`}
      style={{ marginBottom: '1rem' }}
    >
      <div className="dropdown-trigger">
        <button
          type="button"
          aria-haspopup="true"
          aria-controls={`dropdown-menu-${checkboxId}`}
          onClick={() => setIsActive(!isActive)}
        >
          <span>{label}</span>
          <span className="icon is-small">
            <i className="fas fa-angle-down" />
          </span>
        </button>
      </div>
      <div
        className="dropdown-menu"
        id={`dropdown-menu-${checkboxId}`}
        role="menu"
      >
        <div className="dropdown-content">
          <button
            type="button"
            className="dropdown-item"
            onClick={(e) => e.preventDefault()}
          >
            <input
              type="checkbox"
              id={checkboxId}
              onClick={(e) => e.stopPropagation()}
              aria-label={`Activer ${checkboxLabel}`}
              style={{ marginRight: '8px' }}
            />
            {checkboxLabel}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="dropdown">
        <div>
          <Dropdown
            label="Type de plat ▼"
            isActive={isActive1}
            setIsActive={setIsActive1}
            checkboxLabel="Dessert"
            checkboxId="checkbox1"
          />
        </div>
        <div>
          <Dropdown
            label="Film ou Série ▼"
            isActive={isActive2}
            setIsActive={setIsActive2}
            checkboxLabel="Film"
            checkboxId="checkbox2"
          />
        </div>
        <div>
          <Dropdown
            label="Tag ▼"
            isActive={isActive3}
            setIsActive={setIsActive3}
            checkboxLabel="Horreur"
            checkboxId="checkbox3"
          />
        </div>
      </div>
    </>
  );
}
