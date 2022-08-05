import { api } from "./index";

export async function findAllDevs() {
  return api.get("/devs");
}

export async function insertDev(dev) {
  return api.post("/devs", dev);
}

export async function deleteDev(id) {
  return api.delete(`dev/${id}`);
}

export async function showDev(id) {
  return api.get(`dev/${id}`);
}

export async function updateDev(id, dev) {
  return api.put(`dev/${id}`, dev);
}
