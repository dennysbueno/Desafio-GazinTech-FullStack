import { api } from "./index";

export async function findAllNiveis() {
  return api.get("/niveis");
}

export async function insertNivel(nivel) {
  return api.post("/niveis", nivel);
}

export async function deleteNivel(id) {
  return api.delete(`nivel/${id}`);
}

export async function updateNivel(id, nivel) {
  return api.put(`nivel/${id}`, nivel);
}
