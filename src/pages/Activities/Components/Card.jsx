function Card() {
    return (
        <section class="activities-section">
            <div class="container">
                <div class="row" id="activitiesGrid">
                    <div class="col-lg-4 col-md-6 activity-item" data-category="khai-giang">
                        <div class="activity-card">
                            <div class="activity-image">
                                <img
                                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
                                    alt="Lễ Khai Giảng"
                                />
                                <div class="activity-badge">Khai giảng</div>
                            </div>
                            <div class="activity-content">
                                <div class="activity-date">
                                    <i class="fas fa-calendar-alt"></i>
                                    05/09/2024
                                </div>
                                <h3 class="activity-title">Lễ Khai Giảng Năm Học 2024-2025</h3>
                                <p class="activity-description">
                                    Buổi lễ khai giảng trang trọng đánh dấu sự khởi đầu của năm học mới với nhiều hoạt
                                    động ý nghĩa và những lời chúc tốt đẹp cho các em học sinh.
                                </p>
                                <div class="activity-stats">
                                    <span>
                                        <i class="fas fa-images"></i> 45 ảnh
                                    </span>
                                    <span>
                                        <i class="fas fa-video"></i> 3 video
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
