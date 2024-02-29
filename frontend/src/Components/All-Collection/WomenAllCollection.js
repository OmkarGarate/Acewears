import React, { useState } from 'react';
import Navbar from '../Home-Comp/Navbar';
import img1 from "../../Images/Home-Assets/productNow1.png";
import img2 from "../../Images/Home-Assets/Cart.png";
import img3 from "../../Images/Home-Assets/DefaultLike.png";
import img4 from "../../Images/next.png"
import Footer from '../Home-Comp/Footer';


function WomenAllCollection() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerRow = 4;
  const rowsPerPage = 5;
  const totalProducts = 167;
  const totalPages = Math.ceil(totalProducts / (productsPerRow * rowsPerPage));

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const renderPaginationNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 3; 

  
    if (totalPages > maxVisiblePages) {
      const startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
      const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

      if (startPage > 1) {
        pageNumbers.push(1);
        if (startPage > 2) {
          pageNumbers.push('...');
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pageNumbers.push('...');
        }
        pageNumbers.push(totalPages);
      }
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers.map((pageNumber, index) => (
      <span key={index} className={pageNumber === currentPage ? 'active' : ''} onClick={() => handlePageChange(pageNumber)}>{pageNumber}</span>
    ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * rowsPerPage * productsPerRow;
  const endIndex = Math.min(startIndex + (rowsPerPage * productsPerRow), totalProducts);
  const visibleProducts = Array.from({ length: endIndex - startIndex }, (_, index) => index + startIndex);

  return (
    <>
      <Navbar />
      <div className="sub-title">
        <h1> SHOP WOMEN'S</h1>
        <p className='result-text'>Showing {startIndex + 1} - {endIndex} out of {totalProducts} Results</p>
        <div className="product-section">
          {[...Array(rowsPerPage)].map((_, rowIndex) => (
            <div key={rowIndex} className="product-row">
              {visibleProducts.slice(rowIndex * productsPerRow, (rowIndex + 1) * productsPerRow).map(index => (
                <div key={index} className="product-item">
                  <img src={img1} alt="" className="hoverable" />
                  <div className="hover-content">
                    <img src={img2} alt="" className="hover-img" />
                    <img src={img3} alt="" className="hover-img2" />
                  </div>
                  <div className="product-details">
                    <p className="model-type">Pink Overload Over - Sized T-shirt</p>
                    <div className="price-container">
                      <p className="price">
                        &#8377;599 <span className="product-offer">-20% OFF</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1} className='page-text'>Page</button>
          {renderPaginationNumbers()}
          <img className='next-page-btn' onClick={nextPage} disabled={currentPage === totalPages} src={img4} alt="" />
        </div>
      </div>

      <div class="horizontal-line"></div>

      <Footer />
    </>
  );
}

export default WomenAllCollection;

