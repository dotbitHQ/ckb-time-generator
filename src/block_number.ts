import WebSocket from 'ws'

import { createTimeCell } from './time/create'
import { updateTimeCell } from './time/update'
import { getTimeIndexStateCell } from './time/helper'
import { CKB_WS_URL } from './utils/config'

const startBlockNumberServer = async () => {
  let ws = new WebSocket(CKB_WS_URL)

  ws.on('open', function open() {
    ws.send('{"id": 2, "jsonrpc": "2.0", "method": "subscribe", "params": ["new_tip_header"]}')
  })

  ws.on('message', async function incoming(data) {
    if (JSON.parse(data).params) {
      const tipNumber = JSON.parse(JSON.parse(data).params.result).number
      console.info('New Block', tipNumber)
      if (parseInt(tipNumber, 16) % 2 === 0) {
        await createOrUpdateTimeInfoCell()
      }
    }
  })

  ws.on('close', async function close(code, reason) {
    console.info('Websocket Close', code, reason)
    await createOrUpdateTimeInfoCell()
    startBlockNumberServer()
  })
}

const createOrUpdateTimeInfoCell = async () => {
  const { timeIndexStateCell } = await getTimeIndexStateCell(false)
  if (!timeIndexStateCell) {
    await createTimeCell(false)
  } else {
    await updateTimeCell(false)
  }
}

startBlockNumberServer()