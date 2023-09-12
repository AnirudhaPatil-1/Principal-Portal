import React from 'react';

import NavBar from '../components/NavBar';
import PrincipalPortal from '../components/PrincipalPortal';
import WhatsDue from '../components/WhatsDue';
import WhatsNew from '../components/WhatsNew';
import Certifications from '../components/Certifications';
import SchoolTools from '../components/SchoolTools';
import DistrictOps from '../components/DistrictOps';
import Actions from '../components/Actions';
import StudentInfo from '../components/StudentInfo';
import SafeSteps from '../components/SafeSteps';
import Footer from '../components/Footer';



const HomePage = () => {
  return (
    <div>
        <NavBar/>
        <PrincipalPortal/>
        <WhatsDue/>
        <WhatsNew/>
        <Certifications/>
        <SchoolTools/>
        <DistrictOps/>
        <Actions/>
        <StudentInfo/>
        <SafeSteps/>
        <Footer/>
        
        
    </div>
  )
}

export default HomePage