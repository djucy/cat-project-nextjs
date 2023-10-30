import {useState}from 'react'
import { UsePaginationProps,UsePaginationReturn } from '@/types';

function usePagination({ contentPerPage, count }:UsePaginationProps){
const [page, setPage] = useState(1);
  
 const pageCount = Math.ceil(count / contentPerPage);

  const lastContentIndex = page * contentPerPage;
  
  const firstContentIndex = lastContentIndex - contentPerPage;

  const changePage = (direction: boolean) => {
    setPage((state) => {
      // move forward
      if (direction) {
        // if page is the last page, do nothing
        if (state === pageCount) {
          return state;
        }
        return state + 1;
        // go back
      } else {
        // if page is the first page, do nothing
        if (state === 1) {
          return state;
        }
        return state - 1;
      }
    });
  };

  return {
    totalPages: pageCount,
    nextPage: () => changePage(true),
    prevPage: () => changePage(false),
    setPage,
    firstContentIndex,
    lastContentIndex,
    page,
    // gaps,
  };
}

export default usePagination