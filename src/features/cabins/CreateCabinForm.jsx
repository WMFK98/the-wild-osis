import Input from '../../ui/Input';
import Form from '../../ui/Form';
import Button from '../../ui/Button';
import FileInput from '../../ui/FileInput';
import Textarea from '../../ui/Textarea';
import { useForm } from 'react-hook-form';
import FormRow from '../../ui/FormRow';
import useCreateCabin from './useCreateCabin';
import useEditCabin from './useEditCabin';
function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { errors } = formState;
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();
  const isWorking = isEditing || isCreating;

  function onSubmit(data) {
    const image = typeof data.image === 'string' ? data.image : data.image[0];
    console.log(editId);
    if (isEditSession)
      editCabin({ newcabinData: { ...data, image }, id: editId });
    else createCabin({ ...data, image: image }, { onSuccess: () => reset() });
  }
  function onError(error) {
    // console.log(error);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow id="name" label="Cabin name" error={errors.name}>
        <Input
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
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
          disabled={isWorking}
          type="number"
          id="discount"
          defaultValue={0}
          {...register('discount', {
            required: 'This field is required',
            min: {
              value: 0,
              message: 'Capacity should be nagative',
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
        <FileInput
          id="image"
          accept="image/*"
          {...register('image', {
            required: isEditSession ? false : 'This field is required',
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? 'Edit cabin' : 'Add cabin'}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
