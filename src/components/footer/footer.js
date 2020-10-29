import React, { Fragment, useReducer } from "react";



import "./footer.css";
import reducer from "../../reducer/reducer";

export default function Footer() {
  const yearsArr = [2011, 2013, 2015, 2017, 2019];
  const [state, dispatch] = useReducer(reducer, { activeYear: 0 });
 
  

  const previousPage = () => {
    if (!state.activeYear) return;
    dispatch({ type: "back" });
    
  };
  const nextPage = () => {
    if (state.activeYear === yearsArr.length - 1) return;
    dispatch({ type: "forward" });
    
  };

  return (
    <footer>
      <div className="div-radio-buttons">
        <div className="div-radio">
          {yearsArr.map((year, id) => {
            return (
              <Fragment key={id}>
                <div className="div-years">
                  <label htmlFor={year} hidden={id !== +state.activeYear}>
                    {year}
                  </label>
                  <input
                    type="radio"
                    name="year"
                    id={id}
                    checked={id === +state.activeYear}
                    readOnly
                    onClick={(e) =>
                      dispatch({ type: "setActiveYear", payload: e.target.id })
                    }
                  />
                </div>
                {id < yearsArr.length - 1 ? (
                  <div className="div-line"></div>
                ) : null}
              </Fragment>
            );
          })}
        </div>
      </div>

      <div className="div-slide-btns">
        <button className="slide-btns-back" onClick={previousPage}>
          <i className="arrow-back fal fa-long-arrow-left fa-3x"></i>
        </button>
        <button className="slide-btns-forward" onClick={nextPage}>
          <i className="arrow-forward fal fa-long-arrow-right fa-3x"></i>
        </button>

        <label className="label-active-page">{+state.activeYear + 1}</label>
        <label className="label-active-page">/ {yearsArr.length}</label>
      </div>
    </footer>
  );
}
