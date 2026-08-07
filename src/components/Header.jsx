import { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        closeMenu();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="sticky-header">
      <div className="logo">@MICHAEL</div>
      <div 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        ref={hamburgerRef}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} ref={menuRef}>
        <li><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
        <li><a href="#about" className="nav-link" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
        <li><a href="#experience" className="nav-link" onClick={closeMenu}>Experience</a></li>
        <li><a href="#education" className="nav-link" onClick={closeMenu}>Education</a></li>
        <li><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
