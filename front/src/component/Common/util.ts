import { CategoryStandInfo } from '../Category/DataModel';
import { GivingStandInfo } from '../Giving/DataModel';

export const getCategoryNameFromId = (id: number): string => {
    const target = CategoryStandInfo.find((eachId) => eachId.id == id);
    return target ? target.name : '';
};

export const getGivingNameFromId = (id: number): string => {
    const target = GivingStandInfo.find((eachId) => eachId.id == id);
    return target ? target.name : '';
};

export const getNumberString = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getCategoryImgPath = (id: number): string => {
    const prefix = '/images/';
    switch (id) {
        case 101:
            return prefix + 'icn_lowPlastic.png';
        case 102:
            return prefix + 'icn_lowCarbon.png';
        case 103:
            return prefix + 'icn_noAnimalTesting.png';
        case 104:
            return prefix + 'icn_children.png';
        case 105:
            return prefix + 'icn_oldman.png';
        case 106:
            return prefix + 'icn_disabled.png';
        case 107:
            return prefix + 'icn_disabled_Product.png';
        case 108:
            return prefix + 'icn_relief.png';
        case 109:
            return prefix + 'icn_vegan.png';
    }
    return '';
};
