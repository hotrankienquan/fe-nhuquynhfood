import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'semantic-ui-react';
import styled from "styled-components";
const DashboardHeaderStyles = styled.div`
  background-color: white;
  padding: 20px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  .logo {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
    font-weight: 600;
    img {
      max-width: 40px;
    }
  }
  .header-avatar {
    width: 52px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 100rem;
    }
  }
  .header-right {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

const ManageLayoutHeader = () => {
  return (
    <DashboardHeaderStyles>
      <NavLink to="/" className="logo">
        <img srcSet="/logo192.png 2x" alt="monkey-blogging" className="logo" />
      </NavLink>
      <div className="header-right">
        {/* <Button to="/manage/add-post" className="header-button" height="52px">
          Write new post
        </Button> */}
        {/* <Lin to="/profile" className="header-avatar">
          <img src={userInfo?.avatar} alt="" />
        </Link> */}
      </div>
    </DashboardHeaderStyles>
  )
}

export default ManageLayoutHeader