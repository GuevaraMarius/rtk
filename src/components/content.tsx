import { useGetHousesQuery } from '@/lib/api';
import { isErrorWithMessage, isFetchBaseQueryError } from '@/utils/errorHandler';
import Link from 'next/link';
import { Card, Spin, Alert } from 'antd';

const Content = () => {
  const { data: houses, error, isLoading } = useGetHousesQuery();

  if (isLoading) return <div style={{ textAlign: 'center', marginTop: '20px' }}><Spin size="large" /></div>;
  
  if (error) {
    let errorMessage = 'An error occurred';
    if (isFetchBaseQueryError(error)) {
      errorMessage = 'Error: Fetch base query error';
    } else if (isErrorWithMessage(error)) {
      errorMessage = `Error: ${error.message}`;
    }
    return <Alert message={errorMessage} type="error" showIcon style={{ margin: '20px' }} />;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Game of Thrones Houses</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses?.map((house) => (
          <Card
            key={house.url}
            title={house.name}
            extra={<Link href={`/house/${house.url.split('/').pop()}`}>View</Link>}
            style={{ width: 300, margin: '0 auto' }}
            hoverable
          >
            <Link href={`/house/${house.url.split('/').pop()}`}>
              <p><strong>Region:</strong> {house.region}</p>
              <p><strong>Coat of Arms:</strong></p>
            </Link>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Content;
