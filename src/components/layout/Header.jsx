import React, { useContext } from 'react'
import { Menu, Container, Button, Message, Image, Header, Icon, Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { Context } from '../../context/Context';
import { Logout } from '../../context/Actions';
// import './Header.css';
const HeaderComp = () => {
  const { user, dispatch } = useContext(Context);
  const options = [
    { key: 1, text: 'Info', value: 1},
    { key: 2, text: 'Logout', value: 2 },
  ]
  const handleLogout = () => {
    dispatch(Logout())
  }
  return (
    // <Menu inverted fixed='top'>
    //   <Container>
    //     <Image
    //       className='image-header'
    //       src="./logo192.png" alt="logo"
    //       size='mini'
    //       bordered
    //     />
    //     <NavLink className="link-header" to="/">

    //       <Header className='header-content' as='h3' content="Home" floated='right' color='teal' size='small'
    //         textAlign='center'
    //       />
    //     </NavLink>
    //     <NavLink className={'link-header'} to="/manage">
    //       <Header as='h4' className='header-content-manage' content='Manage' color='teal' size='small' floated='right' />
    //     </NavLink>
    //     <div className='blank-div'></div>
    //     {!user &&
    //       <>


    //         <NavLink className={'link-header'} to="/sign-in">
    //           <Header as='h4' className='' content='Sign in' color='teal' size='tiny' />
    //         </NavLink>
    //         <NavLink className={'link-header sign-up'} to="/sign-up">
    //           <Header as='h4' className='' content='Sign up' color='teal' size='tiny' />
    //         </NavLink>
    //       </>
    //     }
    //     {user &&
    //       <>
    //         <p className='message-header'>Xin chào, {user.rows2[0].firstname}</p>
    //         <Icon name='log out' color='teal' size='small' className='icon-logout'
    //           onClick={handleLogout}
    //         />
    //       </>
    //     }

    //   </Container>
    // </Menu>
    <>
      <header class="header">
        <a href="#">
          <img class="logo" alt="Omnifood logo" src="logo192.png" />
        </a>

        <nav class="main-nav">
          <ul class="main-nav-list">
            <li><NavLink className="main-nav-link" to="/">Home</NavLink></li>
            {user && user.rows2 && user.rows2[0].fk_id_type_account == '72b0ed22-9d64-4bf2-9708-35ea731dc1bb' && 
              
              <li><NavLink className="main-nav-link" to="/manage">Manage</NavLink></li>
           }
            
            {!user &&
              <>
                <li><NavLink className="main-nav-link" to="/sign-in">Sign in</NavLink></li>
                <li><NavLink className="main-nav-link nav-cta" to="/sign-up">Sign up</NavLink></li>
              </>
            }
            {user &&
              <>
              {/* <Menu compact>
                <Dropdown text={`Xin chào, ${user?.rows2[0].firstname}`} options={options} simple item />
              </Menu> */}
              <li><NavLink className="main-nav-link" to="/info">Information</NavLink></li>
                <a className='main-nav-link'>Xin chào, {user?.rows2[0].firstname}</a>
                <Icon name='log out' color='teal' size='big' className='icon-logout'
                  onClick={handleLogout}
                />
              </>
            }
          </ul>
        </nav>

        <button class="btn-mobile-nav">
          <ion-icon class="icon-mobile-nav" name="menu-outline"></ion-icon>
          <ion-icon class="icon-mobile-nav" name="close-outline"></ion-icon>
        </button>
      </header>
    </>
  )
}

export default HeaderComp;