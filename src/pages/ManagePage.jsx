import React, { useState } from 'react'
import HeaderComp from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { Button, Divider, Grid, Header, Icon, Image, Input, Label, Menu, Table } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import ManageLayoutHeader from '../modules/manage/ManageLayoutHeader';
import AdminChart from '../modules/AdminChart/AdminChart.jsx';
const ManagePage = () => {

  return (
    <>
      <AdminChart />
    </>
  )
}

export default ManagePage