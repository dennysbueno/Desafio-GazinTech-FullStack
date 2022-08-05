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

import { insertNivel } from "../../../services/niveis.service";

export const ModalNiveisCreate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [nivel, setNivel] = useState();

  async function NovoNivel(e) {
    e.preventDefault()
    const data = {
      nivel,
    };

    insertNivel(data)
      .then(() => {
        alert(`Cadastrado com sucesso!`);
      })
      .catch(() => {
        alert("Erro no cadastro, tente novamente.");
      }).finally(() =>{
        window.location.reload()
      });
  }

  return (
    <>
      <Button onClick={onOpen} colorScheme="teal">
        Novo Nivel
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Nivel</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form id="novoNivel" onSubmit={NovoNivel}>
              <FormControl>
                <FormLabel>Nivel</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Nivel"
                  value={nivel}
                  onChange={(e) => setNivel(e.target.value)}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" form="novoNivel" colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
