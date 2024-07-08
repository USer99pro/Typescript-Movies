interface PaginationProps{
    totalPages: number;
    onPageChange: (page:number)=> void;
}


const Pagination:React.FC<PaginationProps> = ({totalPages,onPageChange}) =>{


    return(
      <nav className="pagination">
        {
            [...Array(totalPages).keys()].map((index)=>(
                <div className="pagecontainer" key={index} >
                    <a onClick={()=> onPageChange(index+1)}>
                        {index+1} 

                    </a>
                </div>
            ))
        }

      </nav>
    )
}
export default Pagination;
