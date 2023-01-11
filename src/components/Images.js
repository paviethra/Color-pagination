import { useState } from "react";
import ReactPaginate from 'react-paginate';

function Images(props){
    const {data} = props;
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

 
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
    return (
        <>
        <div className="images">
            {currentItems.map(image=>{
                return (
                    <div className="image">
                        <img src={image.url} alt='no_image_found' />

                    </div>
                );
            })}
        </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        </>
      );
}

export default Images;