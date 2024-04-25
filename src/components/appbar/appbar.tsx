import { useEffect } from "react";
import Logo from '../../assets/images/logo-easy-code.png';

export const Appbar = () => {

    useEffect(() => {
        try {
            active();
          } catch (error) {
            console.log(error);
          }
    })

    function active() {
        const currentLocation = window.location.href;
        const menuItem = document.querySelectorAll("a");
        const menuLength = menuItem.length;
        for (let i = 0; i < menuLength; i++) {
          if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active";
          }
        }
      }
      function logoutAdmin() {
        try{
          localStorage.removeItem("_user_auth_token"); 
          return window.location.reload(); 
        }catch(e){
          console.error(e);
        }
      }
    
      return (
        <>
          <div className="sidebar">
            <div className="logo-details">
            <img className="logo_name" 
            src={Logo}
            alt="logo"
            style={{"width": "100%"}} />
            {/* <i className='bx bxl-sass' ></i>
              <span className="logo_name">SRMC</span> */} 
            </div>
            <ul className="nav-links"> 
  
              <li>
                <a
                  href="/"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Dashboard"
                > 
                  <i className="bx bx-grid-alt"></i>
                  <span className="links_name">Dashboard</span>
                </a>
              </li>
  
          
  
              <li>
                <a
                  href="/api"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Api"
                > 
                  <i className='bx bx-layer' ></i>
                  <span className="links_name">Api</span>
                </a>
              </li>
  
              <li>
                <a
                  href="/storage"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Storage"
                >  
                <i className='bx bx-hdd'></i>
                  <span className="links_name">Storage</span>
                </a>
              </li>
              {/* <li>
                <a
                  href="/graphql"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="GraphQL"
                > 
                <i className='bx bxl-graphql' ></i>
                  <span className="links_name">GraphQL</span>
                </a>
              </li> */}
  
              <li>
                <a
                  href="/database"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Database"
                > 
                <i className='bx bx-data'></i>
                  <span className="links_name">Database</span>
                </a>
              </li> 
  
              <li>
                <a
                  href="/security"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Security"
                >  
                <i className='bx bx-lock-alt' ></i>
                  <span className="links_name">Pangea Security</span>
                </a>
              </li> 
 
  
              <li>
                <a
                  href="/settings"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Settings"
                > 
                <i className='bx bx-cog' ></i>
                  <span className="links_name">Settings</span>
                </a>
              </li> 
   
   
              {/* <li>
                <a
                  href="/logout"
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Logout" 
                  onClick={this.logoutAdmin}
                ><HiOutlineLogout />
                  <span className="links_name">Logout</span>
                </a>
              </li>  */}
  
            </ul>
          </div>
        </>
      );
}