// import { ArrowLeftIcon, ArrowRightIcon } from '../assets/icons/svg-icons';
import { ChevronLeftIcon, ChevronUpIcon } from '../../assets/icons/svg-icons';
import { DOTS, usePagination } from '../../hooks/usePagination';

import Button from './Button';
import Wrapper from './Wrapper';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  // if (currentPage === 0 || paginationRange.length < 2) {
  //   return null;
  // }

  const lastPage = paginationRange[paginationRange.length - 1];
  return (
    <Wrapper
      fluid
      className='flex max-w-[14rem] items-start justify-between gap-[0.62rem] '
    >
      <Button
        className='flex border-none rounded-none items-center justify-center disabled:pointer-events-none [&>*]:disabled:opacity-[.4] w-[2rem] disabled:bg-gray-3 h-[2rem] bg-color '
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {currentPage === 1 ? (
          <ChevronUpIcon className='-rotate-90' />
        ) : (
          <ChevronLeftIcon className='-rotate-180' />
        )}
      </Button>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <Button
              key={index}
              className='flex w-[2rem] h-[2rem] justify-center items-center rounded-none text-base font-light leading-[100%] text-center text-color border-gray-3'
            >
              &#8230;
            </Button>
          );
        }

        return (
          <Button
            key={index}
            className={`flex w-[2rem] h-[2rem] justify-center items-center text-base font-light leading-[100%] border-gray-3 rounded-none text-color text-center  ${
              pageNumber === currentPage && 'bg-secondary'
            } `}
            onClick={() => onPageChange(Number(pageNumber))}
            disabled={pageNumber === currentPage}
          >
            {pageNumber}
          </Button>
        );
      })}

      <Button
        className='flex border-none rounded-none items-center justify-center disabled:pointer-events-none [&>*]:disabled:opacity-[.4] w-[2rem] disabled:bg-gray-3 h-[2rem] bg-color '
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {currentPage === lastPage ? (
          <ChevronUpIcon className='rotate-90' />
        ) : (
          <ChevronLeftIcon />
        )}
      </Button>
    </Wrapper>
  );
};

export default Pagination;
