import supabase from './supabase';

export async function getCatbins() {
  const { data, error } = await supabase.from('cabins').select('*');
  if (error) {
    console.error(error);
    throw new Error('Cabins could not be loaded');
  }
  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from('cabins').delete().eq('id', id);

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be deleted');
  }
}

export async function createCabin(newCabin) {
  console.log(newCabin);

  const { data, error } = await supabase
    .from('cabins')
    .insert([{ ...newCabin }])
    .select();

  if (error) {
    console.error(error);
    throw new Error('Cabins could not be create');
  }
}
