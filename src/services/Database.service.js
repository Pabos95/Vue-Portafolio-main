import { createClient } from '@supabase/supabase-js'

export default class DatabaseService {
    constructor() {
        this.database = createClient(process.env.VUE_APP_SUPABASE_URL, process.env.VUE_APP_SUPABASE_SECRET_KEY);

    }

    getInstance() {
        return this.database;
    }
}