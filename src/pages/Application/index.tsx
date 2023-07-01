import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import styles from './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.applications}>
        <Card className={styles.item} title="Card title" bordered={true}>
          Card content
        </Card>
        <Card className={styles.item} title="Card title" bordered={true}>
          Card content
        </Card>
        <Card className={styles.item} title="Card title" bordered={true}>
          Card content
        </Card>
        <Card className={styles.item} title="Card title" bordered={true}>
          Card content
        </Card>
        <Card className={styles.item} title="Card title" bordered={true}>
          Card content
        </Card>
        <Card className={styles.item} title="Card title" bordered={true}>
          Card content
        </Card>
      </div>
    </PageContainer>
  );
};

export default HomePage;
