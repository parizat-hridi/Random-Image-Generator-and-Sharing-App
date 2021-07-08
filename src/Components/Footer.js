import React from 'react'

export const Footer = () => {

  return (

    <>
      <footer className="text-center text-lg-start bg-light text-dark text-muted">

        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >

          <div className="me-5 d-none d-lg-block">
            <span className="fw-bold">Get connected with me on social networks:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/parizat.hridii" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com/BintaParizat" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="https://www.instagram.com/parizat_hridi/" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://bd.linkedin.com/in/parizat-binta-kabir-2a72ba197" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/parizat-hridi" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>

        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4 ">
                  <i className="fas fa-gem me-3 " style={{ color: 'green' }}></i>Company name
                </h6>
                <p>
                  Fyon S.R.L
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4"><i class="fas fa-cart-arrow-down" style={{ color: 'green' }}></i>&ensp;
                  Products
                </h6>
                <p>
                  <a href="#!" className="text-reset">Angular</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">React</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Vue</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Laravel</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4" ><i class="fas fa-link" style={{ color: 'green' }}></i>&ensp;
                  Useful links
                </h6>
                <p>
                  <a href="#!" className="text-reset">Pricing</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Settings</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Orders</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4"><i class="fas fa-id-card-alt" style={{ color: 'green' }}></i>&ensp;
                  Contact
                </h6>
                <p><i className="fas fa-home me-3"></i>Dhaka, Bangladesh</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  parizatbintekabir@gmail.com
                </p>
                <p><i className="fas fa-phone me-3"></i> +880 1866096206</p>
                <p><i className="fas fa-print me-3"></i> +880 1234567890</p>
              </div>

            </div>

          </div>
        </section>



        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2021 Copyright:parizatbintekabir
        </div>

      </footer>
    </>
  )
}
