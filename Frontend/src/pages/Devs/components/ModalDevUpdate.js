import React, { useEffect, useState } from "react";

import {
  Button, FormControl,
  FormLabel,
  Input, Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select, useDisclosure
} from "@chakra-ui/react";

import { updateDev } from "../../../services/devs.service";
import { findAllNiveis } from "../../../services/niveis.service";

export const ModalDevUpdate = ({ dev }) => {
  const [nome, setNome] = useState(dev.nome);
  const [sobrenome, setSobrenome] = useState(dev.sobrenome);
  const [sexo, setSexo] = useState(dev.sexo);
  const [data_nascimento, setData_nascimento] = useState(dev.data_nascimento);
  const [idade, setIdade] = useState(dev.idade);
  const [equipe, setEquipe] = useState(dev.equipe);
  const [niveis_id, setNiveis_id] = useState(dev.niveis_id);

  const [niveis, setNiveis] = useState([]);
  useEffect(() => {
    findAllNiveis()
      .then(({ data }) => {
        setNiveis(data);
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const handleUpdate = (e) => {
    e.preventDefault()
    const data = {
      nome,
      sobrenome,
      sexo,
      data_nascimento,
      idade,
      equipe,
      niveis_id,
    };

    updateDev(dev.id, data)
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
          <ModalHeader>Editar de Desenvolvedor</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form id="editardev" onSubmit={handleUpdate}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sobrenome</FormLabel>
                <Input
                  placeholder="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sexo</FormLabel>
                <Input
                  placeholder="Sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Data de Nascimento</FormLabel>
                <Input
                  type="date"
                  placeholder="Data de Nascimento"
                  value={data_nascimento}
                  onChange={(e) => setData_nascimento(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Idade</FormLabel>
                <Input
                  placeholder="Idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Equipe</FormLabel>
                <Input
                  placeholder="Equipe"
                  value={equipe}
                  onChange={(e) => setEquipe(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Nivel Proficional</FormLabel>
                <Select
                  placeholder="Selecione..."
                  value={niveis_id}
                  onChange={(e) => setNiveis_id(e.target.value)}
                  required
                >
                  {niveis.map(({ nivel, id }) => (
                    <option key={id} value={id}>
                      {nivel}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" form="editardev" colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
