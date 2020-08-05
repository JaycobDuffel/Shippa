import React from "react";

export default function FAQPage() {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-10 mx-auto">
          <div className="accordion" id="faqExample">
            <div className="card">
              <div className="card-header p-2" id="headingOne">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Q1: Lorem ipsum dolor sit amet?
                  </button>
                </h5>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#faqExample"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Fugit, error amet numquam iure provident
                  volupleasecallusptate esse quasi, veritatis totam voluptas
                  nostrum quisquam eum porro a pariatur veniam.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-2" id="headingTwo">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Q2: Lorem ipsum dolor sit amet?
                  </button>
                </h5>
              </div>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#faqExample"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident volupleasecallusptate
                  esse quasi, veritatis totam voluptas nostrum quisquam eum
                  porro a pariatur veniam.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-2" id="headingThree">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Q3. Lorem ipsum dolor sit amet?
                  </button>
                </h5>
              </div>
              <div
                id="collapseThree"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#faqExample"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident volupleasecallusptate
                  esse quasi, veritatis totam voluptas nostrum quisquam eum
                  porro a pariatur veniam.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-2" id="headingFour">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Q4. Lorem ipsum dolor sit amet?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingFour"
                data-parent="#faqExample"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident volupleasecallusptate
                  esse quasi, veritatis totam voluptas nostrum quisquam eum
                  porro a pariatur veniam.
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header p-2" id="headingFive">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Q5. Lorem ipsum dolor sit amet?
                  </button>
                </h5>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingFive"
                data-parent="#faqExample"
              >
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugit, error amet numquam iure provident volupleasecallusptate
                  esse quasi, veritatis totam voluptas nostrum quisquam eum
                  porro a pariatur veniam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
