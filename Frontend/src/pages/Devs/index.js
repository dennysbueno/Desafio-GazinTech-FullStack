import {
  Button, Stack, Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { React, useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { deleteDev, findAllDevs } from "../../services/devs.service";
import { ModalDevCreate } from "./components/ModalDevCreate";
import { ModalDevUpdate } from "./components/ModalDevUpdate";
import { Header, Wrapper } from "./styles";

export const ListaDevs = () => {
  const [devs, setDevs] = useState([]);
  useEffect(() => {
    findAllDevs()
      .then(({ data }) => {
        setDevs(data);
      })
      .catch(({ response }) => {
        alert(response.data.message);
      });
  }, []);

  const handleDelete = (id) => {
    deleteDev(id)
      .then(() => {
        alert("Deletado com Sucesso!");
        setDevs(devs.filter((dev) => dev.id !== id));
      })
      .catch(() => {
        alert("Erro ao deletar");
      });
  };

  return (
    <Wrapper>
      <Header>
        <h1>Desenvolvedores</h1>
        <ModalDevCreate />
      </Header>
      <TableContainer overflowY height={350} margin={4}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Equipe</Th>
              <Th>Nivel</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {devs.map((dev) => (
              <Tr key={dev.id}>
                <Td>{dev.nome}</Td>
                <Td>{dev.equipe}</Td>
                <Td>{dev.nivel}</Td>
                <Td>
                  <Stack spacing={3} direction="row" align="center">
                    <Link to={`/viewDev/${dev.id}`}>
                      <Button colorScheme="teal" size="xs">
                        Ver
                      </Button>
                    </Link>
                    <ModalDevUpdate dev={dev} />
                    <Button
                      onClick={() => handleDelete(dev.id)}
                      colorScheme="red"
                      size="xs"
                    >
                      Deletar
                    </Button>
                  </Stack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
};
