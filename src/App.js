import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SendOtp from './pages/sendOtp/SendOtp';
import VerifyOtp from './pages/verifyOtp/VerifyOtp';

const App = () => {
    return <>
    <Routes>
    <Route path="/sendOtp" element={<SendOtp />} />
    <Route path="/verifyOtp" element={<VerifyOtp />} />
    <Route path="*" element={<SendOtp />} />
    </Routes>
    </>
}
export default App;