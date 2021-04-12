import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import Slider, { Settings } from 'react-slick';
import RenderComponent, {
  RenderComponentProps,
} from '../component/RenderComponent';
import { useSetRecoilState } from 'recoil';
import { IsSplashState } from '../recoil/Session';

const useStyles = makeStyles((theme) => ({
  slick: {
    height: '100%',
    '& > .slick-list': {
      height: '100% !important',
    },
    '& > .slick-list > .slick-track': {
      height: '100% !important',
    },
  },
}));

const setting: Settings = {
  swipe: false,
  useTransform: true,
};

const rendingData: Array<RenderComponentProps> = [
  {
    title: { first: '내맘대로', second: '혜택고르기!' },
    description: ['정해진 틀에 맞춰서', '혜택받기는 싫어!'],
    highLight: '내가 관심있는 카테고리 대로 혜택을!',
    imgUrl: '',
  },
  {
    title: { first: '나는 소비하면서', second: '사회까지 생각한다!' },
    description: ['환경, 유기견, 소상공인', '저소득층, 동물보호...'],
    highLight: '작은 소비 하나하나 모여 사회를 개선!',
    imgUrl: '',
  },
  {
    title: { first: '내가 이 골목 혜택왕!', second: '친구들과 혜택대결' },
    description: ['누가 누가', '더 많이 혜택을 모았나?'],
    highLight: '여기 모여라! 친구들끼리 혜택 대결!',
    imgUrl: '',
  },
  {
    title: { first: '혜택을 모아모아', second: '기부까지?!' },
    description: ['혜택받은 금액을 인출하거나', '원하는 곳에 기부할 수 있지!'],
    highLight: "우리은행에서 '모인 기부액의 2배를' 기부!",
    imgUrl: '',
  },
];

const RenderPage: React.FC = () => {
  const classes = useStyles();
  const sliderRef = useRef<Slider | null>(null);
  const setSplashState = useSetRecoilState(IsSplashState);

  const backClick = (index: number) => {
    console.log(`Back Click in ${index}`);
    if (index > 0 && sliderRef.current) {
      sliderRef.current.slickGoTo(index - 1);
    }
  };

  const nextClick = (index: number) => {
    console.log(`Next Click in ${index}`);
    if (sliderRef.current) {
      if (index < rendingData.length - 1) {
        sliderRef.current.slickGoTo(index + 1);
      } else if (index === rendingData.length - 1) {
        setSplashState(true);
      }
    }
  };

  return (
    <Slider {...setting} className={classes.slick} ref={sliderRef}>
      {rendingData.map((eachProps: RenderComponentProps, index: number) => {
        return (
          <RenderComponent
            backClick={() => backClick(index)}
            nextClick={() => nextClick(index)}
            key={eachProps.highLight}
            isFirst={index === 0}
            {...eachProps}
          />
        );
      })}
    </Slider>
  );
};

export default RenderPage;
