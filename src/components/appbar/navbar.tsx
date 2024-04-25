import { useEffect } from "react"; 
import img from "../../assets/images/useravatar.png";

export const Navbar = () => { 

   const drawerToggle = () => {
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".sidebarBtn");
        let homesection = document.querySelector(".home-section");
    
          sidebar?.classList.toggle("active");
          homesection?.classList.toggle("active");
          if(sidebar?.classList.contains("active")){
          sidebarBtn?.classList.replace("bx-menu" ,"bx-menu-alt-right");
        }else
          sidebarBtn?.classList.replace("bx-menu-alt-right", "bx-menu");
      };
    
    
      function logoutAdmin() {
        try{
          localStorage.removeItem("token"); 
          window.location.reload();
          return window.location.href = "/";
        }catch(e){
          console.error(e);
        }
      }
    
      return (
        <>
        <nav>
          <div className="sidebar-button">
            <i className="bx bx-menu sidebarBtn"
            onClick={drawerToggle}
            ></i>
              {/* <span className="custom-title">Dashboard</span> */}
          </div>     

          <div className="profile-details" 
          onClick={logoutAdmin}
          style={{"alignItems" : "end" , cursor : 'pointer'}}>                              
          <h3 className="appointment-time">
          <img src={img}
           alt="" /> &nbsp;Logout</h3>
 
          </div>
        </nav>
      </>
      );
}