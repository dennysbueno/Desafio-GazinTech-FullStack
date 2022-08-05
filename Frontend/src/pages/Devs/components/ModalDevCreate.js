import React, { useEffect, useState } from "react";

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure
} from "@chakra-ui/react";

import { insertDev } from "../../../services/devs.service";
import { findAllNiveis } from "../../../services/niveis.service";

export const ModalDevCreate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [sexo, setSexo] = useState("");
  const [data_nascimento, setData_nascimento] = useState("");
  const [idade, setIdade] = useState("");
  const [equipe, setEquipe] = useState("");
  const [niveis_id, setNiveis_id] = useState("");

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

  async function NovoDev(e) {
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

    insertDev(data)
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
        Novo Dev
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cadastro de Desenvolvedor</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form id="novoDev" onSubmit={NovoDev}>
              <FormControl>
                <FormLabel>Nome</FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sobrenome</FormLabel>
                <Input
                  placeholder="Sobrenome"
                  value={sobrenome}
                  onChange={(e) => setSobrenome(e.target.value)}
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Sexo</FormLabel>
                <Input
                  placeholder="Sexo"
                  value={sexo}
                  onChange={(e) => setSexo(e.target.value)}
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Data de Nascimento</FormLabel>
                <Input
                  type="date"
                  placeholder="Data de Nascimento"
                  value={data_nascimento}
                  onChange={(e) => setData_nascimento(e.target.value)}
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Idade</FormLabel>
                <Input
                  type="number"
                  placeholder="Idade"
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  required
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Equipe</FormLabel>
                <Input
                  placeholder="Equipe"
                  value={equipe}
                  onChange={(e) => setEquipe(e.target.value)}
                  required
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
            <Button type="submit" form="novoDev" colorScheme="blue" mr={3}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
