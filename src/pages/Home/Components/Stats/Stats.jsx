import styles from './Stats.module.scss';
import classNames from 'classnames/bind';
import StatsCard from './StatsCard';

const cx = classNames.bind(styles);

const stats = [
    { number: '15+', label: 'Năm kinh nghiệm' },
    { number: '100+', label: 'Học sinh' },
    { number: '20+', label: 'Giáo viên' },
    { number: '100%', label: 'Chất lượng' },
];

function Stats() {
    return (
        <section className={cx('stats-section')}>
            <div className="container">
                <div className="row">
                    {stats.map((item, idx) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={idx}>
                            <StatsCard number={item.number} label={item.label} variant="stats" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Stats;
