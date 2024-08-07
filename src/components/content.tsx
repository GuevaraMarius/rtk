import { useGetHousesQuery } from '@/lib/api';
import { isErrorWithMessage, isFetchBaseQueryError } from '@/utils/errorHandler';
import Link from 'next/link';


const Content = () => {
  const { data: houses, error, isLoading } = useGetHousesQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) {
    let errorMessage = 'An error occurred';
    if (isFetchBaseQueryError(error)) {
      errorMessage = 'Error: Fetch base query error';
    } else if (isErrorWithMessage(error)) {
      errorMessage = `Error: ${error.message}`;
    }
    return <div>{errorMessage}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Game of Thrones Houses</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses?.map((house) => (
          <li key={house.url} className="bg-gray-100 p-4 rounded shadow">
            <Link href={`/house/${house.url.split('/').pop()}`}>
            <div className="bg-gray-800 p-4">
          <h4 className="text-3xl text-white font-bold text-center">{house.name}</h4>
        </div>

                <p><strong>Region:</strong> {house.region}</p>
                <p><strong>Coat of Arms:</strong> {house.coatOfArms}</p>
             
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Content;