// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportModel = require('../../../app/service/model');

declare module 'egg' {
  interface IService {
    model: ExportModel;
  }
}
