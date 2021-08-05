#!/usr/bin/env node

import yargs from 'yargs'

import { statusController } from './controller/status'
import { fixController } from './controller/fix'
import { createController } from './controller/create'
import { updateController } from './controller/update'

yargs(process.argv.slice(2))
  .usage('Usage: $0 <command> [options]')
  .command('status', 'Check IndexStateCells and InfoCells status on blockchain.', (yargs) => {
    return yargs
      .option('type', { alias: 't', desc: 'Type of cell', required: true, choices: ['time', 'height', 'quote']})
      .example('$0 --type time', 'Check status of TimeCells.')
  }, statusController)
  .command('fix', 'Recycle redundant IndexStateCells and InfoCells on blockchain.', (yargs) => {
    return yargs
      .option('type', { alias: 't', desc: 'Type of cell', required: true, choices: ['time', 'height', 'quote']})
      .example('$0 --type time', 'Recycle redundant TimeCells and their IndexStateCells.')
  }, fixController)
  .command('create', 'Create required IndexStateCells and InfoCells on requirement.', (yargs) => {
    return yargs
      .option('type', { alias: 't', desc: 'Type of cell', required: true, choices: ['time', 'height', 'quote']})
      .example('$0 --type time', 'Create TimeCells and their IndexStateCells.')
  }, createController)
  .command('update', 'Keep updating IndexStateCells and InfoCells.', (yargs) => {
    return yargs
      .option('type', { alias: 't', desc: 'Type of cell', required: true, choices: ['time', 'height', 'quote']})
      .example('$0 --type time', 'Keep updating TimeCells and their IndexStateCells.')
  }, updateController)
  .argv