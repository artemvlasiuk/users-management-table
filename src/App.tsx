import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { usersThunks } from './features/usersSlice';
import { DataTable } from './components/Table/DataTable';
import { columns } from './components/Table/columns';
import { User } from './types/User';
import { Loader } from './components/Loader';

function App() {
  const dispatch = useAppDispatch();
  const loaded = useAppSelector((state) => state.users.loaded);
  const data: User[] = useAppSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(usersThunks.loadUsers());
  }, [dispatch]);

  if (!loaded) {
    return <Loader />;
  }

  return (
    <div className='container mx-auto py-10 px-10'>
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default App;
