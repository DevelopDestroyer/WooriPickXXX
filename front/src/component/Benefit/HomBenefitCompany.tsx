import React from 'react';
import { BenefitCompany } from './DataModel';

const HomBenefitCompany: React.FC<BenefitCompany> = (props: BenefitCompany) => {
    return <>{props.companyName}</>;
};

export default HomBenefitCompany;
