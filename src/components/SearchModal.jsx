import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Transition from "../utils/Transition";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"
import { GLOBAL_TYPES } from "../redux/actions/GLOBAL_TYPES";
import { BiSearch } from "react-icons/bi";



function SearchModal({ id, searchId, modalOpen, setModalOpen, data }) {
  const modalContent = useRef(null);
  const searchInput = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const auth = useSelector(state => state.auth);


  useEffect(() => {
    if (!auth.token) {
      navigate('/');
    }
  }, [])

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!modalOpen || modalContent.current.contains(target)) return;
      setModalOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });


  useEffect(() => {
    modalOpen && searchInput.current.focus();
  }, [modalOpen]);

  const [filteredData, setFilteredData] = useState(data);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data.filter((value) => {
      return value.Name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData(data);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleSearchField = (ticker) => {
    console.log(ticker)
    dispatch({
      type: GLOBAL_TYPES.TICKER,
      payload: {
        ticker: ticker,
      }
    })
    // setModalOpen(!modalOpen);
    navigate('/stocksInfo');
  }

  return (
    <>
      {/* Modal backdrop */}
      <Transition
        className="fixed inset-0 bg-slate-900 bg-opacity-30 z-50 transition-opacity"
        show={modalOpen}
        enter="transition ease-out duration-200"
        enterStart="opacity-0"
        enterEnd="opacity-100"
        leave="transition ease-out duration-100"
        leaveStart="opacity-100"
        leaveEnd="opacity-0"
        aria-hidden="true"
      />
      {/* Modal dialog */}
      <Transition
        id={id}
        className="fixed inset-0 z-50 overflow-auto flex items-start top-20 mb-4 justify-center transform px-4 sm:px-6"
        role="dialog"
        aria-modal="true"
        show={modalOpen}
        enter="transition ease-in-out duration-200"
        enterStart="opacity-0 translate-y-4"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-in-out duration-200"
        leaveStart="opacity-100 translate-y-0"
        leaveEnd="opacity-0 translate-y-4"
      >
        <div
          ref={modalContent}
          className="bg-white overflow-auto max-w-2xl w-full max-h-full rounded shadow-lg scrollbar-hide"
        >
          {/* Search form */}
          <form className="border-b border-slate-200">
            <div className="relative">
              <label htmlFor={searchId} className="sr-only">
                Search
              </label>
              <input
                id={searchId}
                className="w-full border-0 focus:ring-transparent placeholder-slate-400 appearance-none py-3 pl-10 pr-4"
                type="search"
                placeholder="Search Anything…"
                ref={searchInput}
                value={wordEntered}
                onChange={handleFilter}
              />
              <button
                className="absolute inset-0 right-auto group"
                type="submit"
                aria-label="Search"
              >
                <BiSearch/>
              </button>
            </div>
          </form>
          <div className="py-4 px-2 mb-3 last:mb-0">
            <ul className="text-sm">
              {filteredData.length ? (
                <div className="dataResult">
                  {filteredData.slice(0, 30).map((value, key) => {
                    return (
                      <li key={key}>
                        <Link
                          className="flex items-center p-2 text-slate-800 hover:text-white hover:bg-indigo-500 rounded group"
                          to="/stocksInfo"
                          onClick={(e) => handleSearchField(value.Symbol)}
                        >
                          <svg
                            className="w-4 h-4 fill-current text-slate-400 group-hover:text-white group-hover:text-opacity-50 shrink-0 mr-3"
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.707 14.293v.001a1 1 0 01-1.414 1.414L11.185 12.6A6.935 6.935 0 017 14a7.016 7.016 0 01-5.173-2.308l-1.537 1.3L0 8l4.873 1.12-1.521 1.285a4.971 4.971 0 008.59-2.835l1.979.454a6.971 6.971 0 01-1.321 3.157l3.107 3.112zM14 6L9.127 4.88l1.521-1.28a4.971 4.971 0 00-8.59 2.83L.084 5.976a6.977 6.977 0 0112.089-3.668l1.537-1.3L14 6z" />
                          </svg>
                          <span>{value.Name}</span>
                        </Link>
                      </li>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-400 ml-8">Not Found</p>
              )}
            </ul>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default SearchModal;
