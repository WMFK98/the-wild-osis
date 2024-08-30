import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { getCatbins } from '../../services/apiCabins';
import Spinner from '../../ui/Spinner';
import CabinRow from './CabinRow';
import useCabins from './useCabins';
import Table from '../../ui/Table';
import Menus from '../../ui/Menus';
import { useSearchParams } from 'react-router-dom';
import Empty from '../../ui/Empty';

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

  //sort

  const sortBy = searchParams.get('sortBy') || 'startDate-asc';
  const [field, direction] = sortBy.split('-');
  const modifier = direction === 'asc' ? 1 : -1;

  // const sortedCabinsByChar = filteredCabin.sort(
  //   (a, b) => a[field].localeCompare(b[field]) * modifier
  // );
  const sortedCabins = filteredCabin.sort(
    (a, b) => (a[field] - b[field]) * modifier
  );

  if (!cabins.length) return <Empty resource="cabins" />;

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
          data={sortedCabins}
          render={(filteredCabin) => (
            <CabinRow cabin={filteredCabin} key={filteredCabin.id} />
          )}
        />
      </Table>
    </Menus>
  );
}
