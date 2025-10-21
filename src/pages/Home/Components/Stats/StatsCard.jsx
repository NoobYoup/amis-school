import Card from '@/components/Card/Card';
import styles from '@/components/Card/Card.module.scss';

import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StatsCard = ({ number, label, className, variant }) => (
    <Card className={className} variant={variant}>
        <span className={cx('stat-number')}>{number}</span>
        <div className={cx('stat-label')}>{label}</div>
    </Card>
);

export default StatsCard;
