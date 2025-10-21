import Card from '@/components/Card/Card';
import styles from '@/components/Card/Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FeatureCard = ({ icon, title, description, className }) => (
    <Card className={cx('feature-card', className)} variant="feature">
        <div className={cx('feature-icon')}>{icon}</div>
        <h3 className={cx('feature-title')}>{title}</h3>
        <p className={cx('description')}>{description}</p>
    </Card>
);

export default FeatureCard;
