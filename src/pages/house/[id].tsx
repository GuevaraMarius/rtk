import { useGetCharacterByIdQuery, useGetHouseByIdQuery } from '@/lib/api';
import { isErrorWithMessage, isFetchBaseQueryError } from '@/utils/errorHandler';
import { useRouter } from 'next/router';

const HouseDetails = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const { data: house, error, isLoading } = useGetHouseByIdQuery(id);
  
  const currentLordId = house?.currentLord ? house.currentLord.split('/').pop() : null;
  const { data: currentLord, isLoading: isLoadingLord } = useGetCharacterByIdQuery(currentLordId || '', { skip: !currentLordId });

  const overlordId = house?.overlord ? house.overlord.split('/').pop() : null;
  const { data: overlord, isLoading: isLoadingOverlord } = useGetCharacterByIdQuery(overlordId || '', { skip: !overlordId });

  if (isLoading || isLoadingLord || isLoadingOverlord) return <div className="text-center mt-20">Loading...</div>;
  if (error) {
    let errorMessage = 'An error occurred';
    if (isFetchBaseQueryError(error)) {
      errorMessage = 'Error: Fetch base query error';
    } else if (isErrorWithMessage(error)) {
      errorMessage = `Error: ${error.message}`;
    }
    return <div className="text-center mt-20">{errorMessage}</div>;
  }
  return (
    <div className="container mx-auto px-4">
    <div className="bg-white shadow-md rounded-lg overflow-hidden my-8">
      <div className="bg-gray-800 p-4">
        <h1 className="text-3xl text-white font-bold text-center">{house?.name}</h1>
        <p className="text-gray-300 text-center">{house?.region}</p>
      </div>
      <div className="p-6">
       <div className="mb-4">
          <h2 className="text-2xl font-semibold">Current Lord:</h2>
          {currentLord ? (
            <div>
              <p><strong>Name:</strong> {currentLord.name}</p>
              <p><strong>Gender:</strong> {currentLord.gender}</p>
              <p><strong>Aliases:</strong> {currentLord.aliases.join(', ') || 'N/A'}</p>
            </div>
          ) : (
            <p>N/A</p>
          )}
        </div>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Overlord:</h2>
          {overlord ? (
            <div>
              <p><strong>Name:</strong> {overlord.name}</p>
              <p><strong>Region:</strong> {overlord.region || 'N/A'}</p>
              <p><strong>Founded:</strong> {overlord.founded || 'N/A'}</p>
            </div>
          ) : (
            <p>N/A</p>
          )}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => router.push('/')}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Back to Houses
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HouseDetails;