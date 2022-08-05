import React, { useState } from "react";

import {
  Button, FormControl,
  FormLabel,
  Input, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay, useDisclosure
} from "@chakra-ui/react";

import { updateNivel } from "../../../services/niveis.service";

export const ModalNiveisUpdate = ({ nivel }) => {
  const [nivelUpdate, setNivelUpdate] = useState(nivel.nivel);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleUpdate = (e) => {
    e.preventDefault()
    updateNivel(nivel.id, { nivel: nivelUpdate })
      .then(() => {
        alert("Editado com Sucesso");
      })
      .catch(() => {
        alert("Erro ao editar");
      }).finally(() =>{
        window.location.reload()
      });
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="yellow" size="xs">
        Editar
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Editar de Nivel</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form id="editarNivel" onSubmit={handleUpdate}>
              <FormControl>
                <FormLabel>Nivel</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Nivel"
                  value={nivelUpdate}
                  onChange={(e) => setNivelUpdate(e.target.value)}
                  required
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" form="editarNivel" colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
