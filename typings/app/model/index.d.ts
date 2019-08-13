// This file is created by egg-ts-helper@1.25.5
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAssistant = require('../../../app/model/assistant');

declare module 'egg' {
  interface IModel {
    Assistant: ReturnType<typeof ExportAssistant>;
  }
}
