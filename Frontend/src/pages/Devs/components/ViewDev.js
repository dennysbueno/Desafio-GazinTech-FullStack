import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { showDev } from "../../../services/devs.service";
import { FormContainer, Header, Wrapper } from "../styles";

export const VerDev = () => {
  const { id } = useParams();
  const [dev, setDev] = useState();
  useEffect(() => {
    showDev(id).then(({ data }) => {
      setDev(data);
    });
  }, [id]);

  return (
    <>
      <Wrapper>
        <Header>
          <h1>Dados do Desenvolvedor</h1>
        </Header>
        <FormContainer>
          <FormControl>
            <FormLabel>Nome</FormLabel>
            <Input value={dev?.nome} disabled />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Sobrenome</FormLabel>
            <Input value={dev?.sobrenome} disabled />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Sexo</FormLabel>
            <Input value={dev?.sexo} disabled />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Data de Nascimento</FormLabel>
            <Input type="date" value={dev?.data_nascimento} disabled />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Idade</FormLabel>
            <Input value={dev?.idade} disabled />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Equipe</FormLabel>
            <Input value={dev?.equipe} disabled />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Nivel Proficional</FormLabel>
            <Input value={dev?.nivel} disabled />
          </FormControl>
        </FormContainer>
      </Wrapper>
    </>
  );
};
