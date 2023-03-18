import {View} from 'react-native';
import React from 'react';
import PaginationDot from 'react-native-animated-pagination-dot';
import Btn from '../common/Btn';
import base from '../../styles/base';
import colors from '../../styles/colors';

interface IPagination {
  currentPage: number;
  changePage: Function;
  maxPage: number;
}
const CharPagination = ({currentPage, maxPage, changePage}: IPagination) => {
  return (
    <View style={[base.paginationContainer, {padding: 10}]}>
      <Btn
        title="Prev"
        w={100}
        press={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        bg={currentPage === 1 ? colors.text_gray : undefined}
      />
      <PaginationDot
        activeDotColor={'white'}
        curPage={currentPage - 1}
        maxPage={maxPage}
        sizeRatio={1.5}
      />
      <Btn
        title="Next"
        w={100}
        press={() => changePage(currentPage + 1)}
        disabled={currentPage === maxPage}
        bg={currentPage === maxPage ? colors.text_gray : undefined}
      />
    </View>
  );
};

export default CharPagination;