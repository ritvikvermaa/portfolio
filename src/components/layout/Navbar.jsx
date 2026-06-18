import { navLinks, socials } from '../../data/navigation.js';
import useScrolledNav from '../../hooks/useScrolledNav.js';

export default function Navbar({ isOpen, toggleMenu, closeMenu }) {
  const isScrolled = useScrolledNav();

  return (
    <>
      <nav id="main-nav" className={isScrolled ? 'scrolled' : ''}>
        <a href="#hero" className="nav-logo" onClick={closeMenu}>
          RV
        </a>
        <div className="nav-actions">
          <button
            className="menu-toggle"
            id="menu-toggle"
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="nav-drawer"
            onClick={toggleMenu}
          >
            <span />
            <span />
          </button>
        </div>
      </nav>

      <button className="menu-overlay" type="button" aria-label="Close navigation menu" onClick={closeMenu} />

      <aside className="nav-drawer" id="nav-drawer" aria-hidden={!isOpen}>
        <div>
          <p className="drawer-label">Menu</p>
          <ul className="drawer-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a href={link.href} className="drawer-link" onClick={closeMenu}>
                  <span className="drawer-dot" />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="drawer-footer">
          <p className="drawer-label">Social</p>
          <ul className="drawer-social">
            {socials.map(social => (
              <li key={social.href}>
                <a href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
