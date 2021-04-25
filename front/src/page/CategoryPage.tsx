import React, { useRef, useState } from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import SignupCategoryComponent from '../component/Signup/SignupCategoryComponent';
import SignupFinishComponent from '../component/Signup/SignupFinishComponent';

const CategoryPage: React.FC = () => {
    const sliderRef = useRef<Slider>(null);
    const history = useHistory();
    const [currentIndex, setIndex] = useState(0);

    const onMove = async (index: number, move: number) => {
        if (index + move < 0) {
            return;
        }
        setIndex(index + move);
        if (index + move >= 2) {
            history.replace('/');
        } else {
            sliderRef.current && sliderRef.current.slickGoTo(index + move);
        }
    };

    return (
        <>
            {currentIndex === 0 ? (
                <SignupCategoryComponent
                    key={0}
                    onMoveButtonClick={(move: number) => {
                        onMove(0, move);
                    }}
                />
            ) : (
                <SignupFinishComponent
                    key={1}
                    onMoveButtonClick={(move: number) => {
                        onMove(1, move);
                    }}
                />
            )}
        </>
    );
};

export default CategoryPage;
