import request from "superagent";
const appConfig = require("../../../outCalls/config");
import { baseURL } from "./baseURL";

export function checkRootSettings() {
  let URL = `${baseURL}/api/rootsettings`;
  return new Promise((resolve, reject) => {
    request.get(URL).set("Accept", "application/json").end((err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res.text);
      }
    });
  });
}

export function addRootSettings(settingsData) {
  let URL = `${baseURL}/api/rootsettings`;
  return new Promise((resolve, reject) => {
    request
      .post(URL)
      .send(settingsData)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.text);
        }
      });
  });
}

export function getIDByName(username) {
  let URL = `https://api.github.com/users/${username}`;
  return new Promise((resolve, reject) => {
    request
      .get(URL)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .end((err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res.text);
        }
      });
  });
}
