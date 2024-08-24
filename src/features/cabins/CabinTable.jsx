import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCatbins } from '../../services/apiCabins';
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import useCabins from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';

export default function CabinTable() {
  const { cabins, error, isLoading } = useCabins();
  const [searchParams] = useSearchParams();
  if (isLoading) return <Spinner />;
  const filterValue = searchParams.get('discount') || 'all';

  let filteredCabin;
  if (filterValue === 'all') filteredCabin = cabins;
  if (filterValue === 'with-discount')
    filteredCabin = cabins.filter((cabin) => cabin.discount === 0);
  if (filterValue === 'no-discount')
    filteredCabin = cabins.filter((cabin) => cabin.discount > 0);
  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>capacity</div>
          <div>Price</div>
          <div>Discount</div>
        </Table.Header>
        <Table.Body
          data={filteredCabin}
          render={(filteredCabin) => (
            <CabinRow cabin={filteredCabin} key={filteredCabin.id} />
          )}
        />
      </Table>
    </Menus>
  );
}
