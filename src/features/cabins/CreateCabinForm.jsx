import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCabin } from '../../services/apiCabins';
import toast from 'react-hot-toast';
import FormRow from '../../ui/FormRow';

function CreateCabinForm() {
  const queryClient = useQueryClient();
  const { register, handleSubmit, reset, getValues, formState } = useForm();

  const { errors } = formState;
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: createCabin,
    onSuccess: () => {
      toast.success('Cabin successfully created');
      queryClient.invalidateQueries({ queryKey: ['cabins'] });
      reset();
    },

    onError: (err) => toast.error(err.message),
  });

  function onSubmit(data) {
    // console.log(data);
    mutate({ ...data, image: data.image[0] });
  }
  function onError(error) {
    // console.log(error);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow id="name" label="Cabin name" error={errors.name}>
        <Input
          disabled={isCreating}
          type="text"
          id="name"
          {...register('name', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow
        id="max_capacity"
        label="Maximum capacity"
        error={errors.max_capacity}
      >
        <Input
          disabled={isCreating}
          type="number"
          id="max_capacity"
          {...register('max_capacity', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1 ',
            },
          })}
        />
      </FormRow>
      <FormRow
        id="regular_price"
        label="Regular Price"
        error={errors.regular_price}
      >
        <Input
          disabled={isCreating}
          type="number"
          id="regular_price"
          {...register('regular_price', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1 ',
            },
          })}
        />
      </FormRow>

      <FormRow id="discount" label="Discount" error={errors.discount}>
        <Input
          disabled={isCreating}
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            min: {
              value: 1,
              message: 'Capacity should be at least 1 ',
            },
            validate: (value) =>
              +value <= +getValues().regular_price ||
              'Discount should be less than regular price',
          })}
        />
      </FormRow>
      <FormRow
        id="description"
        label="Description for website"
        error={errors.description}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register('description', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image}>
        <FileInput id="image" accept="image/*" {...register('image')} />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Add cabin</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
