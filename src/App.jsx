import React, { useContext, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { Context } from './context/Context';
import PageNotFound from './pages/PageNotFound';
import ManageLayout from './modules/manage/ManageLayout';
import ManageUpdateTable from './modules/table/ManageUpdateTable.jsx';
import Info from './pages/Info.jsx';

const SignUpPage = lazy(() => import('./pages/SignUpPage'));
const SignInPage = lazy(() => import('./pages/SignInPage'));
const ManagePage = lazy(() => import('./pages/ManagePage'));
const ManageUser = lazy(() => import('./modules/user/ManageUser'));
const ManageAddUser = lazy(() => import('./modules/user/ManageAddUser'));
const ManageUpdateUser = lazy(() => import('./modules/user/ManageUpdateUser'));
const ManageTable = lazy(() => import('./modules/table/ManageTable'));
const ManageAddTable = lazy(() => import('./modules/table/ManageAddTable'));
const ManageFood = lazy(() => import('./modules/food/ManageFood'));
const ManageAddFood = lazy(() => import('./modules/food/ManageAddFood'));
const ManageUpdateFood = lazy(() => import('./modules/food/ManageUpdateFood'));
const ManageInvoice = lazy(() => import('./modules/invoice/ManageInvoice'));

function App() {
  const { user } = useContext(Context);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <>
          <Route path='/' element={<HomePage />} />
          <Route path="/sign-up" element={user ? <HomePage /> : <SignUpPage />}></Route>
          <Route path="/sign-in" element={!user ? <SignInPage></SignInPage> : <HomePage />}>

          </Route>
          <Route path='/info' element={user ? <Info /> : <SignInPage />}></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
          <Route element={<ManageLayout />}>
            <Route path='/manage' element={<ManagePage />}></Route>
            <Route path='/manage/user' element={<ManageUser />}></Route>
            <Route
              path="/manage/add-user"
              element={<ManageAddUser />}
            ></Route>
            <Route
              path="/manage/update-user"
              element={<ManageUpdateUser/>}
            ></Route>
            <Route path='/manage/table' element={<ManageTable />}></Route>
            <Route path='/manage/add-table' element={<ManageAddTable />}></Route>
            <Route path='/manage/update-table' element={<ManageUpdateTable />}></Route>
            <Route path='/manage/food' element={<ManageFood />}></Route>
            <Route path='/manage/add-food' element={<ManageAddFood />}></Route>
            <Route path='/manage/update-food' element={<ManageUpdateFood />}></Route>
            <Route path='/manage/invoice' element={<ManageInvoice />}></Route>
          </Route>
        </>
      </Routes>
    </Suspense>
  );
}

export default App;