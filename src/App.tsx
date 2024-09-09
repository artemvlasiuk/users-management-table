import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { usersThunks } from './features/usersSlice';
import { DataTable } from './components/Table/DataTable';
import { columns } from './components/Table/columns';
import { User } from './types/User';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';

function App() {
  const dispatch = useAppDispatch();
  const loaded = useAppSelector((state) => state.users.loaded);
  const error = useAppSelector((state) => state.users.hasError);
  const data: User[] = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(usersThunks.loadUsers());
  }, [dispatch]);

  return (
    <div className='container mx-auto py-10 px-10'>
      {error && <ErrorMessage />}
      {!loaded && !error && <Loader />}
      {loaded && !error && <DataTable columns={columns} data={data} />}
    </div>
  );
}

export default App;
