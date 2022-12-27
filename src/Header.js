function Header (){
    return (
        <nav className="navbar navbar-expand-lg main-navbar">
        <form className="form-inline mr-auto">
        </form>

        <ul className="navbar-nav navbar-right">
          <li className="dropdown">
            <div className="d-sm-none d-lg-inline-block">Welcome Ziphora</div>
          </li>
          <li className="nav-link nav-link-lg nav-link-user">
            <a className="d-sm-none d-lg-inline-block" style="color:white;" href="/logout">Logout</a>
          </li>
        </ul>
      </nav>
    )
}

export default Header;