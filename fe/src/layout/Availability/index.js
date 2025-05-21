function Availability() {
  return (
    <>
      <div className="inn-body-section inn-booking">
        <div className="container">
          <div className="row">
            {/* <!--TYPOGRAPHY SECTION--> */}
            <div className="col-md-6">
              <div className="book-title">
                <h2>Check Availability</h2>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="book-form inn-com-form">
                <form className="col s12 ng-pristine ng-valid">
                  <div className="row">
                    <div className="input-field col s6">
                      <input type="text" className="validate" />
                      <label className="">Full Name</label>
                    </div>
                    <div className="input-field col s6">
                      <input type="text" className="validate" />
                      <label>Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input type="text" className="validate" />
                      <label className="">Phone</label>
                    </div>
                    <div className="input-field col s6">
                      <input type="text" className="validate" />
                      <label>Mobile</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input type="text" className="validate" />
                      <label className="">City</label>
                    </div>
                    <div className="input-field col s6">
                      <input type="text" className="validate" />
                      <label>Country</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <div className="select-wrapper">
                        <span className="caret">▼</span>
                        <input
                          type="text"
                          className="select-dropdown"
                          readOnly={true}
                          data-activates="select-options-d7c48083-10ee-530e-e095-e82da336dd13"
                          value="No of adults"
                        />
                        <ul
                          id="select-options-d7c48083-10ee-530e-e095-e82da336dd13"
                          className="dropdown-content select-dropdown"
                          style={{
                            width: "228.85px",
                            position: "absolute",
                            top: "-1.22e-05px",
                            left: "-1.22e-05px",
                            opacity: 0.406737,
                            display: "none",
                          }}
                        >
                          <li className="disabled">
                            <span>No of adults</span>
                          </li>
                          <li className="">
                            <span>1</span>
                          </li>
                          <li className="">
                            <span>2</span>
                          </li>
                          <li className="">
                            <span>3</span>
                          </li>
                          <li className="">
                            <span>4</span>
                          </li>
                        </ul>
                        <select className="initialized" defaultValue="1">
                          {/* <option value="" disabled="" selected="">
                            No of adults
                          </option> */}
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="1">4</option>
                        </select>
                      </div>
                    </div>
                    <div className="input-field col s6">
                      <div className="select-wrapper">
                        <span className="caret">▼</span>
                        <input
                          type="text"
                          className="select-dropdown"
                          readOnly={true}
                          data-activates="select-options-e13a29c5-c8c9-c014-4c30-9a2a8f51c503"
                          value="No of childrens"
                        />
                        <ul
                          id="select-options-e13a29c5-c8c9-c014-4c30-9a2a8f51c503"
                          className="dropdown-content select-dropdown "
                        >
                          <li className="disabled ">
                            <span>No of childrens</span>
                          </li>
                          <li className="">
                            <span>1</span>
                          </li>
                          <li className="">
                            <span>2</span>
                          </li>
                          <li className="">
                            <span>3</span>
                          </li>
                          <li className="">
                            <span>4</span>
                          </li>
                        </ul>
                        <select className="initialized" defaultValue="1">
                          {/* <option value="" disabled="" selected="">
                            No of childrens
                          </option> */}
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="1">4</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        type="text"
                        id="from"
                        name="from"
                        className="hasDatepicker"
                      />
                      <label htmlFor="from">Check In</label>
                    </div>
                    <div className="input-field col s6">
                      <input
                        type="text"
                        id="to"
                        name="to"
                        className="hasDatepicker"
                      />
                      <label htmlFor="to">Check Out</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <textarea
                        id="textarea1"
                        className="materialize-textarea"
                        data-length="120"
                      ></textarea>
                      <label>Message</label>
                      <span
                        className="character-counter"
                        style={{
                          float: "right",
                          fontSize: "12px",
                          height: "1px",
                        }}
                      ></span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        type="submit"
                        value="submit"
                        className="form-btn"
                      />{" "}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* <!--END TYPOGRAPHY SECTION--> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Availability;
