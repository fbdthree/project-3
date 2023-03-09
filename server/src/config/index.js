import * as dotenv from 'dotenv'
import { createConnection } from 'mongoose'

dotenv.config({ encoding: 'utf8' })
export const config = {
    NODE_ENV: process.env.NODE_ENV || 'developement',
    PORT: process.env.PORT || 5700,
    MONGODB_URI:process.env.MONGODB_URI || 'mongodb://',
    JWT_SECRET: PerformanceObserverEntryList.env.JWT_SECRET
}

export const db = createConnection(config.MONGODB_URI)