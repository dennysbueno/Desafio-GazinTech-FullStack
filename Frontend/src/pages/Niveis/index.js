import {
  Button,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { deleteNivel, findAllNiveis } from "../../services/niveis.service";

import { ModalNiveisCreate } from "./components/ModalNiveisCreate";
import { ModalNiveisUpdate } from "./components/ModalNiveisUpdate";
import { Header, Wrapper } from "./styles";

export const ListaNiveis = () => {
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
  const handleDelete = (id) => {
    deleteNivel(id)
      .then(() => {
        alert("Deletado com Sucesso!");
        setNiveis(niveis.filter((nivel) => nivel.id !== id));
      })
      .catch(() => {
        alert("Erro ao deletar");
      });
  };
  return (
    <Wrapper>
      <Header>
        <h1>Niveis Profissionais</h1>
        <ModalNiveisCreate />
      </Header>
      <TableContainer overflowY height={350} margin={4}>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Nivel</Th>
              <Th>Quantidade de Dev's</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {niveis.map((nivel) => (
              <Tr key={nivel.id}>
                <Td>{nivel.nivel}</Td>
                <Td>{nivel.quantidade}</Td>
                <Td>
                  <Stack spacing={3} direction="row" align="center">
                    <ModalNiveisUpdate nivel={nivel} />
                    <Button
                      onClick={() => handleDelete(nivel.id)}
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
