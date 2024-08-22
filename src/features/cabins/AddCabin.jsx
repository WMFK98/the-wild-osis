import React, { useState } from 'react';
import CreateCabinForm from './CreateCabinForm';
import Button from '../../ui/Button';
import Modal from '../../ui/Modal';

export default function AddCabin() {
  //   const [isOpenModal, setIsOpenModal] = useState();
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm type="modal" />
      </Modal.Window>
    </Modal>
  );
  // <div>
  //   {isOpenModal && (
  //     <Modal onClose={() => setIsOpenModal(false)}>
  //       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
  //     </Modal>
  //   )}
  //   <Button onClick={() => setIsOpenModal((show) => !show)}>
  //     Add new cabin
  //   </Button>
  // </div>
  //   );
}
