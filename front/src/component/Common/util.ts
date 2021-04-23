import { CategoryStandInfo } from '../Category/DataModel';

export const getCategoryNameFromId = (id: number): string | undefined => {
    return CategoryStandInfo.find((eachId) => eachId.id == id)?.name;
};

export const getNumberString = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};