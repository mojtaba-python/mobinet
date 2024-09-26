import { FaSearch } from "react-icons/fa";
import { ORIGIN } from '../../helpers/colors';
import { Link, useSearchParams } from "react-router-dom";
import { dataProduct } from "../../data/data";
import './search.css';
const Search = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const fetchData = dataProduct();
    console.log(searchParams);

    return (
        <>
            <div className=' box_input_search' dir='ltr'>
                <span className="icon_search"
                    id="basic-addon1"
                    style={{ backgroundColor: ORIGIN }}>
                    <FaSearch style={{ color: '#fff' }} />
                </span>
                <input id="input_search" dir="rtl" type="text"
                    value={searchParams.get("filter") || ""}
                    onChange={event => {
                        let filter = event.target.value;
                        if (filter) {
                            setSearchParams({ filter });
                        } else {
                            setSearchParams({});
                        }
                    }}
                    className='form_search'
                    placeholder='جستجوی موبایل'
                />
                <div className="box_search">
                    <span style={{ color: 'gray' }} >
                        <FaSearch style={{ fontWeight: '100' }} />
                        جستجو برای ...
                    </span>
                    {
                        fetchData.filter((product) => {
                            let filter = searchParams.get("filter");
                            if (!filter) return false;
                            let name = product.keySearch.toLowerCase();
                            return name.includes(filter.toLowerCase());

                        })

                            .map((product) => (
                                <div className="box_search_att">
                                    <Link >
                                        {product.keySearch}
                                    </Link>
                                </div>
                            ))
                    }
                </div>
            </div>
        </>
    )
}
export default Search