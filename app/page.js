'use client';
import Dashboard from './pages/Dashboard';
import EmployeeCreate from './pages/employee/Create';
import EmployeeIndex from './pages/employee/Index';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import PaymentsIndex from './pages/payments/Index';
import PaymentsCreate from './pages/payments/Create';
import ProductsIndex from './pages/products/Index';
import ProductsCreate from './pages/products/Create';
import UsersIndex from './pages/users/Index';
import UsersCreate from './pages/users/Create';
import EmployeeEdit from './pages/employee/Edit';
import PaymentsEdit from './pages/payments/Edit';
import ProductsEdit from './pages/products/Edit';
import UsersEdit from './pages/users/Edit';
import SideNav from './components/SideNav';

export default function Home() {
  return (
    <BrowserRouter>
      <SideNav>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/employee" element={<EmployeeIndex/>} />
        <Route path="/employee/create" element={<EmployeeCreate/>} />
        <Route path="/employee/edit/:id" element={<EmployeeEdit/>} />
        <Route path="/payments" element={<PaymentsIndex/>} />
        <Route path="/payments/create" element={<PaymentsCreate/>} />
        <Route path="/payments/edit/:id" element={<PaymentsEdit/>} />
        <Route path="/products" element={<ProductsIndex/>} />
        <Route path="/products/create" element={<ProductsCreate/>} />
        <Route path="/products/edit/:id" element={<ProductsEdit/>} />
        <Route path="/users" element={<UsersIndex/>} />
        <Route path="/users/create" element={<UsersCreate/>} />
        <Route path="/users/edit/:id" element={<UsersEdit/>} />

      </Routes>
      </SideNav>
    </BrowserRouter>
  )
}
