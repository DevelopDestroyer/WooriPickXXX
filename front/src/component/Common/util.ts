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
