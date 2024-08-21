import { useForm } from 'react-hook-form';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Button from '../../ui/Button';
import Spinner from '../../ui/Spinner';
import useUpdateSetting from './useUpdateSettings';

function UpdateSettingsForm() {
  const { settings, isLoading } = useSettings();
  const { isUpdating, updateCabin } = useUpdateSetting();
  const {
    breakfast_price,
    max_booking_length,
    max_guests_per_booking,
    min_booking_length,
  } = settings;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateCabin({ [field]: value });
  }

  if (isLoading) return <Spinner />;
  return (
    <Form>
      <FormRow id="min-nights" label="Minimum nights/booking">
        <Input
          disabled={isUpdating}
          defaultValue={min_booking_length}
          type="number"
          id="min-nights"
          onBlur={(e) => handleUpdate(e, 'min_booking_length')}
          min="0"
        />
      </FormRow>
      <FormRow id="max-nights" label="Maximum nights/booking">
        <Input
          disabled={isUpdating}
          defaultValue={max_booking_length}
          type="number"
          id="max-nights"
          onBlur={(e) => handleUpdate(e, 'max_booking_length')}
          min="0"
        />
      </FormRow>
      <FormRow id="max-guests" label="Maximum guests/booking">
        <Input
          disabled={isUpdating}
          defaultValue={max_guests_per_booking}
          type="number"
          id="max-guests"
          onBlur={(e) => handleUpdate(e, 'max_guests_per_booking')}
          min="0"
        />
      </FormRow>
      <FormRow id="breakfast-price" label="Breakfast price">
        <Input
          disabled={isUpdating}
          defaultValue={breakfast_price}
          type="number"
          id="breakfast-price"
          onBlur={(e) => handleUpdate(e, 'breakfast_price')}
          min="0"
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
