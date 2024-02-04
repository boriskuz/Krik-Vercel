import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useRouter } from 'next/router';

interface BasicPaginationProps {
  status: string;
  pages: number;
}

const BasicPagination = ({ status, pages }: BasicPaginationProps) => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<unknown>, pageNo: number) => {
    {
      status === 'ongoing'
        ? router.push({
            pathname: `/projects`,
            query: { ...router.query, pageOngoing: pageNo },
          })
        : router.push({
            pathname: `/projects`,
            query: { ...router.query, pageFinished: pageNo },
          });
    }
  };

  return <Pagination count={pages} hideNextButton={true} hidePrevButton={true} size="large" onChange={handleChange} />;
};

export default BasicPagination;
