import { useGetCharacterByIdQuery, useGetHouseByIdQuery } from '@/lib/api';
import { isErrorWithMessage, isFetchBaseQueryError } from '@/utils/errorHandler';
import { useRouter } from 'next/router';
import { Card, Button, Spin, Alert, Descriptions, Typography } from 'antd';

const { Title, Text } = Typography;

const HouseDetails = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data: house, error, isLoading } = useGetHouseByIdQuery(id);

  const currentLordId = house?.currentLord ? house.currentLord.split('/').pop() : null;
  const { data: currentLord, isLoading: isLoadingLord } = useGetCharacterByIdQuery(currentLordId || '', { skip: !currentLordId });

  const overlordId = house?.overlord ? house.overlord.split('/').pop() : null;
  const { data: overlord, isLoading: isLoadingOverlord } = useGetCharacterByIdQuery(overlordId || '', { skip: !overlordId });

  if (isLoading || isLoadingLord || isLoadingOverlord) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 128px)' }}>
        <Spin size="large" />
      </div>
    );
  }

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
      <Card style={{ marginBottom: '20px' }}>
        <div>
          <Title level={2}>{house?.name}</Title>
          <Text>{house?.region}</Text>
        </div>
        <div className="p-6">
          <Descriptions title="Details" bordered column={1}>
            <Descriptions.Item label="Current Lord">
              {currentLord ? (
                <div>
                  <Text strong>Name:</Text> {currentLord.name}<br />
                  <Text strong>Gender:</Text> {currentLord.gender}<br />
                  <Text strong>Aliases:</Text> {currentLord.aliases.join(', ') || 'N/A'}
                </div>
              ) : (
                <Text>N/A</Text>
              )}
            </Descriptions.Item>

            <Descriptions.Item label="Overlord">
              {overlord ? (
                <div>
                  <Text strong>Name:</Text> {overlord.name}<br />
                  <Text strong>Region:</Text> {overlord.region || 'N/A'}<br />
                  <Text strong>Founded:</Text> {overlord.founded || 'N/A'}
                </div>
              ) : (
                <Text>N/A</Text>
              )}
            </Descriptions.Item>
          </Descriptions>

          <div className="flex justify-center mt-4">
            <Button onClick={() => router.push('/')} type="primary">Back to Houses</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HouseDetails;
