import React, { useContext, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { Context } from './context/Context';
import PageNotFound from './pages/PageNotFound';
import ManageLayout from './modules/manage/ManageLayout';
import ManageUpdateTable from './modules/table/ManageUpdateTable.jsx';
import Info from './pages/Info.jsx';
import PrivateRoute from './utils/private-route.js';

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
  const isValidAdmin = user && user.rows2 && user.rows2[0].fk_id_type_account == '72b0ed22-9d64-4bf2-9708-35ea731dc1bb';
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
          <Route element={<ManageLayout /> }>
            <Route path='/manage' element={
              <PrivateRoute>
                <ManagePage />
              </PrivateRoute>
              } 
              />
            <Route path='/manage/user' element={
              <PrivateRoute>
                <ManageUser />
              </PrivateRoute>
            }></Route>
            <Route
              path="/manage/add-user"
              element={
                <PrivateRoute>
                  <ManageAddUser />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/manage/update-user"
              element={
                <PrivateRoute>
                  <ManageUpdateUser/>
                </PrivateRoute>
              }
            ></Route>
            <Route path='/manage/table' element={
              <PrivateRoute>
                <ManageTable />
              </PrivateRoute>
            }></Route>
            <Route path='/manage/add-table' element={
              <PrivateRoute>
                <ManageAddTable />
              </PrivateRoute>
            }></Route>
            <Route path='/manage/update-table' element={
              <PrivateRoute>
               <ManageUpdateTable />
              </PrivateRoute>
            }></Route>
            <Route path='/manage/food' element={
              <PrivateRoute>
                <ManageFood />
              </PrivateRoute>
            }></Route>
            <Route path='/manage/add-food' element={
              <PrivateRoute>
                <ManageAddFood />
              </PrivateRoute>
            }></Route>
            <Route path='/manage/update-food' element={
              <PrivateRoute>
                <ManageUpdateFood />
              </PrivateRoute>
            }></Route>
            <Route path='/manage/invoice' element={
              <PrivateRoute>
                <ManageInvoice />
              </PrivateRoute>
            }></Route>
          </Route>
        </>
      </Routes>
    </Suspense>
  );
}

export default App;