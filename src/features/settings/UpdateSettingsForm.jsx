import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import useUpdateSetting from './useUpdateSettings-VForm';

function UpdateSettingsForm() {
  const { settings, isLoading } = useSettings();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: settings,
  });

  const { errors } = formState;

  const { isUpdating, updateCabin } = useUpdateSetting();

  function onSubmit(data) {
    const res = updateCabin(data);
  }

  if (isLoading) return <Spinner />;
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        id="min-nights"
        label="Minimum nights/booking"
        error={errors.min_booking_length}
      >
        <Input
          disabled={isUpdating}
          {...register('min_booking_length', {
            required: 'This field is required',
          })}
          type="number"
          id="min-nights"
        />
      </FormRow>
      <FormRow
        id="max-nights"
        label="Maximum nights/booking"
        error={errors.max_booking_length}
      >
        <Input
          disabled={isUpdating}
          {...register('max_booking_length', {
            required: 'This field is required',
          })}
          type="number"
          id="max-nights"
        />
      </FormRow>
      <FormRow
        id="max-guests"
        label="Maximum guests/booking"
        error={errors.max_guests_per_booking}
      >
        <Input
          disabled={isUpdating}
          {...register('max_guests_per_booking', {
            required: 'This field is required',
          })}
          type="number"
          id="max-guests"
        />
      </FormRow>
      <FormRow
        id="breakfast-price"
        label="Breakfast price"
        error={errors.breakfast_price}
      >
        <Input
          disabled={isUpdating}
          {...register('breakfast_price', {
            required: 'This field is required',
          })}
          type="number"
          id="breakfast-price"
        />
      </FormRow>
      <Button disabled={isUpdating}>Update</Button>
    </Form>
  );
}

export default UpdateSettingsForm;
