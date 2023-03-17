import {View} from 'react-native';
import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';
import Btn from './Btn';
import base from '../../styles/base';
import colors from '../../styles/colors';

interface IPagination {
  currentPage: number;
  info: any;
  onPrev: Function;
  onNext: Function;
}
const Pagination = ({currentPage, info, onPrev, onNext}: IPagination) => {
  return (
    <View style={base.paginationContainer}>
      <Btn
        title="Prev"
        w={100}
        press={() => onPrev(info.prev)}
        disabled={info.prev === null}
        bg={info.prev === null ? colors.text_gray : undefined}
      />
      <PaginationDot
        activeDotColor={'white'}
        curPage={currentPage - 1}
        maxPage={info.pages}
        sizeRatio={1.5}
      />
      <Btn
        title="Next"
        w={100}
        press={() => onNext(info.next)}
        disabled={info.next === null}
        bg={info.next === null ? colors.text_gray : undefined}
      />
    </View>
  );
};

export default Pagination;
