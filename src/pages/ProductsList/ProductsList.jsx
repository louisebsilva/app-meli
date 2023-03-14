import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import useProductsListService from '../ProductsList/hooks/useProductsListService';
import Product from './Product/Product';
import Loader from '../../components/Loader/Loader';
import './styles.scss';

const ProductsList = () => {
  const location = useLocation();
  const [pageNumber, setPageNumber] = useState(0);
  const { querySearch } = location.state || '';
  const { productsList, loading } = useProductsListService(querySearch);
  const productsPerPage = 4;
  const visitedPages = pageNumber * productsPerPage;

  const handleChangePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const renderProductsWithPagination = () => {
    const pageCount = Math.ceil(productsList.length / productsPerPage);

    return (
      <section>
        {productsList
          .slice(visitedPages, visitedPages + productsPerPage)
          .map((data) => (
            <Product data={data} key={data?.id} />
          ))}
        <ReactPaginate
          previousLabel="< Anterior"
          nextLabel="Siguiente >"
          pageCount={pageCount}
          onPageChange={handleChangePage}
          containerClassName="pagination"
          activeClassName="pagination-active"
          previousClassName="previous-page"
          nextClassName="next-page"
        />
      </section>
    );
  };

  return (
    <main className={loading ? '' : 'product-list'} data-testid="product-list">
      {productsList.length > 0 ? (
        renderProductsWithPagination()
      ) : loading ? (
        <Loader />
      ) : (
        <p>No se encontraron productos</p>
      )}
    </main>
  );
};

export default ProductsList;
