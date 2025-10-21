function Partner() {
    return (
        <section className="partners-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2 className="display-5 fw-bold mb-3">Đối tác của AMIS</h2>
                        <p className="lead">
                            Hợp tác với các tổ chức giáo dục hàng đầu thế giới để mang lại chất lượng giáo dục tốt nhất
                        </p>
                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center g-4">
                    <div className="col-3">
                        <img src="/images/logo_cambridge.png" alt="logo_cambridge" className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="/images/logo_michigan.png" alt="logo_cambridge" className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="/images/logo_wisconsin.png" alt="logo_cambridge" className="img-fluid" />
                    </div>
                    <div className="col-3">
                        <img src="/images/logo_ets.png" alt="logo_cambridge" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partner;
