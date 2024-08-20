import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';

function UpdateSettingsForm() {
  const { settings, isLoading, error } = useSettings();
  const { register, handleSubmit, formState } = useForm({
    defaultValues: settings,
  });

  function onSubmit(data) {
    console.log(data);
  }

  function onError() {
    console.log(formState.errors);
  }

  if (isLoading) return <Spinner />

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Minimum nights/booking">
        <Input
          {...register('max_booking_length', { required: 'kuy' })}
          type="number"
          id="min-nights"
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          {...register('max_booking_length', { required: 'kuy' })}
          type="number"
          id="max-nights"
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          {...register('max_guests_per_booking', { required: 'kuy' })}
          type="number"
          id="max-guests"
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          {...register('breakfast_price', { required: 'kuy' })}
          type="number"
          id="breakfast-price"
        />
      </FormRow>
      <Button>click</Button>
    </Form>
  );
}

export default UpdateSettingsForm;
